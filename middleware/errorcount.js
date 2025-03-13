const express = require("express");
const app = express();


let errorCount=0;

app.get("/user",function(req,res){
    throw new Error("User not found");
    res.status(200).json();
});

app.post("/user",function(req,res){
    res.status(200).json("User created");
});
app.get("/errorcount",function(req,res){
    res.status(200).json({errorCount:errorCount});
});



function errorhandlingmiddleware(err,req,res,next){
    errorCount++;
    res.status(404).json({errorCount:errorCount});
    // next(err); 
}

app.use(errorhandlingmiddleware); 



app.listen(3000,function(){
    console.log("Server is running on port 3000");
});