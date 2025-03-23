import { useState, memo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, atom, useSetRecoilState, useRecoilValue } from 'recoil';
import { counterAtom } from './store/atoms/counter';
import { use } from 'react';

function App() {

  return (
  
      <div>
        <RecoilRoot>
          <Counter2/>
        </RecoilRoot>
        <Counter/>
      </div>
  )
}


// recoil function only thr count will re-render and not the buttons 
// with recoil only things subscribed to count will re-render when the count changes
function Counter2(){
  // if i add this line here const count=useRecoilValue(counterAtom); then
  // the entire component will re-render when the count changes
  // and all its children will re-render as well
  // that's why we need to use memos or subsribe to the atom wherever we want to use it
  return <div>
    <CurrentCount2/>
    <Increase2 />
    <Decrease2/>
  </div>
}

function CurrentCount2(){
  const count=useRecoilValue(counterAtom);  //subsribed to the atom counterAtom
  return <div>
    {count}
  </div>
}

function Increase2(){
  const setCount=useSetRecoilState(counterAtom);  
  return <div>
    <button onClick={()=>setCount(count=>count+1)}>Increase</button>
  </div>
}
function Decrease2(){
  const setCount=useSetRecoilState(counterAtom);  
  return <div>
    <button onClick={()=>setCount(count=>count-1)}>Decrease</button>
  </div>
}





// without recoil everything re-renders when the count changes
function Counter(){
  const [count,setCount]=useState(0);
  return <div>
    <CurrentCount count={count}/>
    <Increase setCount={setCount}/>
    <Decrease setCount={setCount}/>
  </div>
}

function CurrentCount({count}){
  return <div>
    {count}
  </div>
}
function Increase({setCount}){
  return <div>
    <button onClick={()=>setCount(count=>count+1)}>Increase</button>
  </div>
}
function Decrease({setCount}){
  return <div>
    <button onClick={()=>setCount(count=>count-1)}>Decrease</button>
  </div>
}

export default App
