"use strict";
let xa = 1;
let name1 = "garvitbanga";
console.log(xa);
console.log(name1);
let x = 1;
console.log(x);
let anyvariable = 1; //anyvariable can be of any type
function greet(firstname) {
    console.log(`Hello ${firstname}`);
}
greet("garvitbanga");
function sum(a, b) {
    return a + b;
}
let ans = sum(1, 2);
console.log(sum(1, 2));
// function fn(f){
//     setTimeout(f,1000);
// } 
// this above gives an error Parameter 'f' implicitly has an 'any' type.
// So we need to tell typescript that f is a function and its type
// f:()=>void this tells typescript that f is a function with () arguments and its return type is void
function fn(f) {
    setTimeout(f, 1000);
}
function f() {
    console.log("Hello World");
}
fn(f);
