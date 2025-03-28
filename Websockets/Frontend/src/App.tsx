import { useState,useEffect,useRef} from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [socket,setSocket]=useState<WebSocket|null>(null);
  const inputRef=useRef<HTMLInputElement>(null);
  function sendMessage(){
    if(!socket){
      return;
    }
    const msg=inputRef.current?.value;
    // @ts-ignore
    socket?.send(msg);
  }

  useEffect(()=>{
    const ws=new WebSocket('ws://localhost:8080');
    setSocket(ws);
    ws.onopen=()=>{
      console.log('connected');
    }
    ws.onerror=()=>{
      console.log('error');
    }
    ws.onmessage=(e)=>{
      
      alert(e.data);
      // console.log(e.data);
    }
    ws.onclose=()=>{
      console.log('closed');
    }
  },[]);
  return (
    <div>
        <input type="text" ref={inputRef} placeholder="Message "/>
        <button onClick={sendMessage}>Send</button>
    </div>
  ) 
}

export default App
