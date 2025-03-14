let todos=[];
todos.push({
    title:"document.querySelector().value,"
});
console.log(todos[0]);

// how to print the value of the object
console.log(todos[0].title);
// how to print the key of the object
// console.log(todos[0].title);






// Map Filter 
const input=[1,2,3,4,5,6,7,8,9,10];

 const newArray=[];

 for(let i=0;i<input.length;i++){
    newArray.push(input[i]*2);
 }

 console.log(newArray);
// You can also use map function
 function transform(x){
   return x*2;
 }
 const ans=input.map(transform);
 console.log(ans);


//  Filter

const arr=[1,2,3,4,5,6,7,8,9,10];

const newarray=[];

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        newarray.push(arr[i]);
    }
}

console.log(newarray);

const ans1=arr.filter((x)=>{return x%2==0;});

console.log(ans1);