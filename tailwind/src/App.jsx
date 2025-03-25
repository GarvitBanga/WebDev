import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/Buttons'
import { Input } from './components/Input'
import { Otp } from './components/Otp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className='bg-blue-500 text-black'>Hello</div> */}
      {/* <div style={{display:"flex", justifyContent:"space-between"}}> */}
      {/* same as above */}
      {/* <div className='flex justify-center'></div> */}
      {/* <div className='flex justify-between'> 

        <div className='bg-blue-500 text-black'>Hello1</div>
        <div className='bg-blue-500 text-black'>Hello2</div> 
        <div className='bg-blue-500 text-black'>Hello3</div>
      </div>

      <div className='grid grid-cols-12'>
        <div className='bg-green-300 col-span-4'>Hellodiv1</div>
        <div className='bg-red-300 col-span-6'>Hellodiv2</div>
        <div className='bg-pink-300 col-span-2'>Hellodiv3</div>




      </div> */}

{/*sm:bg-blue-300 bg-red-300 as bg-red-300 is the unprefixed utility it takes effect on all screen sizes and prefixed will appear at and above the breakpoint till another breakpoint so from sm to large screen blue will appear on all screen sizes and below sm red will appear*/}
      {/* <div className='sm:bg-blue-300 bg-red-300'>
        Hellocoloureddiv
      </div>




      <div className='grid grid-cols-12'>
        <div className='bg-green-300 col-span-12 sm:col-span-5 text-5xl rounded-xl'>Hellodiv1</div>
        <div className='bg-red-300 col-span-12 sm:col-span-5 rounded-xl'>Hellodiv2</div>
        <div className='bg-pink-300 col-span-12 sm:col-span-2 rounded-xl'>Hellodiv3</div>



      </div> */}

      <div className='h-screen bg-blue-700'>
      <div className='flex justify-center'>
      <Button disabled={false}>Sign Up</Button>
      <Input type="text" placeholder="Enter your name"/>
      
      <Otp/>
      </div>
      </div>
    </>
  )
}

export default App
