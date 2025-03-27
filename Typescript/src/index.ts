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


// to make a field optional
type optional={
    name:string,
    age?:number
}

let user5:optional={
    name:"garvitbanga"
}
let user6:optional={
    name:"garvitbanga",
    age:26
}
// both are valid

interface Useroptional{
    name:string,
    age:number,
    address?:{
        street:string,
        city:string,
        state:string,
        zip:number
    }
};


let user7:Useroptional={
    name:"garvitbanga",
    age:26,
    address:{
        street:"123 main street",
        city:"hyderabad",
        state:"telangana",
        zip:400010
    }
}
let user8:Useroptional={
    name:"garvitbanga",
    age:26
}

// this is not valid as either address you can have or not but if you have address then you must have all the fields
// let user9:Useroptional={
//     name:"garvitbanga",
//     age:26,
//     // address:{ zip missing
//         street:"123 main street",
//         city:"hyderabad",
//         state:"telangana"
//     }
// }


interface Address {
    street:string,
    city:string,
    state:string,
    zip:number
};
interface Userinterface{
    name:string,
    age:number,
    address?:Address //you can have interface inside interface
};


interface People{
    name:string,
    age:number,
    greet:()=>string //greet():string also does the same
};


let person1:People={
    name:"garvitbanga",
    age:26,
    greet:()=>"hello"
}
console.log(person1.greet());
// here the issue is inside the object greet function can't use name or age even though it's defined in the interface

// So thats why we need classes that can implement interfaces
class PeopleClass implements People{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    greet(){
        return "hello1 "+this.name;
    }
}
let person2=new PeopleClass("garvitbanga",26);
console.log(person2.greet());


// abstract class


abstract class Peoplesabs{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    abstract greet():string;
    hello(){
        return "hi there";
    }
}

class PeopleClassabs extends Peoplesabs{
    name:string;
    constructor(name:string){
        super(name);
        this.name=name;
    }
    greet(){
        return "hello2 "+this.name;
    }

}
let person3=new PeopleClassabs("garvitbanga");
console.log(person3.greet());
console.log(person3.hello());


// TYPES
// Intersections
type Employee={
    name:string,
    startDate:Date
}

type Manager={
    name:string,
    department:string
}

type TeamLead= Employee & Manager;

const teamlead1:TeamLead={
    name:"garvitbanga",
    startDate:new Date(),
    department:"IT"
}
// need to have attributes from both types


// UNIONS

type newEmployee= Employee | Manager;

// either Employee or Manager or both can be used
const newEmployee1:newEmployee={
    name:"garvitbanga",
    startDate:new Date(),
    department:"IT"
}
const newEmployee2:newEmployee={
    name:"garvitbanga",
    startDate:new Date(),
    // department:"IT"
}
const newEmployee3:newEmployee={
    name:"garvitbanga",
    // startDate:new Date(),
    department:"IT"
}


interface Admin{
    name:string,
    permission:string
}
interface User{
    name:string,
    age:number
}

type AdminUser=Admin|User;

const adminuser1:AdminUser={
    name:"garvitbanga",
    permission:"admin"
}
function greetuseradmin(user:AdminUser){
    return "helloadmin "+user.name;
}
console.log(greetuseradmin(adminuser1));


// Arrays in typescript

function getmax(nums:number[]):number{
    let max=nums[0];
    for(let i=0;i<nums.length;i++){
        if(nums[i]>max){
            max=nums[i];
        }
    }
    return max;

}

let arr:number[]=[1,2,3,4,5];
console.log(getmax(arr));


interface Userarr{
    name:string,
    age:number,
    address:Address[]
}
// now here address can be an array of Address

let user9:Userarr={
    name:"garvitbanga",
    age:26,
    address:[
        {
            street:"123 main street",
            city:"hyderabad",
            state:"telangana",
            zip:400010
        },
        {
            street:"123 main street",
            city:"hyderabad",
            state:"telangana",
            zip:400010
        }
    ]
}

console.log(user9.address);


function filteruser(users:Userarr[]){
    let ans=[];
    for(let i=0;i<users.length;i++){
        if(users[i].age>18){
            ans.push(users[i]);
        }
    }
    return ans;
}
let user10:Userarr[]=[
    user9,
    user9
]
console.log(filteruser(user10));