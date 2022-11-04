const router=require("express").Router();
const Menu=require('../admin/adminschema');
const Cart=require('./addtocartschema');
const checkAuth=require('../checkAuth');

router.get('/',(req,res)=>{
    Menu.find({})
    .exec()
    .then((result)=>{
        res.json({success:true,data:result})
    })
    .catch((err)=>{
        res.json({success:false,message:"Error in fetching data"});
    })
})

router.get('/:id',(req,res)=>{
    const id=req.params.id;
    Menu.find({_id:id})
    .exec()
    .then((result)=>{
        res.json({success:true,data:result});
    })
    .catch((err)=>{
        res.json({success:false,message:"Data fetching is error by id"});
    })
})


router.post('/',(req,res)=>{
    const cart=new Cart({
        user_id:req.body.user_id,
        foodName:req.body.foodName,
        foodId:req.body.foodId,
        foodPrice:req.body.foodPrice,
        foodQuantity:req.body.foodQuantity,
        foodCategory:req.body.foodCategory
    })
    cart.save()
    .then((result)=>{
        res.json({success:true,message:"Added to Cart"});
    })
    .catch((err)=>{
        res.json({success:false,message:"not added to cart"});
    })
})



module.exports=router;