const router=require("express").Router();
const Order=require('./orderschema');

router.post('/',(req,res)=>{
    const order=new Order({
        name:req.body.name,
        phoneNumber:req.body.phoneNumber,
        address:req.body.address,
        email:req.body.email,
        landmark:req.body.landmark
    })
    order.save()
    .then((result)=>{
        res.json({success:true,message:"order saved successfully"});
    })
    .then((err)=>{
        res.json({success:false,message:"order not saved successfully"});
    })
})

module.exports=router;