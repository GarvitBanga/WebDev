const express = require("express");

const app = express();


app.get("/multiply",function(req,res){
    
    let ans=parseInt(req.query.a)*parseInt(req.query.b);
    res.json({
        answer:ans
    });
});


app.get("/add",function(req,res){
    let ans=parseInt(req.query.a)+parseInt(req.query.b);
    res.json({
        answer:ans
    });
});

// Dynamic endpoints
app.get("/add/:a/:b",function(req,res){
    let ans=parseInt(req.params.a)+parseInt(req.params.b);
    res.json({
        answer:ans
    });
});

app.get("/subtract",function(req,res){
    let ans=parseInt(req.query.a)-parseInt(req.query.b);
    res.json({
        answer:ans
    });
});


app.get("/divide",function(req,res){
    if(req.query.b==0){
        res.status(400).send("Cannot Divide by zero");
        return;
    }
    let ans=parseInt(req.query.a)/parseInt(req.query.b);
    res.json({
        answer:ans
    });
});


// Middleware
let requestCount=0;
function loggingMiddleware(req, res, next) {
  console.log(`Middleware method is ${req.method} and url is ${req.url} and hostname is ${req.hostname} `);
  console.log(new Date());
  next();
}
app.use(loggingMiddleware);


app.get("/multiplymiddleware",function(req,res){
    
    let ans=parseInt(req.query.a)*parseInt(req.query.b);
    res.json({
        answer:ans
    });
});


app.get("/addmiddleware",function(req,res){
    let ans=parseInt(req.query.a)+parseInt(req.query.b);
    res.json({
        answer:ans
    });
});

app

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});