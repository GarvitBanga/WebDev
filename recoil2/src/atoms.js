import { atom, atomFamily, selector, selectorFamily } from 'recoil';
import {TODOS} from './todos';
import axios from 'axios';
import { useEffect, useRef } from 'react';
export const networkAtom=atom({
    key:"networkatom",
    default:102
});

export const jobsAtom=atom({
    key:"Jobsatom",
    default:4
});

export const messagesAtom=atom({
    key:"messagesatom",
    default:10
});

export const notificationsAtom=atom({
    key:"notificationsatom",
    default:102



    // asynchronous data queries to fetch data from an API
    // default:selector({
    //     key:"notificationsAtomselector",
    //     get:async ({get})=>{
    //         const res=await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    //         return res.data;

    //     }

    //     })
});

export const totalnotificationselector=selector({
    key:"totalnotificationselector",
    get:({get})=>{
         const networknotificationcount=get(networkAtom);
         const jobsnotificationcount=get(jobsAtom);
         const messagesnotificationcount=get(messagesAtom);
         const notificationcount=get(notificationsAtom);
         return networknotificationcount+jobsnotificationcount+messagesnotificationcount+notificationcount;
    }
});



export const todosAtomFamily=atomFamily({
    key:"todosAtomFamily",
    default:id=>{
        return TODOS.find(x=>x.id==id);
    }
});

export const todosAtomFamilyselector=atomFamily({
    key:"todosAtomFamilyselector",
    default:selectorFamily({
        key:"todosfamilyselector",
        get:function(id){
            return async function({get}){

            await new Promise(resolve=>setTimeout(resolve,5000)); //this is to simulate a delay which leads to website being empty for a while
            const res=await axios.get("https://jsonplaceholder.typicode.com/todos/"+id);
            return res.data;
        }
        }
    })
});