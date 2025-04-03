"use client";
import Image from "next/image";

import { SessionProvider } from "next-auth/react";
import { useSession, signIn, signOut } from "next-auth/react";
// import { getServerSession } from "next-auth";
export default function Home() {
//   const session=await getServerSession(); for server side
  return (
   
    <SessionProvider>
      <RealHome/>
    </SessionProvider>
  );
}
function RealHome(){
  const session=useSession();
  return(
    <div>
      {session.status==="authenticated"&&<button onClick={()=>signOut()}>Sign Out</button>}
      {session.status==="unauthenticated"&&<button onClick={()=>signIn()}>Sign In</button>}
      {JSON.stringify(session)}
    </div>
  )
}