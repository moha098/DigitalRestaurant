const router=require("express").Router();
const  Review=require('./reviewschema');

router.post('/:id',(req,res)=>{
    const id=req.params.id;
    const review=new Review({
        foodId:id,
        foodReview:req.body.foodReview
    })
    review.save()
    .then((result)=>{
        res.json({success:true,message:"review saved Successfully"});
    })
    .catch((err)=>{
        res.json({success:false,message:"Review not saved Successfully"});
    })
})


router.get('/',(req,res)=>{
    Review.find({})
    .exec()
    .then((result)=>{
        res.json({success:true,data:result})
    })
    .catch((err)=>{
        res.json({success:false,message:"recieving review data failed"})
    })
})

module.exports=router;