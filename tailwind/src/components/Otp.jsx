import { useState } from 'react';
import { useRef } from 'react';
import { Button } from './Buttons';
export function Otp({number}){
    const ref=useRef(Array(number).fill(0));
    const [btndisabled,setBtndisabled]=useState(true);
    return <div className="flex justify-center">
        {Array(number).fill(1).map((x,index)=>{
            return <SubOTP key={index} ref={(e)=>ref.current[index]=e} onDone={()=>{
                if(index+1>=number)return;
                ref.current[index+1].focus()
                if(index+1==number-1)setBtndisabled(false);
            }} goBack={()=>{
                if(index==0)return;
                ref.current[index-1].focus()}}/>
        }

        )}
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