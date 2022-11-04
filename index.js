const express=require('express');
const app=express();
const port=8050;
const mongoose=require('mongoose');
const adminRoute=require('./admin/adminroute');
const bodyParser=require('body-parser');
const cors=require('cors')
const adminLogin=require('./admin/adminlogin')
const customerRoute=require('./customer/customerroute');
const cartRoute=require('./customer/cartroute');
const reviewRoute=require('./customer/customerreview');
const orderRoute=require('./customer/orderRoute');


mongoose.connect( "mongodb+srv://mohan:passroot@cluster0.yyjbzl2.mongodb.net/resexampleDb",
    (err)=>{
        if(err){
            console.log("db not connected");
        }
        else
        console.log("db  connected");
    }
)

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());
app.use(cors());
app.use('/admin/menu',adminRoute);
app.use('/user',adminLogin);
app.use('/customer/menu',customerRoute);
app.use('/customer/cart',cartRoute);
app.use('/customer/review',reviewRoute);
app.use('/customer/order',orderRoute);

app.listen(port,(req,res)=>{
    console.log("port is listening",port);
})
