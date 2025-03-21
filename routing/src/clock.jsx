import { useRef } from 'react';
import { useState, useEffect } from 'react'

export default function Clock() {
    const [currentCount, setCount] = useState(0);
    // let timer=0;
    
    // function startClock() {
    //    timer=setInterval(() => {
    //     setCount(prevCount => prevCount + 1);
    //   }, 1000);

    // }
    // function stopClock() {
    //   clearInterval(timer);
    // }

    // the above code doesn't work as it will not stop the clock as the timer variable is re initialized every time the component is re-rendered

    // const [timer,setTimer]=useState(0);
    //  function startClock() {
    //    let value=setInterval(() => {
    //     setCount(prevCount => prevCount + 1);
    //   }, 1000);
    //   setTimer(value);

    // }
    // function stopClock() {
    //   clearInterval(timer);
    // }


    // this code does work but it is not the best way to do it as it does an extra re-render

    const timer =useRef();
     function startClock() {
       let value=setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
      timer.current=value;

    }
    function stopClock() {
      clearInterval(timer.current);
    }

    return (
      <div>
        <h1>
       {currentCount}
       </h1>
       <br/>
       <button onClick={startClock}>Start Clock</button>
       <button onClick={stopClock}>Stop Clock</button>
      </div>
      
    );
  }