import dotenv from 'dotenv';
dotenv.config();
const dblink = process.env.DATABASE_URL;
console.log(dblink);

import { PrismaClient } from '@prisma/client';


const client = new PrismaClient();

async function createuser(){
    const res=await client.user.create({
        data:{
            username:'garvit',
            password:'123456',
            age:26,
            city:'delhi'
        }
    });
    console.log(res);
}
// createuser();

async function getuser(){
    const user=await client.user.findFirst(
        {
            where:{
                city:'delhi'
            }

        }
    );
    console.log(user?.city);
}
getuser();

async function updateuser(){
    const user=await client.user.update({
        where:{
            id:1
        },
        data:{
            username:'garvit',
        }
    });
    console.log(user.username);
}
// updateuser();

async function addTodo(){
    const user=await client.user.findFirst({
        where:{
            id:1
        }
    });
    if(!user){
        return;
    }
    const todo=await client.todo.create({
        data:{
            title:'todo',
            description:'todo',
            done:false,
            userId:user?.id
        }
    });
    console.log(todo);
}
// addTodo();

async function getTodos(){
    const todos=await client.todo.findMany({
        where:{
            userId:1
        }
    });
    console.log(todos);
}
getTodos();



import express from 'express';
const app = express();
app.use(express.json());
app.get('/users',async(req,res)=>{
     
    const users=await client.user.findMany();
    res.json(users);
});

app.get('/todos/:id',async(req,res)=>{
     
    const users=await client.user.findFirst(
        {
            where:{
                id:parseInt(req.params.id)
            }, 
            select:{
                todos:true,
                username:true,
                password:true
            }
        }
    );
    res.json(users);
});



app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});