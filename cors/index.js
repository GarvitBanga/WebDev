const express = require("express");

const app = express();

app.use(express.json());
const cors=require("cors");
app.use(cors());

// you can also specify the hosts,origin,methods,credentials
// app.use(cors({
//     hosts:["http://localhost:3000"],
//     origin:"http://localhost:3000",
//     methods:["GET","POST"],
//     credentials:true
// }));




// we can also use this instead of cors which sends the file directly to the server so now frontend is also hosted on the server and we can use the frontend directly here http://localhost:3000/ and backend is also hosted on the server
// app.get("/",function(req,res){
//     res.sendFile(__dirname+"/public/index.html");
// });

app.post("/add",function(req,res){
    let ans=parseInt(req.body.a)+parseInt(req.body.b);
    res.json({
        answer:ans
    });
});


app.listen(3000,function(){
    console.log("Server is running on port 3000");
});


