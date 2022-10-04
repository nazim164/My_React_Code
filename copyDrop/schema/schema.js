const mongoose=require('mongoose')
const postSchema=mongoose.Schema({
    first_name:String,
    last_name:String,
    state:String,
    city:String,
    zip:String
})

module.exports=mongoose.model("display",postSchema)