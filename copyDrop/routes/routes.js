const express=require('express')
const route=express.Router()

const postSchema=require('../schema/schema')


route.get('/sub',async(req,res)=>{
    try{
        const subuser=await postSchema.find()
        res.json(subuser)

    }catch(error){
       res.json('error while get',error)
    }
})
route.post('/createuser',(req,res)=>{
   
      const user=  new postSchema({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        state:req.body.state,
        city:req.body.city,
        zip:req.body.zip
            
        })
user
.save()
.then(()=>res.send(user))
.catch((error)=>{
    res.send(error)
})

})

route.get('/',async(req,res)=>{
    try{
            res.json("set")
    }catch(error){
        res.json(error)
    }
})
module.exports=route