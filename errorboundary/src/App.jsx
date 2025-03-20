import React,{ useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ErrorBoundary>
        <Card1/>
        </ErrorBoundary>
        <Card2/>
       </div>  
  )
}

function Card1(){



  throw new Error("Error in Card1");
 return <div style={{background:"red",borderRadius:20, padding:20,color:"white"}}>hi there</div>
}
function Card2(){
  return <div style={{background:"red",borderRadius:20, padding:20,color:"white",margin:20}}>hi there</div>
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <div style={{background:"red",borderRadius:20, padding:20,color:"white"}}>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
export default App
