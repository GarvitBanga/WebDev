import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { PostComponent } from './Post'
function App() {

    const [posts,setPosts]=useState([]);
    const postComponents=posts.map(post=><PostComponent {...post}/>); //...post is used to spread the props of the post object
  function addPost(){
    setPosts([
      ...posts,
      {
        name:"Garvit Banga",
        followercount:1500,
        time:"15m ago",
        imageurl:"https://garvitbanga.github.io/images/profile.png",
        description:"Looking for Full Stack Developer Jobs"
      }
    ]);
  }
  return (
      <div style={{background:"#dfe6e9", height:"100vh"}}>
        <button onClick={addPost}>Add Post</button>
        <div style={{ display:"flex", justifyContent:"center"}}>
            <div>
              {postComponents}
            </div>
          </div>
      </div>
  )
}

export default App
