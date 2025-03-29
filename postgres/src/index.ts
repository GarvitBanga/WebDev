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
// createtable();

// avoiding sql injection

async function insert() {
    const res=await pgclient.query('insert into todo(title,description,password,done) values($1,$2,$3,$4)',['title','description','password',true]);
    console.log(res.rows);
}
insert();
// instead of appending values in query use $1,$2,$3,$4 to avoid sql injection




// create address table using foreign key

async function createaddresstable() {
    const res=await pgclient.query('create table addresses(id serial primary key, user_id INTEGER NOT NULL,city varchar(50) NOT NULL,country varchar(50) NOT NULL, street varchar(255) NOT NULL,pincode VARCHAR(6) NOT NULL, created_at timestamp with time zone default current_timestamp,foreign key(user_id) REFERENCES users(id) on delete cascade)');
    console.log(res.rows);
    
}
// createaddresstable();


async function insertaddress() {
    const res=await pgclient.query('insert into addresses(user_id,city,country,street,pincode) values($1,$2,$3,$4,$5)',[1,'delhi','india','delhi road','110011']);
    console.log(res.rows);
}
// insertaddress();


async function insertuserwithaddress() {
    const res1=await pgclient.query('insert into users(username,email,password) values($1,$2,$3) returning id',['username','email','password']);
    let userid=res1.rows[0].id;
    // console.log(userid);
    const res2=await pgclient.query('insert into addresses(user_id,city,country,street,pincode) values($1,$2,$3,$4,$5)',[userid,'delhi','india','delhi road','110011']);
    console.log(res2.rows);
}



// insertuserwithaddress();



// Using transactions

async function insertuserwithaddresstransactions() {
    const res=await pgclient.query('begin');
    const res1=await pgclient.query('insert into users(username,email,password) values($1,$2,$3) returning id',['username','email','password']);
    let userid=res1.rows[0].id;
    // console.log(userid);
    const res2=await pgclient.query('insert into addresses(user_id,city,country,street,pincode) values($1,$2,$3,$4,$5)',[userid,'delhi','india','delhi road','110011']);
    const res3=await pgclient.query('commit');
    console.log(res2.rows);
}



// JOINS
async function getuseraddresses() {

    const res=await pgclient.query('select u.username as username,u.email as email,a.city as city,a.country as country,a.pincode as pincode from users u left join addresses a on u.id=a.user_id where u.username=$1',['garvit7']);
    console.log(res.rows);
}

getuseraddresses();