const express = require("express");
const app = express();

let numberOfRequestsForUser = {};

// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000);

function middlewarefunction(req,res,next){
    let userId = req.headers["userid"];
    if(userId in numberOfRequestsForUser){
        numberOfRequestsForUser[userId]++;
    }
    else{
        numberOfRequestsForUser[userId] = 1;
    }

    if(numberOfRequestsForUser[userId]>5){
        res.status(403).json({
            msg:"Too many requests"
        });
    }
    else{
        next();
    }
}

app.use(middlewarefunction);



app.get("/user",function(req,res){
    res.status(200).json({name:"Garvit",age:25,requestCount:numberOfRequestsForUser[req.headers["userid"]]});
});

app.post("/user",function(req,res){
    res.status(200).json("User created");
});

app.get("/requestcount",function(req,res){
    res.status(200).json(numberOfRequestsForUser[req.headers["userid"]]);
});

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});