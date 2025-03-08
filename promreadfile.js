
const fs=require("fs");
fs.readFile("a.txt","utf8",function(error,data){
    console.log(data);
});
// Callback version



// function random(resolve){//resolve is a function
//     resolve();
// }

// let prom=new Promise(random);
// console.log(prom);
// function callback2() {
//    console.log("Promise success");
// }
// prom.then(callback2);



// Do Promise version of read file 

function readFilePromise(fileName){
    fs.readFile('a.txt',"utf8",function(error,data){
        fileName(data);
    })
}
function callback3(contents) {
    console.log("Promised "+contents);
}
function readFileprom(){
    return new Promise(readFilePromise);
}
const pr=readFileprom();
pr.then(callback3);







