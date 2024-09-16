//importing express
const express=require("express");

// Initializing the router object from express
const router=express.Router();

// Destructuring the addToCart function from the cart controller
const {addToCart}=require("../controller/cart.controller");

// Destructuring the auth middleware for authentication
const { auth } = require("../middlewares/auth");


//route to handle adding items to the cart
router.post("/addToCart/:id",auth,addToCart);

// Exporting the router to be used in other files
module.exports=router;