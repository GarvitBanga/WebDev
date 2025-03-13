const express = require("express");

const app = express();

app.use(express.json());
// or you can use this
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
app.get("/add",function(req,res){
    let ans=parseInt(req.body.a)+parseInt(req.body.b);
    res.json({
        answer:ans
    });
});


app.listen(3000,function(){
    console.log("Server is running on port 3000");
});


