import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {SidebarClass1,SidebarTransition} from './components/sidebar'
import { SidebarToggle } from './components/icons/sidebartoggle'
import { useEffect } from 'react'
function App() {
  const [count, setCount] = useState(0) 
  const [sidebar,setSidebar]=useState(true);
  const isDesktop=useMediaQuery("(min-width: 768px)");

  useEffect(()=>{
    if(!isDesktop){
      setSidebar(false);
    }
    else setSidebar(true);
  },[isDesktop]);

  return (
    // {/* <div className="h-screen bg-white dark:bg-blue-800 text-black dark:text-white">
    //  <button onClick={()=>{
    //   document.querySelector('html').classList.toggle('dark');
    // }}>Toggle Dark Mode</button> 
    // <SidebarClass1/> 
    //  <SidebarTransition/>
    //  </div>
    //  */}

      
    <div className='flex'>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
        <MainContent/>


    </div>
  )
}
function Sidebar({sidebar,setSidebar}){
  if(!sidebar){
  return <div className='fixed top-0 left-0 transition-all duration-1000'>
    <div className='cursor-pointer hover:bg-slate-200 ' onClick={()=>setSidebar(!sidebar)}>
        <SidebarToggle/>
      </div>

  </div>
  }
  else{
  return <div className='w-96 h-screen bg-red-100  absolute md:relative transition-all duration-1000'>
    <div>
      <div className='cursor-pointer hover:bg-slate-200' onClick={()=>setSidebar(!sidebar)}>
        <SidebarToggle/>
      </div>
    </div>
    </div> 
    }

  
}
function MainContent(){

  return <div className='w-full'>
      <div className='h-72 bg-black hidden md:block'>

      </div>
  
      <div className='grid grid-cols-11 gap-8 m-8'>
        <div className='h-96 rounded-2xl  bg-red-200 md:col-span-2 -translate-y-24 shadow-lg col-span-11 hidden md:block'>

        </div>
        <div className='h-96 rounded-2xl shadow-lg bg-green-200 md:col-span-6 col-span-11'>

        </div>
        <div className='h-96 rounded-2xl shadow-lg bg-yellow-200 md:col-span-3 col-span-11'>

        </div>

      </div>
  </div>
}
const useMediaQuery=(query)=>{
  const [matches,setMatches]=useState(false);
  useEffect(()=>{
    const media=window.matchMedia(query);
    if(media.matches){
      setMatches(true);
    }
    else{
      setMatches(false);
    }
    const listener=(e)=>{
      if(e.matches){
        setMatches(true);
      }
      else{
        setMatches(false);
      }
    };
    media.addEventListener('change',listener);
    return ()=>{
      media.removeEventListener('change',listener);
}
  },[matches,query]);
  return matches;
}
export default App
