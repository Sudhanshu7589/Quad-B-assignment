const mongoose =require("mongoose");
//define the schema for a product in the database
const productSchema=new mongoose.Schema({
    //Title  of the product
    productTitle:{
        type:String,
        required:true
    },
    //desctiption of the prodouct
    productDescription:{
        type:String,
        required:true
    },
    // original price of the product before any discount 
    originalPrice:{
        type:Number,
        required:true
    },
    //price after discountPrice
    discountPrice:{
      type:Number,
      required:true
    },
    //measurements  of the product
    measurements:{
       type:String,
       required:true
    },
    //color field 
    color:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'',
    },
    //optinal product image
    productImages:[
        {
         type:String,

        }
    ],
    //the product acailable in thr stock
    availability:{
        type:Number,
        required:true
    },
    //product category with predefined optins
    category:{
        type:String,
        enum:["Living Room","Bedroom","Kitchen"],
        required:true
    },
    //array of references to rating and review model for product review
    ratingAndReviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"RatingAndReview",
        },
    ]
   
   
    
})
//Export the product model for ue in the application
module.exports=mongoose.model('Product',productSchema);