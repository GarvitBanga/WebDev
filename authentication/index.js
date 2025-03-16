const express = require('express');
const app = express();
app.use(express.json());

function generateToken() {
    // Generate a unique token for the user

    options=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
    let token="";
    for(let i=0;i<32;i++){
        token+=options[Math.floor(Math.random()*options.length)];
    }
    return token;
}
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
        const token = generateToken();
        found.token = token;
        // replace the user object with the token
        // users.splice(users.indexOf(found), 1, found);,
        console.log(users);
        res.json({
            message: 'User found. You are signed in',
        });
    } else {
        res.status(403).json({
            message: 'User not found',
        });

    }
});
  






app.listen(3000, () => {
  console.log('Authentication server is running on port 3000');
});