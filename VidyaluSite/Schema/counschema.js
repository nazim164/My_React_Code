const mongoose=require('mongoose')

const counschema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    confpassword:String
})

module.exports=mongoose.model("counschema",counschema)