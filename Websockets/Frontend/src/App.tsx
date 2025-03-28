import { useState,useEffect,useRef} from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
//   const [socket,setSocket]=useState<WebSocket|null>(null);
//   const inputRef=useRef<HTMLInputElement>(null);
//   function sendMessage(){
//     if(!socket){
//       return;
//     }
//     const msg=inputRef.current?.value;
//     // @ts-ignore
//     socket?.send(msg);
//   }

//   useEffect(()=>{
//     const ws=new WebSocket('ws://localhost:8080');
//     setSocket(ws);
//     ws.onopen=()=>{
//       console.log('connected');
//     }
//     ws.onerror=()=>{
//       console.log('error');
//     }
//     ws.onmessage=(e)=>{
      
//       alert(e.data);
//       // console.log(e.data);
//     }
//     ws.onclose=()=>{
//       console.log('closed');
//     }
//   },[]);
//   return (
//     <div>
//         <input type="text" ref={inputRef} placeholder="Message "/>
//         <button onClick={sendMessage}>Send</button>
//     </div>
//   ) 


  const inputRef=useRef<HTMLInputElement>(null);
  const [socket,setSocket]=useState<WebSocket|null>(null);
  const [messages,setMessages]=useState<string[]>(["hi there","hello"]);
  const wsRef=useRef<WebSocket|null>(null);

  useEffect(()=>{
    const ws=new WebSocket('ws://localhost:8080');
    setSocket(ws);
    ws.onmessage=(e)=>{
      setMessages(messages=>[...messages,e.data]); 
      
    }
    ws.onclose=()=>{
      console.log('closed');
    }
    ws.onopen=()=>{
      ws.send(JSON.stringify({
        type:'join',
        payload:{
          roomId:'red'
        }
      }));
    }
    wsRef.current=ws;
  },[]);




      return (
          <div className='bg-black h-screen'>
            <br/> <br/> <br/>
            <div className='h-[80vh]'>{messages.map(message=><div className='m-8'><span className='bg-white text-black rounded p-4 m-4'>{message}</span> </div> )} </div>
            <div className='w-full bg-white flex '>
               <input type="text" ref={inputRef} placeholder="Message" className='flex-1 p-4'/>
               <button className='bg-purple-600 text-white p-4' onClick={()=>{
                const msg=inputRef.current?.value;
                wsRef.current?.send(JSON.stringify({
                  type:'chat',
                  payload:{
                    message:msg
                  }
                }));
               }}>Send Message</button>
            </div>
            
          </div>
      )
}

export default App
