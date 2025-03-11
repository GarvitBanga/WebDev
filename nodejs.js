//NODEJS a javascript runtime environment that runs on the server and uses v8 engine

import { request } from "http";


// BUN is faster than node



// JSON _javascript object notation_

let obj={
    name:"Garvit",
    age:25,
    address:{
        city:"Delhi",
        state:"NCR"
    }
}

console.log(obj);
// { name: 'Garvit', age: 25, address: { city: 'Delhi', state: 'NCR' } }

// HTTP Protocol
//HTTP is a protocol for communication between clients and servers

// Methods-get, post, put, delete etc


// Status code

// 200 Series Successful
// 200 - OK
// 204 - No Content
// 404 - Not Found
// 500 - Internal Server Error
// 300 Series Redirects
// 301 - Moved Permanently
// 302 - Found
// 303 - See Other
// 304 - Not Modified
// 307 - Temporary Redirect
// 400 Series Client Errors
// 400 - Bad Request
// 401 - Unauthorized
// 403 - Forbidden
// 500 Series Server Errors
// 501 - Not Implemented
// 502 - Bad Gateway
// 503 - Service Unavailable
// 504 - Gateway Timeout
// 505 - HTTP Version Not Supported


// Body with the request has the data that is sent by the client to the server along with the request like POST, PUT, DELETE etc
// basically the body is the data that is sent to the server/backend


// Routes are paths or endpoints that define how incoming requests are handled by the server
// Routing is the mechnanism used to direct incoming HTTP requests to the appropriate handler functions or resources based on the URL path
// https://www.api.website.com/route
// this route can be used to handle all incoming requests to the website

