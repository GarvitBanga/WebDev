let x = 10;
console.log(x);
x = 'true';
console.log(x);
x = true;
console.log(x);
// JS runs code in the order it is written
// JS is a interpreted language or just in time compiled language
// Dynamically typed language so the type of a variable is determined at runtime
//JS runs in runtime so it is more prone to runtime errors
//Performance overhead
//JS is a single threaded language processes one instruction at a time--> if I run a JS program it will only use one cpu and not other cpus
//Garbage collection-automatic memory management deallocation of memory autoclaiming of memory used by objects no longer in use
//JS is a weakly typed language
x = 10;
let y = 20;
let z = x + y;
console.log(z);
x = 10;
y = 20;
z = x + y;
console.log(z);

function add(x, y) {
    return x + y;
}

let a = 10;// let variable can be reassigned
a = 20;

const b = 10; // const variable can not be reassigned
// b = 20; //TypeError: Assignment to constant variable.

var c = 10; // not recommended; var variable can be reassigned old way of declaring variables function-scoped which means it is only accessible within the function can cause problems
c = 20;
console.log(c);
c="NAME";
console.log(c);


let array=[1,2,3,4,5,6,7,8,9,10];
console.log(array);
array[0]=10;
console.log(array[0]);



// Comparison Operators
console.log(10 > 5);
console.log(10 >= 5);
console.log(10 < 5);
console.log(10 <= 5);
console.log(10 == 5);
console.log(10 != 5);
console.log(10 === 5);
console.log(10 !== 5);
console.log("       ");
console.log(10 > "5");
console.log(10 >= "5");
console.log(10 < "5");
console.log(10 <= "5");
console.log(10 == "5");
console.log(10 != "5");
console.log(10 === "5");
console.log(10 !== "5");
console.log("       ");
console.log(10 > true);
console.log(10 >= true);
console.log(10 < true);


function add(x, y) {
    let val=x+y;
    return "Hello "+val;
}
console.log(add(10, 5));

console.log(add("10", 5));

console.log(add("10", "5"));

for(let i=0;i<2;i++){
    console.log(i);
}



// Objects
let obj = {
    name: "Garvit",
    age: 25,
    address: {
        city: "Jersey City",
        state: "New Jersey",
        country: "USA"
    }
};
console.log(obj.name);
console.log(obj["name"]);
console.log(obj.age);
console.log(obj.address.city);


let array1=["name",202,{"name":"garvit","age":25}];
console.log(array1[2]);


function f(x){
    let y=[];
    for(let i=0;i<x.length;i++){
        if(x[i].age>=25){
        y.push(x[i]);
        }
    }
    return y
}
console.log(f([{name:"a1",age:25},{name:"a2",age:14},{name:"a3",age:35}]));

// Filter in array
let array2=[{name:"a1",age:25},{name:"a2",age:14},{name:"a3",age:35}];
array2=array2.filter(function(x){
    return x.age>=25;
}); 
console.log(array2);


// Parseint string to int

function add(x, y) {
    let val=parseInt(x)+parseInt(y);
    return "Hello "+val;
}
console.log(add(10, 5));

console.log(add("10", 5));


const fsvar=require("fs");//importing fs module File system module
const data=fsvar.readFileSync("a.txt","utf8");//reads file synchronously
console.log(data);



// Concurrency is not parallelism
fsvar.readFile("b.txt","utf8",function(error,data){return console.log(data)});//reads file asynchronously
//here function(error,data) is callback function    

const data1=fsvar.readFile("b.txt","utf8",function(error,data){return console.log(data)});//reads file asynchronously
console.log(data1);// returns undefined as it is asynchronous so data1 is undefined here


setTimeout(function(){
    console.log("Inside Timeout");
},1000);

console.log("After Timeout");

//setTimeout is also aynchronous 


console.log("Hi");


setTimeout(function(){
    console.log("Inside Timeout");
},1000);
let sum=0;
for(let i=0;i<10000000000;i++){
    sum=sum+i;
}
console.log("After for loop");

// All the asynchronous functions will be printed after the above for loop execution is done because then only the thread is released it goes to callback queue and only picked when the call stack is done or finished the execution of the other CPU intensive tasks