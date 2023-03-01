const express = require("express");
const productModal = require("../Modals/product-modal");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/create-order", (req, res)=> {

    try {
        const user = jwt.verify((req.headers.authorization).split(" ")[1], process.env.SECRET_KEY );
        productModal.find({}).then((data)=>{
            res.status(200).send(data)
        }).catch((err)=>{
            res.status(400).send(err);
        })

    } catch(err) {
      
        res.status(400).send("Unauthorize user")
    }    
   
});


router.delete("/cancel/:id",(req, res)=> {
    productModal.deleteOne({orderId: req.params.id}).then(()=> {
        console.log("order deleted succesfully")
        res.status(200).send("Order Cancelled Sucessfully")
    }).catch((err)=> {
        console.log(err);
        res.status(400).send(err) 
    });
});



module.exports = router;