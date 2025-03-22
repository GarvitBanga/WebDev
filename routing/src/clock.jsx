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


    // the code above does work but it is not the best way to do it as it does an extra re-render as when the start button is clicked the timer variable is updated which re-renders the component it does a re render then also which is not needed as we are not displaying the timer in HTML so it should re-render after 1 sec but it does re-render when the button is clicked and after 1 sec as well.
    // As when the start button is pressed we don't need to change the time displayed at that moment but after 1sec so that's why it is an extra re-render
    // This extra re-render can be avoided by using useRef hook


  





    // this code works
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