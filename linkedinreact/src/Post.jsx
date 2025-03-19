export function PostComponent({name,followercount,promotion,time,imageurl,description}){
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