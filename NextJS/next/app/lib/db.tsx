import { PrismaClient } from "@prisma/client";

const prismaclientSingleton=()=>{
    return new PrismaClient();
}

declare global {
    var prisma:undefined|ReturnType<typeof prismaclientSingleton>;
}
const prisma=globalThis.prisma??prismaclientSingleton();


if(process.env.NODE_ENV!=='production'){
    globalThis.prisma=prisma;
}
export default prisma;


// so that on every dev change the db is not reset the line new PrismaClient() is not executed again and the old db is used