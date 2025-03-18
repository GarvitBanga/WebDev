import {useState} from 'react';
export default function App() {
    const [todos,setTodos]=useState([]); //initialize the state variable count with []
    // useState is a hook that returns a state variable and a function to update the state variable
    
    function addtodo(){
        setTodos(
            todos.concat([{
                title:document.getElementById("title").value,
                description:document.getElementById("description").value}])
        );
    }

    return (
    <div>
        <h1>Todos App</h1>
        <input id="title" type="text" placeholder="Todo Title"/>
        <input  id="description" type="text" placeholder="Todo Description"/>

        <button onClick={addtodo}>Add Todo</button>
        {/* {JSON.stringify(todos)} */}
        {todos.map((todo)=>{
            return <Todo title={todo.title} description={todo.description}/>
        })}
    </div> 
    
    )

    function Todo(props){
        return <div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>  
        </div>
    }
}