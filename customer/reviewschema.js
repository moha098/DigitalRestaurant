const mongoose=require("mongoose");
const schema=mongoose.Schema;

const reviewSchema=new schema({
    foodId:{type:Number},
    foodReview:{type:Number}
})

module.exports=mongoose.model('Review',reviewSchema);