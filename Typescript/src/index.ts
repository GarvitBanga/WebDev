let xa=1;
let name1="garvitbanga";
console.log(xa);
console.log(name1);
let x:number=1;

console.log(x);

let anyvariable:any=1; //anyvariable can be of any type
function greet(firstname:string){
    console.log(`Hello ${firstname}`);
}

greet("garvitbanga");


function sum(a:number,b:number):number{  //a and b are of type number and :number tells us that return type is number
    return a+b;
}
let ans=sum(1,2);
console.log(sum(1,2));


// function fn(f){
//     setTimeout(f,1000);
// } 
// this above gives an error Parameter 'f' implicitly has an 'any' type.


// So we need to tell typescript that f is a function and its input type.
// f:()=>void this tells typescript that f is a function with () arguments and its return type is void
function fn(f:()=>void){
    setTimeout(f,1000);
}


function f(){
    console.log("Hello World");
}
fn(f);


function greetobject(user:{
    name:string,
    age:number
}){
    console.log(user.name);
}
let user={
    name:"garvitbanga",
    age:26
}

// defining types for objects
let user2:{
    name:string,
    age:number
}={
    name:"garvitbangatypescript",
    age:26
}
greetobject(user);
greetobject(user2);


// But we have repeated this definition in greetobject function as well as in user2
// We can use interface to define the type of the object

interface User{
    name:string,
    age:number
};
type Usertype={
    name:string,
    age:number
};

let user3:User={
    name:"garvitbanga",
    age:26
};
let user4:Usertype={
    name:"garvitbangatypescripttype",
    age:26
}
function greetinterface(user:User){
    console.log(user.name);
}
greetinterface(user3);
greetinterface(user4);

let a:string|number="hello";
type stringornumber=string|number;
let b:stringornumber="hello";
b=10;