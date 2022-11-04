const router=require('express').Router();
const Menu=require('./adminschema');
const fs=require("fs");
const multer=require('multer');
const path=require("path");
const checkAuth=require('../checkAuth')

// var storage=multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,'uploads')
//     },
//         filename:function(req,file,cb){
//             cb(null,file.fieldname + '_' +Date.now() + path.extname(file.originalname));
//         }
//     })
    
//     var upload=multer({
//         storage:storage
//     }) 


    
//router.post('/',upload.single('foodImage'),(req,res)=>{

//     connsole.log("upload",upload);

//     console.log("readfilesunc",req.file.path);
//     var img= fs.readFileSync(req.file.path);
//     console.log("img",img);
//    var encode_img=img.toString('base64');
    //console.log("encode",encode_img);
//    var fina""lImg={
//        contentType:req.file.mimetype,
//        path:req.file.path,
//         image:new Buffer(encode_img,'base64')
//    }

router.post('/',(req,res)=>{
    const menu=new Menu({
        foodName:req.body.foodName,
        foodId:req.body.foodId,
        foodPrice:req.body.foodPrice,
        foodQuantity:req.body.foodQuantity,
        foodCategory:req.body.foodCategory,
        foodImage:req.body.foodImage
    })
    menu.save()
    .then((result)=>{
        res.json({success:true,message:"Information saved"});
    })
    .catch((err)=>{
        res.json({success:false,message:"Information not saved"})
    })
})

router.get('/',(req,res)=>{
    Menu.find({})
    .exec()
    .then((result)=>{
        // console.log(result);
        // var terrr=result.foodImage;
        // console.log("details",terrr);
        // var img= fs.readFileSync(result.foodImage);
        // console.log("image",img);
        //  var encode_img=img.toString('base64');
        //  console.log("Encoded image",encode_img);
        //  result["fileImage"]=encode_img;
        res.json({success:true,data:result });
    })
    .catch((err)=>{
        res.json({success:false,message:err});
    })
})

router.get('/:id',(req,res)=>{
    const id=req.params.id;
    Menu.findById({_id:id})
    .exec()
    .then((result)=>{
        res.json({success:true,data:result});
    })
    .catch((err)=>{
        res.json({success:false,message:"failed in fetching data by id"})
    })
})

router.delete('/:id',(req,res)=>{
    const id=req.params.id;
    Menu.deleteOne({_id:id})
    .exec()
    .then((result)=>{
        res.json({success:true,message:"deleted sucessfully"});
    })
    .catch((err)=>{
        res.json({success:false,message:"Information not deleted"});
    })
})

router.patch('/:id',(req,res)=>{
    const id=req.params.id;
    console.log(id);
    console.log(req.body);
    Menu.updateMany({_id:id},{$set:req.body}).exec()
    .then((_)=>{
        res.json({success:true,message:"updated successfully"})
    })
    .catch((err)=>{
        res.json({success:false,message:err});
    })
    console.log(req.body);
})

module.exports=router;