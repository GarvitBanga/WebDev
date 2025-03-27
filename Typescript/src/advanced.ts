interface User{
    name:string,
    age:number,
}

function sumofage(user1:User,user2:User){
    return user1.age+user2.age;
}

const age=sumofage({name:"federico",age:26},{name:"albert",age:18});
console.log(age);




interface User2{
    name:string,
    age:number,
    email:string,
    password:string
}


// PICK
type Updateprops=Pick<User2,"name"|"age"|"email">; //picking only name,age and email from the User2 interface

function updateuser(updateprops:Updateprops){
    // hit the database to update the user
    console.log(updateprops.name);
}
let user11:User2={
    name:"garvitbanga",
    age:26,
    email:"garvit@gmail.com",
    password:"123456"
}
let updateuser11:Updateprops={
    name:"federico",
    age:26,
    email:"federico@gmail.com"
}
updateuser(updateuser11);



// PARTIAL


type PartialUpdateprops=Partial<Updateprops>; //partial is used to make some fields optional
function partialupdateuser(updateprops:PartialUpdateprops){
    // hit the database to update the user
    console.log(updateprops.name);
}
partialupdateuser({name:"federico valverde"});


// READONLY



const userobj={name:"federico",age:26};

userobj.name="federico valverde"; //even though the array is a const still the name can be changed
console.log(userobj);

const arrc=[1,2,3];
arrc[0]=10; //even though the array is a const still the value can be changed
console.log(arrc);

// To enforce that the value also can't be changed we can use readonly

type userobjreadonly={
    readonly name:string,
    readonly age:number
};
const userobjreadonly1:userobjreadonly={
    name:"federico",
    age:26
}
// userobjreadonly1.name="federico valverde"; //gives an error as the name is readonly
console.log(userobjreadonly1);


const user31:Readonly<User2>={
    name:"federico",
    age:26,
    email:"federico@gmail.com",
    password:"123456"
}
// this also works for interfaces which are not readonly but you want to make a object readonly


// Record and map


type Usertyp1={
    id:string,
    username:string
}
type Userstype={ //this looks ugly
    [key:string]:Usertyp1;
}
const users:Userstype={
    "ras1q@d":{
        id:"ras1q@d",
        username:"federico",
    },
    "ras2q@d":{
        id:"ras2q@d",
        username:"valverde",
    },

}
type Userstyperecord=Record<string,Usertyp1>;
// replacement for Userstype
// type Userstype={ //this looks ugly
// [key:string]:Usertyp1;
// }

// MAP

const usermap=new Map<string,Usertyp1>();

usermap.set("ras1q@d",{
    id:"ras1q@d",   
    username:"federico",
});
usermap.set("ras2q@d",{
    id:"ras2q@d",
    username:"valverde",
});
console.log(usermap.get("ras1q@d"));
 
// Exclude is similar to Pick but it excludes the keys
type Eventype='click'|'hover'|'scroll';
type ExcludeEvent=Exclude<Eventype,'scroll'>;

const handleevnet=(event:Eventype)=>{
    console.log(event);
}   
handleevnet('click');




// Type Inference in zod
import z from 'zod';

const schema=z.object({
    name:z.string(),    
    email:z.string().email(),
    age:z.number().min(18).max(30).optional(),
});


type Finalschematype=z.infer<typeof schema>;

import express from 'express';
const app=express();
app.use(express.json());
app.put('/user',function(req,res){    
    const {success}=schema.safeParse(req.body);
    const updatebody:Finalschematype=req.body;
    // assigning a type to updatebody
    if(!success){
        res.status(400).json({message:'Error in updating user'});
        return;
    }
    res.json({message:'User updated successfully'});
});
