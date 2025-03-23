import { atom, selector } from 'recoil';

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

