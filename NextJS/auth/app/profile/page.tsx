"use client";
import { use, useEffect, useState } from "react";

import axios from "axios";
export default function Profile() {
    const [user,setUser]=useState<string|null>(null);
    useEffect(()=>{
        const res= axios.get('http://localhost:3000/api/profile',{
            headers:{
                'Authorization':localStorage.getItem('token')
            } 
        }).then (res=>{
            setUser(res.data.user);
        });
    });

        return <div>
                 <p>User: {user}</p>
            </div>

}