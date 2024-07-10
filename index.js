const express= require("express");
const colors=require("colors");
const dotenv=require("dotenv");
const app=express();

// ----------------------------------------------- Runing on this port ------------------------------------
const PORT=process.env.PORT || 8080;

// --------------------------------------------- API call -------------------------------------------------

app.get("/",(req,res)=>{
    res.send("Welcome to my Ecommerce application");
});

app.listen(PORT,()=>{
    console.log(`Server is runing on ${process.env.DEV_MODE} mode on port at ${PORT}`);
});