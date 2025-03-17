const express=require('express');
const app = express();
app.use(express.json());
const jwt = require('jsonwebtoken');
const JWT_SECRET='JWT_SECRET';
const { ObjectId } = require('mongodb');

const mongoose=require('mongoose'); 
const fs=require('fs');
const path=require('path');
const dblink=fs.readFileSync(path.join(__dirname,'../mongodblink'),'utf8');  
mongoose.connect(dblink);


const { UserModel, TodosModel } = require("./db");



const bcrypt=require('bcrypt');


app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.post('/signup',async function(req,res){
    const email=req.body.email;
    const name=req.body.name;
    const password=req.body.password;
    const hashedpass=await bcrypt.hash(password,10);
    console.log(hashedpass);
    // another way to hash password
    // const hashedpass2=bcrypt.genSalt(10,function(err,salt){
    //     bcrypt.hash(password,salt,function(err,hash){
    //         if(err){
    //             console.log(err);
    //         }
    //         else{
    //             console.log(hash);
    //         }
    //     }); 
    // });

    try{
    await UserModel.create({
        email:email,
        name:name,
        password:hashedpass
    });
}catch(err){
    res.status(400).json({message:'Error in creating user'});
}

    res.json({message:'User created successfully'});
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
