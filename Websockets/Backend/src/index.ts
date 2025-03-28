// console.log('Hello World');
import WebSocket,{ WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8080 });

// event handler for new connection
// wss.on('connection',(socket)=>{
//     console.log('New connection');
//     // setInterval(()=>{
//     //     socket.send('Hello World');
//     // },1000);
//     socket.on('message',(e)=>{
//         console.log(e.toString());
//         // if(e.toString()=='ping'){
//         //     socket.send('pong');
//         // }
//         socket.send(e.toString());
//     });
// });

let usercount=0;
interface User{
    room:string;
    socket:WebSocket;
}
// let allsockets:WebSocket[]=[];
let allsockets:User[]=[];


wss.on('connection',(socket)=>{
    
    usercount++;
    // allsockets.push(socket);

    console.log(`User connected ${usercount}`);
    socket.on('message',(e)=>{


        
        // const msg=e.toString();
        // console.log(msg);

        

        // socket.send(msg+"  :sent from server"); //sending the  message back to client 
        // allsockets.forEach((socket)=>{
        //     socket.send(`${msg}  :sent from server`);
        // });


        const parsedmsg=JSON.parse(e.toString());
        if(parsedmsg.type=='join'){

            const user=allsockets.find(x=>x.socket==socket);
            if(user!=undefined){
            user.room=parsedmsg.payload.roomId;
            }
            else{
            allsockets.push({
                room:parsedmsg.payload.roomId,
                socket:socket
            });
        }
        }
        if(parsedmsg.type=='chat'){
            const currentuserroom=allsockets.find(x=>x.socket==socket)?.room;
        
        allsockets.forEach((user)=>{
            if(user.room==currentuserroom){
                user.socket.send(`${parsedmsg.payload.message}`);
            }
        });
        }

    });

    // to delete a socket if it disconnects
    socket.on('disconnect',()=>{
        allsockets=allsockets.filter(x=>x.socket!=socket);
    });


   
});

// for sending multiple requests use Hopscotch/postwoman