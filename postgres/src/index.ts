import {Client} from "pg";

import * as dotenv from 'dotenv';
dotenv.config();
const dblink = process.env.DBLINK;
console.log(dblink);
// const pgclient=new Client({
//     user:'postgres',
//     host:'localhost',
//     database:'postgres',
//     password:'postgres',
//     port:5432
// });
// this above code can also be used to connect to postgres
const pgclient=new Client(dblink);

async function connect(){
    await pgclient.connect();
    console.log('connected');
}

connect();

async function getall(){
    const res=await pgclient.query('select * from users');
    console.log(res.rows);
}
getall();

async function createtable() {
    const res=await pgclient.query('create table todo(id serial primary key,title varchar(50),description varchar(250),password varchar(50),done boolean)');
    console.log(res.rows);
    
}
createtable();

// avoiding sql injection

async function insert() {
    const res=await pgclient.query('insert into todo(title,description,password,done) values($1,$2,$3,$4)',['title','description','password',true]);
    console.log(res.rows);
}
insert();
// instead of appending values in query use $1,$2,$3,$4 to avoid sql injection
