const mongoose=require('mongoose')

const Drop=mongoose.Schema({
    id:Number,
    name:String,
    email:String,
    phno:Number,
    image:String
})
module.exports=mongoose.model('ShowValue',Drop)