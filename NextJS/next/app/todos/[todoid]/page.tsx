import axios from 'axios';
import { get } from 'http';
async function getTodo(todoid :string){
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoid}`);
    return response.data;
}
interface TodoType{
    title:string;
    completed:boolean;
}
export default async function Todo({params}:{params:any}) {
    const todoid=(await params).todoid;
    const todo=await getTodo(todoid);
    return (
        <div>
            Hi there from Todo
            {todo.title}
            {todo.completed}
        </div>
    )
}