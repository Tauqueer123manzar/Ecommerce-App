const mongoose=require("mongoose");
const colors=require("colors");
require("dotenv").config(); //add this line to load .env file.

main().then(()=>{
    console.log(`!...... Mongodb database connected successfully .....!`);
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(process.env.MONGO_URL);
}

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    college:String,
});

const User = mongoose.model("User",userSchema);

const user1 = new User({
    name:"Tauqueer mazar",
    email:"mdtauqueermanzar@gmail.com",
    age:23,
    college:"Maulana Azad National Urdu University"
});

user1.save();