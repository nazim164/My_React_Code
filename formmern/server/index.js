const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const { urlencoded } = require("express")

const app=express()
app.use(express.json())
app.use(urlencoded())
app.use(cors())
mongoose.connect('mongodb+srv://CRUD:Crud164@cluster0.jkeka.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true

},()=>{
    console.log("DB connected")
})

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const User=new mongoose.model("User",userSchema)
app.post("/login",(req,res)=>{

    const{email,password}=req.body
        User.findOne({email:email},(err,user)=>{
            if(user){
                if(password===user.password){
                    res.send({message:"Login SuccessFully",user:user})
                }else{
                    res.send({message:"Password Didn't  Match"})
                }

            }else{
                res.send({message:"User Not Registered"})
            }
        })
})
app.post("/register",(req,res)=>{
    const{name,email,password}=req.body
User.findOne({email:email},(err,user)=>{
    if(user){
        res.send({message:"User Already Registered"})
    }else{
        const user=new User ({
            name,
            email,
            password
        })
        user.save(err=>{
            if(err){
                res.send(err)
            }else{
                res.send({message:"SuccessFully Registered"})
            }
        }) 

    }
})


})
app.listen( 7000,()=>{
    console.log("Be Started at port 7000")
})
