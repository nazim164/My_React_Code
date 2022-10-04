const mongoose=require('mongoose')
const formSchema=mongoose.Schema({
    name:String,
    email:String,
    phno:String,
    address:String,
    state:String,
    city:String,
    zipcode:String,
    discrip:String,
    photo:String,
})
module.exports=mongoose.model("VidForm",formSchema)