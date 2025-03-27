interface User{
    name:string,
    age:number,
}

function sumofage(user1:User,user2:User){
    return user1.age+user2.age;
}

const age=sumofage({name:"federico",age:26},{name:"albert",age:18});
console.log(age);




interface User2{
    name:string,
    age:number,
    email:string,
    password:string
}


// PICK
type Updateprops=Pick<User2,"name"|"age"|"email">; //picking only name,age and email from the User2 interface

function updateuser(updateprops:Updateprops){
    // hit the database to update the user
    console.log(updateprops.name);
}
let user11:User2={
    name:"garvitbanga",
    age:26,
    email:"garvit@gmail.com",
    password:"123456"
}
let updateuser11:Updateprops={
    name:"federico",
    age:26,
    email:"federico@gmail.com"
}
updateuser(updateuser11);



// PARTIAL


type PartialUpdateprops=Partial<Updateprops>; //partial is used to make some fields optional
function partialupdateuser(updateprops:PartialUpdateprops){
    // hit the database to update the user
    console.log(updateprops.name);
}
partialupdateuser({name:"federico valverde"});


// READONLY



const userobj={name:"federico",age:26};

userobj.name="federico valverde"; //even though the array is a const still the name can be changed
console.log(userobj);

const arrc=[1,2,3];
arrc[0]=10; //even though the array is a const still the value can be changed
console.log(arrc);

// To enforce that the value also can't be changed we can use readonly

type userobjreadonly={
    readonly name:string,
    readonly age:number
};
const userobjreadonly1:userobjreadonly={
    name:"federico",
    age:26
}
// userobjreadonly1.name="federico valverde"; //gives an error as the name is readonly
console.log(userobjreadonly1);


const user31:Readonly<User2>={
    name:"federico",
    age:26,
    email:"federico@gmail.com",
    password:"123456"
}
// this also works for interfaces which are not readonly but you want to make a object readonly