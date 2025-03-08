// Promisified version of setTimeout

function setTimeoutPromisified(time) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, time);
    });
}


function callback() {
    console.log("after 1 second");
}
setTimeoutPromisified(1000).then(callback);


// Callback Hell


setTimeout(function() {
    console.log("Hi");
    setTimeout(function() {
        console.log("Hello");
    
        setTimeout(function() {
            console.log("Hi There");
        },5000);

    },3000);
},1000);


setTimeoutPromisified(1000).then(function() {
    console.log("Hi");
    setTimeoutPromisified(3000).then(function() {
        console.log("Hello");
        setTimeoutPromisified(5000).then(function() {
            console.log("Hi There");
        });
        
    });
    
});

// Callbacks have callback hell  this below has a cleaner syntax
// Promise Chaining

setTimeoutPromisified(1000).then(function() {
    console.log("Hi");
   return setTimeoutPromisified(3000)
    })
    .then(function() {
        console.log("Hello");
        return setTimeoutPromisified(5000)
        })
        .then(function() {
            console.log("Hi There");
        });
        


// Async Await

async function f(){
    console.log("Inside f");
    await setTimeoutPromisified(1000);
    console.log("Hi");
    await setTimeoutPromisified(3000);
    console.log("Hello");
    await setTimeoutPromisified(5000);
    console.log("Hi There");
}
f();

console.log("After f");

// Inside f
// After f
// As async calls are called in awat line so inside f is printed before after f and then Hi and Hello and Hi There are printed





// Error and reject catch
const fs=require("fs");

function callback4(contents) {
    console.log("Promised "+contents);
}
function readFileprom1(){
    return new Promise(function(fileName,reject){
    
        fs.readFile('adsc.txt',"utf8",function(error,data){
            if(error){
                // console.log("Error");
                reject("Error: File not found");
            }
            else{
                fileName(data);
            }
        })
    });
}
const pr1=readFileprom1();
pr1.then(callback4).catch(function(error){
    console.log(error);
});


