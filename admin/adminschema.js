const mongoose=require('mongoose');
const schema=mongoose.Schema;

const menuSchema=new schema({
    foodName:{type:String},
    foodId:{type:Number},
    foodPrice:{type:Number},
    foodQuantity:{type:String},
    foodCategory:{type:String},
    foodImage:{type:String}
})

module.exports=mongoose.model("Menu",menuSchema);