const express = require("express");
const app = express();
app.use(express.json());
const users=[{
    name:"john",
    eyes:[{healthy:true}]
}];

app.get("/", function(req, res) {
    let eyes=users[0].eyes;
    let healthyeyes=0;


    for(let i=0;i<eyes.length;i++){
        if(eyes[i].healthy){
            healthyeyes++;
        }
    }
    // you can also use filter function
    // let healthyeyes=eyes.filter(function(x){
    //     return x.healthy;
    // }).length;
    let unhealthyeyes=eyes.length-healthyeyes;
    let totaleyes=eyes.length;
    res.json({
        totaleyes,
        healthyeyes,
        unhealthyeyes
    });

});

app.post("/", function(req, res) {
    
    let input=req.body.ishealthy;
    // req.params.firstname can alos be used to get the firstname from the url
    users[0].eyes.push({healthy:input});

    res.json({msg:"Done"});

});



app.put("/", function(req, res) {
    
   for(let i=0;i<users[0].eyes.length;i++){
    users[0].eyes[i].healthy=true;
   }
    res.json({msg:"Done"});
});


app.delete("/", function(req, res) {
    let neweyes=[];


    let minhealthy=false;
    for(let i=0;i<users[0].eyes.length;i++){
        if(!users[0].eyes[i].healthy){
           minhealthy=true;
        }
    }

    if(minhealthy){ 
        for(let i=0;i<users[0].eyes.length;i++){
        if(users[0].eyes[i].healthy){
            neweyes.push({healthy:true});
        }
        }
        users[0].eyes=neweyes;
        res.json({msg:"Done"});

    }
    else{
        res.status(403).json({msg:"All eyes are healthy"});
    }

 });


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
