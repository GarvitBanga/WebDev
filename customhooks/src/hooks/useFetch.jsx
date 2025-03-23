
import { use } from 'react';
import { useState,useEffect } from 'react';

// custom hook
export function usePostTitle(){
    const [post,setPost]=useState({});

    async function getPosts(){
      const response=await fetch("https://jsonplaceholder.typicode.com/posts/2");
      const data=await response.json();
      setPost(data);
    }
    useEffect(()=>{
      getPosts();
    },[]);
  
    return post;
}

export function useFetch(url,retrytime){
  const [data,setData]=useState({});
  const [loading,setLoading]=useState(true);
 
  async function fetchData(){
    setLoading(true);
    const response=await fetch(url);
    const dt=await response.json();
    setData(dt);
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[url]);


  // refetching the data every 10 seconds from the server
  useEffect(()=>{
    setInterval(()=>{
      fetchData();
    },retrytime*1000);
    return function(){
      clearInterval();
    }
  },[]);




  return {data,loading};
}