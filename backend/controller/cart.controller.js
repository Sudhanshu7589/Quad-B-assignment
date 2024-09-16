const Product = require("../models/product.model");
const User = require("../models/user.model");
const mongoose = require("mongoose");

exports.addToCart = async (req, res) => {
  try {
    //const userId=req.user._id;
    const userId=req.user.id;
    const productId=req.params.id;
    // Check if userId or productId is missing
    if (!userId || !productId) {
      return res.status(401).json({
        success: false,
        message: "Fields are missing."
      });
    }

    // Validate productId and userId as ObjectId strings
    const user=await User.findOne({_id:userId});

    if(!user){
      return res.status(401).json({
        success:false,
        message:"user not found."
      })
    }
   //finding the product using product id
    const product=await Product.findOne({_id:productId});


    if(!product){
      return res.status(401).json({
        success:false,
        message:"product not found."
      })
    }


    user.cart.push(product._id);
    await user.save();
    res.status(200).json({
      success: true,
      message: "Product added to cart successfully.",
      cart: user.cart
    });

  } catch (error) {
    // Handle any errors that occur
    res.status(500).json({
      success: false,
      message: "An error occurred while adding the product to the cart.",
      error: error.message
    });
  }
};
