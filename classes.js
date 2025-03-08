// Classes and Objects in JavaScript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
class Square {
    constructor(side, color) {
        this.color = color;
        this.side = side;
    }
    // constructor(side,length,color) {
    //     this.side = side;
    //     this.length = length;
    //     this.color = color;
    // }
    // SyntaxError: A class may only have one constructor


    getArea() { //no function keyword added here 
        return this.side * this.side;
    }
    // getArea1() {
    //     return this.side * this.length;
    // }
    paintSquare() {
        console.log(`Painting the square...${this.color}`);
    }
}
let person = new Person('John', 30);
person.sayHello();
let square = new Square(5, 'red');//instance/object of Square class
square.paintSquare();
const area = square.getArea();
console.log(area);

// SyntaxError: A class may only have one constructor
// let rectangle = new Square(5, 10, 'blue');
// rectangle.paintSquare();
// const area1 = rectangle.getArea();
// console.log(area1);

// // Inheritance
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     speak() {
//         console.log(`The ${this.name} is speaking.`);
//     }
// }



// Inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`The ${this.name} is speaking.`);
    }
}

let dog = new Animal('Dog');
dog.speak();

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    speak() {
        console.log(`The ${this.name} is speaking.`);
        console.log(`The ${this.name} is a ${this.breed}.`);
    }
}
const dog1 = new Dog('Buddy', 'Golden Retriever');
dog1.speak();




// 
// Date class
console.log(" ");
console.log("\n ");
const time = new Date();
console.log(time);
console.log(time.getDate());
console.log(time.getFullYear());
console.log(time.getHours());
console.log(time.getMinutes());
console.log(time.getSeconds());
console.log(time.getMilliseconds());
console.log(time.getTime());
console.log(time.toDateString());
console.log(time.toISOString());//ISO format
console.log(time.toJSON());
console.log(time.toLocaleDateString());
console.log(time.toLocaleString());
console.log(time.toLocaleTimeString());
console.log(time.toString());
console.log(time.getMonth());
console.log(time.getDay());
console.log(" ");
console.log("\n ");

const map=new Map();
map.set("key1","value1");
map.set("key2","value2");
map.set('name','garvit');
map.set('age',25);
map.set('address',{city:"Jersey City",state:"New Jersey",country:"USA"});
console.log(map);
console.log(map.get('name'));
// console.log(map["key1"]); returns undefined
// console.log(map.get('name1')); key not present returns undefined

console.log(" ");
console.log("\n ");

// PROMISES
// Promises gives us a way to handle asynchronous operations in a more organized and readable way
// Promises give you a promise that it will return something in the future

function printName(name) { 
    console.log(`Hello, ${name}!`);
}

setTimeout(printName, 1000, 'John');//function name , delay in milliseconds, functionarguments

// calling promise is easy but defining promise is hard

// A promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.
// A promise can be in one of three states: pending, fulfilled, or rejected.
// A pending promise is one that hasn't been resolved yet.
// A fulfilled promise is one that has been resolved and has a value.
// A rejected promise is one that has been resolved and has a reason.
console.log(" In between ");
function setTimeoutPromise(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
    // returns object of promise class
}
function callback() {
    console.log("after 1 second");
}
setTimeoutPromise(1000).then(callback); // promise version
// setTimeout(callback, 1000); instead of usinf this we can use promise callback version


console.log("After promise ");


let p=setTimeoutPromise(1000);
console.log(p);
// returns Promise { <pending> }

// Promises are syntactically superior over callbacks









function temp(resolve){
    setTimeout(resolve, 1000);
}
function setTimeoutPromise1() {
    return new Promise(temp);
    // returns object of promise class
}
function callback1() {
    console.log("after 1 second function promise");
}
setTimeoutPromise1().then(callback1); // promise version


