let ctr=1;
function addTodo(){
    const input= document.querySelector("input");
    let element=document.createElement("div");
    element.setAttribute("id","todo"+ctr);
    element.setAttribute("class","todoelement");
    element.innerHTML="<h4>"+ctr+". "+"<h4>"+input.value+"</h4> <button onclick='deleteTodo("+ctr+")'>Delete</button> <button onclick='updateTodo("+ctr+")'>Update</button>";
    ctr++;
    document.querySelector("#todoparent").appendChild(element);
}


function deleteTodo(id){
    const element=document.getElementById("todo"+id);
    // element.remove();
    element.parentNode.removeChild(element); //same as above
    ctr--;
    // document.getElementById("todoparent").removeChild(element); //same as above
}

function updateTodo(id){
    var updatedTodo = prompt("Enter Updated Todo item here");
    const element=document.getElementById("todo"+id);
    element.querySelectorAll("h4")[1].innerHTML=updatedTodo;
    // console.log(element.);
    // element.h4.innerHTML=updatedTodo; 
}
