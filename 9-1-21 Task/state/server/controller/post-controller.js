// import postSchema from "../Schema/post-schema.js";
// const postSchema=require('../Schema/post-schema')

export const createPost=async(req,res)=>{
    try{
        const getuser=await postSchema.find()
        res.json(getuser)
    }catch(error){
        res.status(500).json(error)
    }
}

export const valuePost=async(req,res)=>{
    const user=new postSchema({
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
}
export const mainPost=async(req,res)=>{
    try{
        res.status(200).json("set")
             }catch(error){
                 res.status(500).json(error)
             }
}