const express=require('express')

const route=express.Router()
const EmployeeDetail=require('../Schema/schema')
route.get('/get',async(req,res)=>{
    
    try{
const Euser=await EmployeeDetail.find()
res.send(Euser)
    }catch(error){
        res.status(400).json('Error While Get Api Is Called',error)
    }
})

route.post("/postdata",(req,res)=>{
    const user=new EmployeeDetail({
        name:req.body.name,
        employeeid:req.body.employeeid,
        designation:req.body.designation,
        address:req.body.address,
        phone:req.body.phone,
        picture:req.body.picture
    });
    user 
        .save()
        .then(() =>res.send(user))
        .catch((error) =>{
            res.send(error)
        });
});
module.exports=route