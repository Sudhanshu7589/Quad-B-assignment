const mongoose=require("mongoose");
// schema for checkout details 
const checkoutDetailsSchema=mongoose.Schema({
    // fullname of the user placing the order 
    fullname:{
        type:String,
        required:true
    },
//lastname of the user
    lastName:{
        type:String,
        required:true
    },
    //phone number of the user
    phoneNumber:{
        type:Number,
        required:true
    },
    //email id of the user
    emailId:{
        type:String,
        required:true
    },
    // address of the user where to deliver the items
    address:{
        type:String,
        required:true
    },
    // country of the user
    country:{
        type:String,
        required:true
    },
    //city of the user 
    city:
    {
        type:String,
        required:true
    },
    // state of the user 
    state:{
        type:String,
        required:true
    },
    //pincode  of the user
    zipCode:{
        type:Number,
        required:true
    }

})
//exporting the checkoutDetails model
export const CheckOutDetails=mongoose.model('CheckOutDetails',checkoutDetailsSchema);