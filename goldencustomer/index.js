const express=require("express");
const app=express();


function agechecker(age){
    if(age<14){
        return false;
    }
    else{
        return true;
    }
}
app.get("/ride",function(req,res){
    if(agechecker(req.query.age)){
    res.json({
        msg:"You have successfully ridden the ride"
    });
}
else{
    res.status(411).json({
        msg:"You are not eligible to ride the ride"
    });
}
});

app.get("/ride2",function(req,res){
    if(agechecker(req.query.age)){
    res.json({
        msg:"You have successfully ridden the ride"
    });
}
else{
    res.status(411).json({
        msg:"You are not eligible to ride the ride"
    });
}
});


function agecheckermiddleware(req,res,next){
    if(req.query.age>=14){
        next();
    }
    else{
        res.status(403).json({
            msg:"You are not eligible to ride the ride"
        });
   }
}
// app.use(agecheckermiddleware); you can use this middleware in all the routes listed below this line without specifically mentioning in each route(won;t work for any routes defined above this line) or you can use it in specific routes as shown below
app.get("/ridemiddleware1",agecheckermiddleware,function(req,res){
    res.json({
        msg:"You have successfully ridden the ride1"
    });
});
app.get("/ridemiddleware2",agecheckermiddleware,function(req,res){
    res.json({
        msg:"You have successfully ridden the ride2"
    });
});

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});