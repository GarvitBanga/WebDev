import express from "express";
import { PrismaClient } from "@prisma/client";
const app = express();

const prismaClient = new PrismaClient();

app.get("/",async (req, res) => {
    const data=await prismaClient.user.findMany();
  res.json({
    message:'Get Request',
  });
});

app.post("/", async(req, res) => {
    await prismaClient.user.create({
        data:{
            username:'garvit',
            password:'123456'
        }
    });
    res.json({
        message:'Post Request'
    });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});