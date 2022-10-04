const mongoose=require('mongoose')

const EmployeeDetail=mongoose.Schema({
    name:String,
    employeeid:String,
    designation:String,
    address:String,
    phone:Number,
    picture:String
})
module.exports=mongoose.model('Employee',EmployeeDetail)