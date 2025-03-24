import { useState,useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState,useRecoilState, useRecoilStateLoadable } from 'recoil';
import { networkAtom, jobsAtom, messagesAtom, notificationsAtom, totalnotificationselector,todosAtomFamily, todosAtomFamilyselector } from './atoms';
import { use } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  
  return (
    <div>
      <RecoilRoot>
        <Home/>
        <Todo id={1}/>
        <Todo id={2}/> 
        <Todo id={2}/> 
        <Todobackend id={1}/>
        <Todobackend id={2}/>
        <Todobackend id={2}/>
        <Todobackend id={2}/>
        <Todobackend id={2}/>
      </RecoilRoot>
    </div>
  )
}
function Home(){




  const networknotificationcount=useRecoilValue(networkAtom);
  const jobsnotificationcount=useRecoilValue(jobsAtom);
  const messagesnotificationcount=useRecoilValue(messagesAtom);
  const notificationcount=useRecoilValue(notificationsAtom);
  // const [messagesnotificationcount,setMessagecount]=useRecoilState(messagesAtom);



  // anytime these 4 values change the totalnotificationcount will re-render as it's a memo
  // const totalnotificationcount=useMemo(()=>{return networknotificationcount+jobsnotificationcount+messagesnotificationcount+notificationcount},[networknotificationcount,jobsnotificationcount,messagesnotificationcount,notificationcount]);
  
  // selector
  // const totalnotificationcount=useRecoilValue(totalnotificationselector);









  // const [networkCount,setNetworkCount]=useRecoilState(notificationsAtom);
  const totalnotificationcount=useRecoilValue(totalnotificationselector);

  // useEffect(()=>{
  //   axios.get("https://jsonplaceholder.typicode.com/todos/1").then(
  //     res=>{
  //       setNetworkCount(res.data.id);
  //     }
  // )},[]);
  return <div>
      <button>Home</button>
      <button>My Network({networknotificationcount>99?"99+":networknotificationcount})</button>
      <button>Jobs({jobsnotificationcount>99?"99+":jobsnotificationcount})</button>
      <button>Messages({messagesnotificationcount>99?"99+":messagesnotificationcount})</button>
      <button>Notifications({notificationcount>99?"99+":notificationcount})</button>
      <button>Me ({totalnotificationcount})</button>
      </div>
}

function Todo({id}){
  const currentTodo=useRecoilValue(todosAtomFamily(id));
  return <div>
    {currentTodo.title}
    {currentTodo.description}
  </div>
}

function Todobackend({id}){
  // const [todobackend,settodobackend]=useRecoilState(todosAtomFamilyselector(id));
  //to make it loadable when the backend takes time to load the data
  const [todobackend,settodobackend]=useRecoilStateLoadable(todosAtomFamilyselector(id));


  if(todobackend.state=="loading"){
    return <div>Loading...</div>
  }
  else if(todobackend.state=="hasValue"){
    return <div>
      {todobackend.contents.title}
      {todobackend.contents.description}
    </div>
  }
  else if(todobackend.state=="hasError"){
    return <div>Error</div>
  }
}

export default App
