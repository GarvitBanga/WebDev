let ctr=1;
let todos=[];
function addTodo(){
    todos.push({
        title:document.querySelector("input").value,
    });
    render();
}

function deleteTodo(id){
    todos.splice(id,1);
    render();
}

function updateTodo(id){
    let updatedTodo = prompt("Enter Updated Todo item here");
    todos[id].title=updatedTodo;
    render();
}

function render(){
    // ctr=1;
    document.querySelector("#todoparent").innerHTML="";
    for(let i=0;i<todos.length;i++){
    const todo=todos[i];
    const element=todocomponent(todo,i);
    document.querySelector("#todoparent").appendChild(element);
    }
}

function todocomponent(todo,index){
    
    let element=document.createElement("div");
    element.setAttribute("id","todo"+index);
    element.setAttribute("class","todoelement");

    const txtelement1=document.createElement("h4");
    txtelement1.innerHTML=(1+index)+". ";
    element.appendChild(txtelement1);

    const txtelement2=document.createElement("h4");
    txtelement2.innerHTML=todo.title;
    element.appendChild(txtelement2);

    const btnelement=document.createElement("button");
    btnelement.innerHTML="Delete";
    btnelement.setAttribute("onclick","deleteTodo("+index+")");
    element.appendChild(btnelement);

    const btnelement2=document.createElement("button");
    btnelement2.innerHTML="Update";
    btnelement2.setAttribute("onclick","updateTodo("+index+")");
    element.appendChild(btnelement2);
    ctr++;
    // element.innerHTML="<h4>"+ctr+". "+"<h4>"+input.value+"</h4> <button onclick='deleteTodo("+ctr+")'>Delete</button> <button onclick='updateTodo("+ctr+")'>Update</button>";
    return element;

}