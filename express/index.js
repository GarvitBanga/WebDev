const express = require("express");
const app = express();

function sum(n){
    // sum+=n;
    let ans=0;
    for(let i=1;i<=n;i++){
        ans+=i;
    }
    return ans;
}
app.get("/", function(req, res) {
let ans=sum(req.query.n);
  res.send("your sum is " + ans);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});