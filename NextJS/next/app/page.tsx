import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-lg w-screen h-screen flex justify-center items-center">
     
     <div>
        Todo App
        <br/>
        <Link href="/signup" className="text-md border m-2">Sign Up Todo App</Link>
        <br/>
        <Link href="/signin" className="text-md border m-2">Sign In Todo App</Link>
        <br/>
     </div>

    </div>
  );
}
