
import { use } from 'react';
import { useState,useEffect,useRef } from 'react';


// custom hook

export function usePrev(value){
    const ref=useRef();
    console.log(ref.current);
    useEffect(()=>{
        ref.current=value;
    },[value]);
    return ref.current;


}

// it returns first then effect gets called later