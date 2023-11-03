import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();   // invoking dotenv file
const app = express();

// DATABASE CONNECTION
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT,()=>{
        console.log("SERVER UP AND RUNNING");
    });
})
.catch((err)=>{
    console.log(err);
})