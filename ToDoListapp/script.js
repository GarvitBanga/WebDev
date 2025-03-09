let ctr=1;
function addTodo(){
    const input= document.querySelector("input");
    let element=document.createElement("div");
    element.setAttribute("id","todo"+ctr);
    element.setAttribute("class","todoelement");

    const txtelement1=document.createElement("h4");
    txtelement1.innerHTML=ctr+". ";
    element.appendChild(txtelement1);

    const txtelement2=document.createElement("h4");
    txtelement2.innerHTML=input.value;
    element.appendChild(txtelement2);

    const btnelement=document.createElement("button");
    btnelement.innerHTML="Delete";
    btnelement.setAttribute("onclick","deleteTodo("+ctr+")");
    element.appendChild(btnelement);

    const btnelement2=document.createElement("button");
    btnelement2.innerHTML="Update";
    btnelement2.setAttribute("onclick","updateTodo("+ctr+")");
    element.appendChild(btnelement2);

    // element.innerHTML="<h4>"+ctr+". "+"<h4>"+input.value+"</h4> <button onclick='deleteTodo("+ctr+")'>Delete</button> <button onclick='updateTodo("+ctr+")'>Update</button>";
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
