import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';
export async function POST(req:NextRequest){


   
    const body=await req.json();
    console.log(body);
    const password=body.password;
    const username=body.username;

    // check from database if username and password are correct

    const  userId=1;
    const token=jwt.sign({id:userId},'JWT_SECRET');
    return NextResponse.json({message:'User found',token:token}); 

}