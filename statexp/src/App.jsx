import { useState,createContext,useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';


const BulbContext=createContext();


function BulbProvider({children}){
  const [bulbon,setBulbon]=useState(true);
  return <BulbContext.Provider value={{bulbon:bulbon,setBulbon:setBulbon}}> 
    {children}
  </BulbContext.Provider>
}

function App() {
  const [count, setCount] = useState(0)
  // const [bulbon,setBulbon]=useState(true);
  return (
  //  <div>
  //   {/* <LightBulb bulbon={bulbon} setBulbon={setBulbon}/>  */}
  //   {/* prop drilling */}
  //   <Light/>
  //  </div>

  // COntext API below  This component wraps part of your application and provides the context value to all its descendants. 
    <div>
      {/* <BulbContext.Provider value={{bulbon:bulbon,setBulbon:setBulbon}}> */}
          {/* <Light/> */}
      {/* </BulbContext.Provider> */}





      <BulbProvider>
        <Light/>
      </BulbProvider>
    </div>
  )
}

function Light(){
  
  return <div>
    {/* <LightBulb bulbon={bulbon}/>
    <LightSwitch setBulbon={setBulbon}/> */}
    {/* prop drilling */}
    <LightBulb/>
    <LightSwitch/>
  </div>
}
function LightBulb(){
  const {bulbon}=useContext(BulbContext);
 return <div>
  {bulbon?"Bulb is on":"Bulb is off"}
 </div>
}
function LightSwitch(){
  const {setBulbon}=useContext(BulbContext);
  function toggle(){
    setBulbon(currentstate=>!currentstate);
  }
  return <div>
    <button onClick={toggle}>Toggle Bulb</button>
  </div>
}
export default App
