import {useState} from 'react';
export default function App() {
    const [count,setCount]=useState(0); //initialize the state variable count with 0 
    // useState is a hook that returns a state variable and a function to update the state variable
    
    function onbuttonclick(){
        // count++; this will not re render the component
        setCount(count+1); //this will re render the component as it is a state change
        console.log('clicked');
    }

    return (
    <div>
        <h1>Counter App</h1>
        <button onClick={onbuttonclick}>Counter {count}</button>
    </div>
    
    )
}