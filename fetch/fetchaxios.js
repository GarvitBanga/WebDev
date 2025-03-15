const express = require("express");
const app = express();



function main(){
    fetch("https://jsonplaceholder.typicode.com/todos").then( async response=>{
        const data=await response.json();
        // console.log(data);
        console.log(data.length);
    })
};
main();




const axios=require("axios");

async function main1(){
    const response= await axios.get("https://jsonplaceholder.typicode.com/todos"); //it automatically converts the response to json so no need to do it manually
    console.log(response.data.length);
}
main1();



// POST request

async function fetchpostrequest(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos",{method:"POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            title:"Garvit",
            description:"Hello World",
            userId:1,
            id:1
        })
    });
    const data=await response.json();
    console.log("fetch response data",data);

};
fetchpostrequest();
async function axiospostrequest(){
    const response= await axios.post("https://jsonplaceholder.typicode.com/todos",{
            title:"Garvit",
            description:"Hello World",
            userId:1,
            id:1
    }, {headers: {
        'Content-Type': 'application/json'
      }});
    console.log("axios response data",response.data);
}
axiospostrequest();
