const mongoose=require("mongoose");
const schema=mongoose.Schema;

const addToCartSchema=new schema({
    user_id:{type:String},
    foodName:{type:String},
    foodId:{type:Number},
    foodPrice:{type:Number},
    foodQuantity:{type:String},
    foodCategory:{type:String}
})

module.exports=mongoose.model("Cart",addToCartSchema);