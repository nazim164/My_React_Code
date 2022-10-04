const mongoose=require('mongoose')

const Vidyalu=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    confpassword:String,
    phno:String,
    address:String,
    state:String,
    city:String,
    zipcode:String,
    discrip:String
})
module.exports=mongoose.model("Vidyalu-Task",Vidyalu)