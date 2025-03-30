import axios from 'axios';
async function getBlogs(){
    const response = await axios.get('http://localhost:3000/api/v1/user/details');
    return response.data;
}
export default async function Blogs() {
   
    const blogs=await getBlogs();
    console.log(blogs);
    return <div>
       Hi there from Blogs
      {blogs.title}{blogs.completed}

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
