const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const RegistrationRoute = require('./routes/registertionRoutes');
const LoginRoute = require('./routes/loginRoutes')
const orderRoutes  = require("./routes/orderRoutes");
const Authentication = require('./middleware/autherization')

app.use(cors());
 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));


app.use('/user-registration' ,RegistrationRoute)
app.use('/user-signin',LoginRoute)
app.use('/user-order',Authentication,orderRoutes);




app.get('/',(req,res)=>{
    res.status(200).json({
        "Message":"Server is OK"
    })
})

module.exports = app