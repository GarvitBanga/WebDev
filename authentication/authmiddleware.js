const express = require('express');
const app = express();
app.use(express.json());
const jwt = require('jsonwebtoken');
const JWT_SECRET='JWT_SECRET';


users=[]






app.get('/', (req, res) => {
  res.send('Hello from authentication!');
});

app.post('/signup', (req, res) => {
 
    const user = {
        username: req.body.username,
        password: req.body.password,
    };
    console.log(user);
    
    users.push(user);
   res.json({
    message: 'User created. You are signed up',
   });
});
app.post('/signin', (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password,
    };
    const found= users.find(u => user.username === u.username && user.password === u.password);
    console.log(found);
    if (found) {
        const token = jwt.sign({username:user.username},JWT_SECRET); //convert username to jwt
        // found.token = token;
        console.log(token);
        res.json({
            message: 'User found. You are signed in',
            token: token
        });
    } else {
        res.status(403).json({
            message: 'User not found',
        });

    }
});

function auth(req,res,next){
    const jwttoken = req.headers.token;
        try{
        const decoded = jwt.verify(jwttoken,JWT_SECRET);//we will get username from jwt
        console.log(decoded);
        if(decoded.username){
            req.username=decoded.username;
           next();
        }
        else{
            res.status(401).json({
                message: 'You are not signed in',
            });
        }
    }
    catch(err){
        res.status(401).json({
            message: 'Token error',
        });
    }
}


app.post('/me', auth,(req, res) => {
   
    const user=users.find(u=>u.username==req.username);
    res.json({
        message: 'Hello '+user.username,
        password: user.password
    });
    
   








});
  






app.listen(3000, () => {
  console.log('Authentication server is running on port 3000');
});