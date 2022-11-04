const router = require("express").Router();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const User=require('../user/userschema');
const checkAuth=require('../checkAuth');

router.post('/signup',(req,res)=>{
    bcrypt.hash(req.body.password,10,(err,hash)=>{
        if(err){
            return res.json({success:false,message:"password issue"})
        }else{
    
    const user=new User({
        email:req.body.email,
        password:hash,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
    })
    user.save()
        .then((_)=>{
        res.json({success:true,message:"account has been created"})
    })
    .catch((err)=>{
        res.json({sucess:false,message:"signup failed"})
    })
}
})
});


router.post('/login',(req,res)=>{
    console.log("login triggered",req.body);
    User.find({email:req.body.email})
    .exec()
    .then((result)=>{
        if(result.length<1){
           return  res.json({success:true,message:"user not found"});
        }
        const user=result[0];
        console.log("user",user);
        bcrypt.compare(req.body.password, user.password, 
            (err,ret)=>{
                if(ret){
                   const payload={
                        userid:user._id,
                        email:user.email,
                        first_name:user.first_name,
                        last_name:user. last_name,
                        user_type: user.user_type,
                        is_active: user.is_active
                    }
                        console.log("ret",user);
                  const token=jwt.sign(payload,"Secrett")
                  console.log("data needed",user.user_type);
                  return res.json({success:true,token:token,data:user})

                  
                
                }
                else{
                    return res.json({success:false, message:"password not matched"});
                }
            })


    })
    .catch((err)=>{
        res.json({success:false,message:"Auth Failed"})
    })
})


router.get('/profile',checkAuth,(res,req)=>{
    const userId=req.userData.userId;
    User.findById(userId)
    .exec()
    .then((result)=>{
         res.json({sucess:true,data:result})
    }).catch((err)=>{
         res.json({sucess:false,message:"server error"})
    })
})


module.exports=router;