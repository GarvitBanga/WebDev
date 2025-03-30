import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
// const prismaclient= new PrismaClient();
// using singleton
import prismaclient from '../../../lib/db';



export async function POST(req:NextRequest){
    const data=await req.json();
    console.log(data);


    await prismaclient.user.create({
        data:{
            username:data.username,
            password:data.password
        }
    });






    return NextResponse.json({
            message:'User created successfully'
        }
     
    );
}




export async function GET(req:NextRequest){
    

    const user=await prismaclient.user.findFirst();






    return NextResponse.json({user:user});
}
