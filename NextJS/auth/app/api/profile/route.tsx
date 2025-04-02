import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

export  function GET(req:NextRequest){
    // const headers=req.headers;
    // const authheader=headers['authorization'];
    // const decoded=jwt.decode(authheader,'JWT_SECRET');
    // const userId=decoded.userId; 
    return NextResponse.json({
        "user":'1',
        "completed":true

    });
}