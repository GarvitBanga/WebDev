import { useState } from 'react';
import { useRef } from 'react';
import { Button } from './Buttons';
export function Otp(){
    const ref1=useRef();
    const ref2=useRef();
    const ref3=useRef();
    const ref4=useRef();
    const ref5=useRef();
    const ref6=useRef();
    const [btndisabled,setBtndisabled]=useState(true);
    return <div className="flex justify-center">
        <SubOTP ref={ref1} onDone={()=>{ref2.current.focus()}} goBack={()=>{ref1.current.focus()}}/> 
        <SubOTP ref={ref2} onDone={()=>{ref3.current.focus()}} goBack={()=>{ref1.current.focus()}}/>
        <SubOTP ref={ref3} onDone={()=>{ref4.current.focus()}} goBack={()=>{ref2.current.focus()}}/>
        <SubOTP ref={ref4} onDone={()=>{ref5.current.focus()}} goBack={()=>{ref3.current.focus()}}/>
        <SubOTP ref={ref5} onDone={()=>{ref6.current.focus()}} goBack={()=>{ref4.current.focus()}}/>
        <SubOTP ref={ref6} onDone={()=>{ref6.current.focus(); setBtndisabled(false)}} goBack={()=>{ref5.current.focus()}}/>
            <br/>
        <Button disabled={btndisabled}>Submit</Button>
    </div>
}
function SubOTP({ref,onDone,goBack,}){
    const [inputvalue,setInputvalue]=useState("");
    return <div>
        <input ref={ref} value={inputvalue} onKeyUp={(e)=>{
            if(e.key=="Backspace"){
                goBack()
            }
        }} onChange={(e)=>{
            const val=e.target.value;
            if(val==""){
                setBtndisabled(true);
            }
            else{
                if(val=="1" || val=="2" || val=="3" || val=="4" || val=="5" || val=="6" || val=="7" || val=="8" || val=="9"){
                    setInputvalue(val);
                    onDone();
                }
            }
            }} type="text" className="m-1 bg-blue-500 w-[40px] h-[50px] rounded-xl text-white outline-none px-4"/>
    </div>
}