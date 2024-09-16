const mongoose=require("mongoose");
//color schema 
const colorSchema=new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    color:[{
        type:String,
        required:true

}]
})
export const Color=mongoose.model('Color',colorSchema);