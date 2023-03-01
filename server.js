const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const app = express();
require("dotenv").config();


const productController = require("./routes/product");
const orderController = require("./routes/order")
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

mongoose.connect("mongodb+srv://Akanksha:Apawar123@cluster0.6karf8f.mongodb.net/test?retryWrites=true&w=majority") //mongodb+srv://Akanksha:Apawar123@cluster0.6karf8f.mongodb.net/?retryWrites=true&w=majority
    .then(() => console.log('database Connected!'))
    .catch((err) => console.log('Error!!! to connect the database'+err.message))


//path
app.use("/user-register",register);
app.use("/product",productController);
app.use("/order", orderController);

app.get("/",(req,res)=>{
    res.status(200).send("Laundry app")
},(err)=>{
    console.log(err)
})

