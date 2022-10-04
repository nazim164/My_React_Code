const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    contact:Number,
    gender:String,
    picture:String,
    address:String,
    country:String,
    state:String,
    city:String,
    resume:String
})
module.exports=mongoose.model('userconsole',userSchema)