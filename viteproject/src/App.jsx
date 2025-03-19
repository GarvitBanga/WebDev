import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function increment() {
    setCount( count + 1)
    console.log(count);
    if(count==10){
      setCount(0);
    }

  }
  return (
    <div style={{background:"#dfe6e9", height:"100vh"}}>
      <div style={{ display:"flex", justifyContent:"center"}}>
        <div>
          <div>
            <PostComponent 
            name={"Garvit Banga"}
            followercount={1500}
            time={"15m ago"}
            imageurl={"https://garvitbanga.github.io/images/profile.png"}
            description={"Looking for Full Stack Developer Jobs"}
            />
          </div>
          <br/>
          <div>
          <PostComponent 
            name={"Federico Valverde "}
            followercount={"15M"}
            time={"1m ago"}
            imageurl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsqY0De0-suArR9oVf_yu_Pqrvol2hMN5-A&s"}
            description={"Covering for everyone on the pitch"}
            />
          </div>
          <br/>
          <div>
          <PostComponent 
            name={"Federico Valverde"}
            followercount={"15M"}
            promotion={true}
            // time={"1hr ago"}
            imageurl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsqY0De0-suArR9oVf_yu_Pqrvol2hMN5-A&s"}
            description={"Ran 15km today"}
            />
          </div>
          <br/>
        </div>
      </div>
    </div>
  )
}


function PostComponent({name,followercount,promotion,time,imageurl,description}){
  // //an object is passed in the style attribute so styleobj={width:200} is used style={styleobj} and that's why {{}} is used
  return <div style={{width:200, backgroundColor:"white",borderRadius:10,borderColor:"gray",borderWidth:1, padding:20}}> 
    <div style={{display:"flex"}}> 
      
      <img src={imageurl} alt="garvitbanga" style={{width:40,height:40,borderRadius:20}}/>
      <div style={{foneSize:10 ,marginLeft:10}}>
        <b>{name}</b>
        {/* <p>Aspiring Full Stack Developer</p>  */}
        { promotion==null &&
          <>
            <div>{followercount}</div>
            <div style={{display:"flex"}}>
              <div>{time}</div>
              <img src={"https://img.icons8.com/?size=100&id=2963&format=png&color=000000"} style={{width:18,height:18,marginLeft:5}}/>
            </div>
          </>
        }
        { promotion &&
          <div>Promoted</div>
        }
      </div>
    </div> 
    <div style={{foneSize:12}}>
      {description}
    </div>
  </div> 
}

export default App
