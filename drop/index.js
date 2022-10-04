const express=require ('express');
const app=express()
const mongoose=require('mongoose');
const bodyParser=require("body-parser")
const cors=require("cors")

const user = require('./routes/stude');
// const routes=require('./routes/stude')


// const user=require('./routes/user')
// app.use('/user', user)
app.use(bodyParser.json());
app.use(cors())

app.use('/student',user)

// app.use(bodyparser())
// app.get("/ab",(req,res)=>{
//     try{
//         res.send("hello")
//     }
//     catch(err){
//         console.log(error)
//     }
// })

mongoose.connect("mongodb+srv://Form164:Nazim164@1-9-21form.vsgdn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(()=>console.log("db connected"))
.catch((err)=>console.log(err))


app.listen(5000,()=>console.log("Start on port 5000"))