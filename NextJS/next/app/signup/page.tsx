"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Signup() {
    const [username,setUsername]=useState<string>("");
    const [password,setPassword]=useState<string>("");
    const router=useRouter();
        return <div className="w-screenh-screen flex justify-center items-center">
            <div className="border p-2">
                <input type="text" placeholder="Username" className="border p-2" onChange={e=>setUsername(e.target.value)}/>
                <input type="password" placeholder="Password" className="border p-2" onChange={e=>setPassword(e.target.value)}/>
            <button className="border p-2" onClick={async()=>{
                await axios.post('http://localhost:3000/api/v1/signup',{
                    username:username,
                    password:password
                });
                router.push('/signin');
            }}>Sign Up</button>
        </div>
    </div>
}
