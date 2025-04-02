"use client";
import axios from "axios";

export default function Signin() {
    return <div>
        <input type="text" placeholder="Username" className="border p-2"/>
        <input type="password" placeholder="Password" className="border p-2"/>
        <button className="border p-2" onClick={async ()=>{
            const res= await axios.post('http://localhost:3000/api/signin',{
                username:'garvit',
                password:'123456'
            });


            localStorage.setItem('token',res.data.token);
        }}>Sign In</button>
    </div>
}