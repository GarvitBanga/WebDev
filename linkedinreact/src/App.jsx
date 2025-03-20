import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import { PostComponent } from './Post'
import { use } from 'react';
function App() {

    const [posts,setPosts]=useState([]);
    const [count,setCount]=useState(0);
    // without dependency array
    // also need to remove strictmode from main.jsx for this to work
    // function increaseCount(){
    //   setCount(prevvalue=>prevvalue+1);
    // }
    // useEffect(()=>{
    //   setInterval(increaseCount,1000);
    // },[]);
    const postComponents=posts.map(post=><PostComponent {...post}/>); //...post is used to spread the props of the post object
  function addPost(){
    setPosts([
      ...posts,
      {
        name:"Garvit Banga",
        followercount:1500,
        time:"15m ago",
        imageurl:"https://garvitbanga.github.io/images/profile.png",
        description:"Looking for Full Stack Developer Jobs"
      }
    ]);
  }

  const [currentTab,setCurrentTab]=useState("feed");
  const [tabdata,setTabdata]=useState({});
  const [loading,setLoading]=useState(true);
  const [showTimer,setShowTimer]=useState(true);
  useEffect(()=>{
    setInterval(()=>{
      setShowTimer(prevValue=>!prevValue);
    },5000);
  },[]);
  
  useEffect(()=>{
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/"+Math.floor(Math.random()*100))
    .then(
      async res=>{
        const data=await res.json();
        setTabdata(data);
        setLoading(false);
      }
    )
  },[currentTab]);
  return (
      <div style={{background:"#dfe6e9", height:"100vh"}}>
        <div>{showTimer && <Timer/>}</div>
        <div>
          <button style={{color:currentTab=="feed"?"red":"black"}} onClick={()=>setCurrentTab("feed")}>Feed</button>
          <button style={{color:currentTab=="notifications"?"red":"black"}} onClick={()=>setCurrentTab("notifications")}>Notifications</button>
          <button style={{color:currentTab=="messages"?"red":"black"}} onClick={()=>setCurrentTab("messages")}>Messages</button>
          <button style={{color:currentTab=="jobs"?"red":"black"}} onClick={()=>setCurrentTab("jobs")}>Jobs</button>
          <div>{loading?"Loading...":tabdata.title}</div>
        </div>
        
        <button onClick={addPost}>Add Post</button>
        <div style={{ display:"flex", justifyContent:"center"}}>
            <div>
              {postComponents}
            </div>
        </div>




        <div>
        {/* <div style={{display:"flex",justifyContent:"center"}}> */}
          {/* <Card children={"hi there"}/>
          <Card children={<div style={{color:"red"}}>hi there<br/> <input type="text"/></div>}/> */}
          {/* another simple way to do this  */}
          <Card>
            <h2>Card Title</h2>
            <p>Card Content</p>
          </Card>
          <Card>
          <h2>Card Title</h2>
            <div style={{color:"red"}}>
              hi there<br/> 
              <input type="text"/>
            </div>
          </Card>
        </div>

      </div>
  )
}


const Timer=function(){
  const [seconds,setSeconds]=useState(0);
  useEffect(()=>{
    let clock=setInterval(()=>{
      console.log(seconds);
      setSeconds(prevValue=>prevValue+1);
    },1000);


    return function(){
      clearInterval(clock);
    }
  },[]);
  return <div>{seconds}seconds elapsed</div>
  }
function Card({children}){
  return <div style={{
    border:'1px solid #ccc',
    background:"white",
    borderRadius:'5px',
    padding:'20px',
    color:"black",
    margin:'10px',
    boxShadow:'2px 2px 5px rgba(0,0,0,0.1)'
  }}>{children}</div>
}
export default App
