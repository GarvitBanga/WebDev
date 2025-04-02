"use client";
import { use, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
        Hello
        <button onClick={()=>setCount(c=>c+1)}>Click me {count}</button>
    </div>
  );
}