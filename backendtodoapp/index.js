const fs = require("fs").promises;
const express = require("express");
const app=express();

// route handlers
// / route for the get method
// app.get("/",function(req,res){
//     res.send("Hello World"); // can only send one response sending 2 responses will result in error
// });
// app.post("/",function(req,res){
//     // req is the request object
//     // res is the response object

//     res.status(401);
//     res.send("POST not allowed");
// });

// app.get("/garvit",function(req,res){
//     res.send("Hello Garvit");
// });


app.use(express.json());

const FILE_PATH = "todos.json";


async function readTodos() {
    try {
        let data = await fs.readFile(FILE_PATH, "utf8");
        return JSON.parse(data);
    } catch (err) {
        console.error("Error reading file:", err);
        return [];
    }
}

async function writeTodos(todos) {
    try {
        await fs.writeFile(FILE_PATH, JSON.stringify(todos, null, 2), "utf8");
    } catch (err) {
        console.error("Error writing file:", err);
    }
}





app.post("/todos",async function(req,res){
    // console.log("HELLO");
    // console.log(req.body);
    let todos = await readTodos();
    if (!Array.isArray(todos)) todos = [];
    console.log("HELLO",todos);
    let todo={
        "title":req.body.title,
        "description":req.body.description,
        "user":req.body.user,
        "id":Math.floor(Math.random()*10000),
        "date":new Date(),
    };
    todo.id=Math.floor(Math.random()*10000);
    todos.push(todo);
    await writeTodos(todos);
    res.status(200);
    res.send("TODO Added with id:" +todo.id);
});

app.put("/todos",async function(req,res){
    let todos = await readTodos();
    let todo={
        "id":req.body.id,
        "title":req.body.title,
        "description":req.body.description,
        "user":req.body.user,
        "date":req.body.date===undefined? new Date() : req.body.date,
    };
    let index = todos.findIndex(t => t.id === req.body.id);
    if (index === -1) return res.status(404).send("TODO not found");
    todos[index] = todo;
    await writeTodos(todos);
    res.status(200);
    res.send("TODO updated");
    
});
app.delete("/todos",async function(req,res){
    let todos = awaitreadTodos();
    let todo={
        "id":req.body.id,
    };
    
    todos = todos.filter(t => t.id !== req.body.id);
    await writeTodos(todos);
    res.status(200);
    res.send("TODO deleted");
    
});
app.get("/todos",async function(req,res){
    let html="TODO LIST<br>";
    // console.log(todos);
    let todos = await readTodos();
    for(let i=0;i<todos.length;i++){
        html+=todos[i].id+"<br>";
        html+=todos[i].title+"<br>";
        html+=todos[i].description+"<br>";
        html+=todos[i].user+"<br>";
        html+=todos[i].date+"<br>";
        html+="<br>";
    }
    res.send(html);
});

app.listen(3000); //port number which is used to run the server