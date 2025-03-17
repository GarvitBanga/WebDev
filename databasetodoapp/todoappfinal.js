const express=require('express');
const app = express();
app.use(express.json());
const jwt = require('jsonwebtoken');
const JWT_SECRET='JWT_SECRET';
const { ObjectId } = require('mongodb');

const mongoose=require('mongoose'); 

const path = require('path');
const dotenv = require('dotenv');
const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });
const dblink = process.env.DB_LINK;
// console.log("dblink",dblink);
mongoose.connect(dblink);


const { UserModel, TodosModel } = require("./db");



const bcrypt=require('bcrypt');
const { z } = require("zod");


app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.post('/signup',async function(req,res){
    // input validation
    const reqdbody=z.object({
        email:z.string().email(),
        name:z.string(),
        password:z.string().min(8).max(30).refine((value)=>{
            const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|"\-=`]/;
            const numberRegex = /[0-9]/;
            const lowerCaseRegex = /[a-z]/;
            const upperCaseRegex = /[A-Z]/;
            return specialCharRegex.test(value) && numberRegex.test(value) && lowerCaseRegex.test(value) && upperCaseRegex.test(value);
        },{message:'Password must contain at least one special character and one number and one uppercase and lowercase letter'})
    });
    // const parseddata=reqdbody.parse(req.body); //throws error so we use safeParse
    const parseddatasafe=reqdbody.safeParse(req.body); //this returns a object with success and error

    if(!parseddatasafe.success){
        res.json({
            message:'Incorrect data format',
            error:parseddatasafe.error
        });
        return;
    }



    const email=req.body.email;
    const name=req.body.name;
    const password=req.body.password;
    
    let error=false;
    try{
        const hashedpass=await bcrypt.hash(password,10);
        console.log(hashedpass);
    await UserModel.create({
        email:email,
        name:name,
        password:hashedpass
    });
}catch(err){
    res.status(400).json({message:'Email already exists'});
    error=true;
}
    if(!error){
        res.json({message:'User created successfully'});
    }
});


app.post('/signin',async function(req,res){
    const email=req.body.email;
    const password=req.body.password;

    const user=await UserModel.findOne({
        email:email
    });
    if(!user){
        res.status(400).json({message:'User not found'});
    }
    const found= await bcrypt.compare(password,user.password); //need await as it returns a promise
    console.log(found);
    if(found){
        const token=jwt.sign({id:user._id.toString()},JWT_SECRET);
        res.json({message:'User found',token:token});
    }else{
        res.status(400).json({message:'Incorrect Password'});
    }
});
function auth(req,res,next){
    const jwttoken=req.headers.token;
    try{
        const decoded=jwt.verify(jwttoken,JWT_SECRET);
        if(decoded.id){
            req.userid=decoded.id;
            next();
         }else{
            res.status(401).json({message:'You are not signed in'});
        }
    }
    catch(err){
        res.status(401).json({message:'Token error'});
    }
}
app.post('/todo',auth,async (req,res)=>{
    const todo=req.body.todo;
    const done=req.body.done;
    const userid=req.userid;
    console.log(userid);
    await TodosModel.create({
        "userId":userid,
        "description":todo,
        "done":done,
        
    });
    res.json({message:'Todo created successfully'});
});

app.get('/todos',auth,async (req,res)=>{
    const userid=req.userid;
    let response = await TodosModel.find({userId:userid});
    res.json(response);
});




app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
