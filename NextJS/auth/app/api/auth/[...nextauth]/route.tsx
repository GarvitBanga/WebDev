// import { NextResponse } from "next/server";


// export function GET(){
//     return NextResponse.json({
//         "message":"hello"
//     });
// }


import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

const authHandler = NextAuth({
    providers:[
        CredentialsProvider({
            name:"CredentialsProvider",
            credentials:{
                username:{
                    label:"Username",
                    type:"text"
                },
                password:{
                    label:"Password",
                    type:"password"
                }
            },
            async authorize(credentials,req){
                const username=credentials?.username;
                const password=credentials?.password;
                console.log(username);
                console.log(password);
                
                // db request to check if username and password are correct
                const user={
                    username:"garvit",
                    id:"1",
                    password:"123456"
                };
                if(user)
                return user;
                else return null;
                
            }
        }),
        GoogleProvider({
            clientId:"ewddscs",//process.env.GOOGLE_CLIENT_ID,
            clientSecret:"wecdxdcs"//process.env.GOOGLE_CLIENT_SECRET,
        }),
        GithubProvider({
            clientId:"ewddscs",
            clientSecret:"wecdxdcs"
        })
    ]
});


export {authHandler as GET,authHandler as POST};
// another way to do it
// export const GET=authHandler;
// export const POST=authHandler2;