const mongoose=require("mongoose");
const schema=mongoose.Schema;

const userSchema=new schema({
    email:{type:String, unique:true, required:true},
    password:{type:String,required:true},
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    is_active:{type:Boolean,default:"true"},
    user_type:{type:String,default:"customer"}
})

module.exports=mongoose.model("User",userSchema);