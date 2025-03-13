const express = require("express");
const app = express();


let requestCount=0;

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable


function middlewarefunction(req,res,next){
    requestCount++;
    next();
}
app.use(middlewarefunction);


app.get("/user",function(req,res){
    res.status(200).json({name:"Garvit",age:25,requestCount:requestCount});
});

app.post("/user",function(req,res){
    res.status(200).json("User created");
});
app.get("/requestcount",function(req,res){
    res.status(200).json(requestCount);
});

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});