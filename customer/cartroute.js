const router=require('express').Router();
const Cart=require('./addtocartschema');

router.get('/',(req,res)=>{
    const id=req.params.id;
    Cart.find({})
    .exec()
    .then((result)=>{
        res.json({success:true,data:result});
    })
    .catch((err)=>{
        res.json({success:false,message:"fetching cart data failed"});
    })

})

router.get('/:id',(req,res)=>{
    const id=req.params.id;
    console.log("get server id:",id);
    Cart.find({user_id:id})
    .exec()
    .then((result)=>{
        res.json({success:true,data:result});
    })
    .catch((err)=>{
        res.json({success:false,message:"getting cart by id failed"});
    })
})

router.delete('/:id',(req,res)=>{
    
    const id=req.params.id;
    Cart.deleteOne({_id:id})
    .exec()
    .then((_)=>{
        res.json({sucess:true,message:"Item deleted from cart"});
    })
    .catch((err)=>{
        res.json({success:false,message:"deleting cart item failed"});
    })
})

module.exports=router;