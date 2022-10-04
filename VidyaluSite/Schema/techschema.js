const mongoose=require('mongoose')

const techSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    confpassword:String
})
module.exports=mongoose.model('techSchema',techSchema)