import { useState, memo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, atom, useSetRecoilState, useRecoilValue } from 'recoil';
import { counterAtom, evenSelector } from './store/atoms/counter';
import { use } from 'react';

function App() {

  return (
  
      <div>
        <Counter/>
        {/* where everything re-renders when the count changes */}





        <RecoilRoot>
          <Counter2/>
        </RecoilRoot>
        


        
        <RecoilRoot>
        
        <Counter3/>
        <Buttons/>
        <IsEven/>
        </RecoilRoot>



      </div>
  )
}


function Buttons(){
  const setCount=useSetRecoilState(counterAtom);
  return <div>
    <button onClick={()=>setCount(count=>count+2)}>Increase</button>
  <button onClick={()=>setCount(count=>count-1)}>Decrease</button>
</div>
}

function Counter3(){
  const count=useRecoilValue(counterAtom);
  return <div>
    {count}
  </div>
}


// isEven is subscribed to the atom evenSelector so that it will re-render when the evenSelector changes that is the value of the count changes to odd
function IsEven(){
  const even=useRecoilValue(evenSelector);
  return <div>
    {even?"Even":"Odd"}
  </div>
}










// recoil function only thr count will re-render and not the buttons 
// with recoil only things subscribed to count will re-render when the count changes
function Counter2(){
  // if i add this line here const count=useRecoilValue(counterAtom); then
  // the entire component will re-render when the count changes
  // and all its children will re-render as well
  // that's why we need to use memos with usestate or subsribe to the atom wherever we want to use it and that will re-render.
  // Memos will prevent the component from re-rendering unless the props change
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

const Increase2=memo(function Increase2(){
  const setCount=useSetRecoilState(counterAtom);  
  return <div>
    <button onClick={()=>setCount(count=>count+1)}>Increase</button>
  </div>
});

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
