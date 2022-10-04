import express, { response } from 'express'
import mongoose from 'mongoose'
import route from './route/routes.js'
import   cors from 'cors'
import bodyParser from 'body-parser'
import User from './model/user-schema.js'
import user from './model/user-schema.js'
const app=express()


app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use('/users',route)

const PORT=8000
const URL='mongodb+srv://CRUD:Crud164@cluster0.jkeka.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false})
.then(()=>{
    console.log('db is connected')
    app.listen(8000,()=>{

        console.log(`server is running at port${PORT}`)
    })
}).catch(error=>{
    console.log('Error :',error)
})
// app.post('/Login',(req,res)=>{
//     const {email,password}=req.body
//     User.findOne({email:email},(err,user)=>{
//         if(user){
//             if(password===user.password){
//                 res.send({message:"Login SuccessFully",user:user})
//             }else{
//                 res.send({message:"Password Didn't Match"})
//             }
//         }else{
//             res.send({message:"User Not Registered"})
//         }
//     })
// })


// app.post('/Register',(req,res)=>{

//     const{name,username,email,password}=req.body

//     User.findOne({email:email},(err,user)=>{
//         if(user){
//             res.send({message:"User Already Registered"})
//         }else{
//             const user=new User({
//                 name,
//                 username,
//                 email,
//                 password
//             })
//             user.save(err=>{
//                 if(err){
//                     res.send(err)
//                 }else{
//                     res.send({message:"SuccessFully Registered"})
//                 }
//             })
//         }
//     })
// })