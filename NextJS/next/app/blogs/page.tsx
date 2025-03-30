import axios from 'axios';
async function getBlogs(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return response.data;
}
export default async function Blogs() {
   
    const blogs=await getBlogs();
    return <div>
       Hi there from Blogs
      {blogs.map((blog:TodoType)=><Todo title={blog.title} completed={blog.completed} />)}

    </div>
}
interface TodoType{
    title:string;
    completed:boolean;
}
function Todo({title,completed}:TodoType){
    return <div>
        {title}{completed?'completed':'not completed'}
    </div>
}
