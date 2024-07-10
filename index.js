const express= require("express");
const colors=require("colors");
const dotenv=require("dotenv");
const config=require("./config/db");
const morgan = require("morgan");
const routes = require("./routes/authroute");
const app=express();

// ----------------------------------------------- Runing on this port ------------------------------------
const PORT=process.env.PORT || 8080;
dotenv.config();


// ---------------------------------------------  Middleware ----------------------------------------------
app.use(express.json());
app.use(morgan('dev'));

// ------------------------------------------------ routes ------------------------------------------------
app.use("/api/v1/auth", routes);
// --------------------------------------------- API call -------------------------------------------------

app.get("/",(req,res)=>{
    res.send("Welcome to my Ecommerce application");
});

app.listen(PORT,()=>{
    console.log(`Server is runing on port at ${PORT}`);
});