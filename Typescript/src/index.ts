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