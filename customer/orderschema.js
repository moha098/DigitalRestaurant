const mongoose=require('mongoose');
const schema=mongoose.Schema;

const orderSchema=new schema({
    name:{type:String},
    phoneNumber:{type:Number},
    address:{type:String},
    email:{type:String},
    landmark:{type:String}


})

module.exports=mongoose.model("Order",orderSchema);