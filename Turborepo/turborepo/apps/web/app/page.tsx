"use client";
import  {TextInput}  from "@repo/ui/textinput";  
import { useRouter } from "next/navigation";
export default function Home() {
  const router=useRouter();
  return (
    <div style={{
      height:'100vh',
      width:'100vw',
      display:'flex',
      background:'black',
      justifyContent:'center',
      justifyItems:'center', 

    }}>
      <div style={{
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
      }}>
      {/* <input type="text" placeholder="Type something"/> */}
      <TextInput placeholder="Room Name" size="big"/>
      <button onClick={()=>{
        router.push('/chat/123');
      }}>Join Room</button>
      </div>
        

    </div>
  );
}
