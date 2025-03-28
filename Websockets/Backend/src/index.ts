// console.log('Hello World');
import WebSocket,{ WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

// event handler for new connection
wss.on('connection',(socket)=>{
    console.log('New connection');
    // setInterval(()=>{
    //     socket.send('Hello World');
    // },1000);
    socket.on('message',(e)=>{
        console.log(e.toString());
        // if(e.toString()=='ping'){
        //     socket.send('pong');
        // }
        socket.send(e.toString());
    });
});


wss.on('error',(err)=>{
    console.log(err);
})