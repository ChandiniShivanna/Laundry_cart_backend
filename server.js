const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const app = express();
require("dotenv").config();



const register = require("./routes/register&signin")
//console.log(productController)



//middleware
app.use(cors());
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({extended: false}));


//port
app.listen(process.env.PORT || 3001,(err)=>{
    if(!err){
        console.log("Server connected succesfully at 3001")
    }
    else{
        console.log(err)
    }
});



//database Connection
const laundryDB= "mongodb://localhost/laundrycart_mern";//mongodb+srv://Akanksha:Apawar123@cluster0.6karf8f.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(laundryDB,(data)=>{
    console.log("Successfully connect to db")
},(err)=>{
    console.log(err)
});

//path
app.use("/userRegister",register);

app.get("/",(req,res)=>{
    res.status(200).send("Laundry app")
},(err)=>{
    console.log(err)
})

