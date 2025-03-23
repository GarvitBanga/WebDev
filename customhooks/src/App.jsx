import { useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { use } from 'react'
import {usePostTitle,useFetch} from './hooks/useFetch';
import {usePrev} from './hooks/usePrev';


function useCounter(){
  const [count, setCount] = useState(0)


  function increaseCount(){
    setCount(cnt=>cnt+1);
  }
  return {count,increaseCount};
}


// debounced uncomment 
// function useDebounce(originalfn){
//   const currentClock=useRef(); //we don't want to re-render the component when the clock changes

//   const fn=()=>{
//     clearTimeout(currentClock.current);


//     currentClock.current=setTimeout(originalfn,1000);
//   }
//   return fn;

// }





function App() {
  // const [count, setCount] = useState(0)


  // function increaseCount(){
  //   setCount(count=>count+1);
  // }
  // we can shift the logic above to a custom hook and use it in multiple components





  const {count,increaseCount}=useCounter();



  const post=usePostTitle();
  
  const [currentPost,setCurrentPost]=useState(1);
  const [state,setState]=useState(0);
  const prev=usePrev(state);

  const {data,loading}=useFetch("https://jsonplaceholder.typicode.com/posts/"+currentPost,10);
  if(loading){
    return <div>Loading...</div>
  }


  
  // debounced uncomment
  // function senddatatobackend(){
  //   console.log("debouncedfn");
  //    fetch("https://jsonplaceholder.typicode.com/posts/2");
  // }
  // const debouncedfn=useDebounce(senddatatobackend);
  







  return (
      <div>
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>
        <h1>{post.title}</h1> {post.body}

        <br/>
        <h2>{JSON.stringify(post)}</h2>


        <button onClick={()=>setCurrentPost(1)}>Set Post 1</button>
        <button onClick={()=>setCurrentPost(2)}>Set Post 2</button>
        <button onClick={()=>setCurrentPost(3)}>Set Post 3</button>
        <button onClick={()=>setCurrentPost(4)}>Set Post 4</button>
        {JSON.stringify(data)};
        <button onClick={()=>setState(crt=>crt+1)}>Increase State</button>
        <p>The current value of state is {state} and the prev value is {prev}</p> 


        {/* <input type="text" onChange={debouncedfn}/> */}
        {/* debounced uncomment */}
         
       </div>
  )
}
function Counter(){
  const {count,increaseCount}=useCounter();
  return <div>
    <button onClick={increaseCount}>Increase {count}</button>
  </div>
}

export default App
