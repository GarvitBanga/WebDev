import { useState,useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState,useRecoilState } from 'recoil';
import { networkAtom, jobsAtom, messagesAtom, notificationsAtom, totalnotificationselector } from './atoms';
import { use } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  
  return (
    <div>
      <RecoilRoot>
        <Home/>
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



export default App
