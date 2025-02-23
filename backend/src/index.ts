import express from "express";
import authRouter from "./router/authrouter.js"
import messageRouter from "./router/messagerouter.js"
const app = express();

import dotenv from 'dotenv';
dotenv.config(); 
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/auth", messageRouter);


app.listen(3000, () =>
{
    console.log("server is running 3000")
})