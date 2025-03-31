"use client";
import { useState } from "react";
export default function Signin() {
    const [username,setUsername]=useState<string>("");
    const [password,setPassword]=useState<string>("");
    return <div className="w-screenh-screen flex justify-center items-center">
        <div className="border p-2">
            <input type="text" placeholder="Username" className="border p-2" onChange={e=>setUsername(e.target.value)}/>
            <input type="password" placeholder="Password" className="border p-2" onChange={e=>setPassword(e.target.value)}/>
            <button className="border p-2" onClick={()=>{
                
            }}>Sign In</button>
        </div>
    </div>
}
