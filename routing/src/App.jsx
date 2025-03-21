import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route,Link,useNavigate, Outlet} from 'react-router-dom';
function App() {

  return (
   <div>
    JEE COACHING by Garvit Banga
    
    <BrowserRouter>
    {/* <Link to="/JEE/online-coaching-class-11">Class 11 JEE</Link>  */}
    {/* | */}
    {/* can't do links outside of the browserrouter */}
    {/* <Link to="/JEE/online-coaching-class-12">Class 12 JEE</Link> */}
    {/* | */}
    {/* <Link to="/">Landing Page</Link> */}
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/JEE/online-coaching-class-11" element={<Class11JEE/>}/>
          <Route path="/JEE/online-coaching-class-12" element={<Class12JEE/>}/>
          <Route path="/" element={<Landing/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Route>
      </Routes>
    
    
    </BrowserRouter>
   </div>
  )
}
function Landing(){
  return <div>
        Landing Page
    </div>
}
function Class11JEE(){
  const navigate=useNavigate();
  // navigate to go back to the previous page
  function redirect(){
    navigate("/");
  }
  return <div>Class 11 JEE <br/>
    <button onClick={redirect}>Go Back</button> 
  </div>
}
function Class12JEE(){
  const navigate=useNavigate();
  function redirect(){
    navigate("/");
  }
  return <div>Class 12 JEE<br/>
    <button onClick={redirect}>Go Back</button> 
  </div>
}
function ErrorPage(){
  return <div>Page not found</div>
}
function Layout(){
  return <div style={{height:"100vh"}}>
    
    <Header/>

    
    <div style={{height:"90vh",background:"#dfe6e9"}}>

    <Outlet/>
    </div>
    
    <Footer/>
  </div>
}
function Header(){
  return <>
  <Link to="/JEE/online-coaching-class-11">Class 11 JEE</Link> 
|
<Link to="/JEE/online-coaching-class-12">Class 12 JEE</Link>
|
<Link to="/">Landing Page</Link>
</>
}
function Footer(){
  return <div> Footer | Contact Us </div>
}
export default App
