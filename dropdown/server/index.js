import express from 'express'
const app=express()

import bodyParser from 'body-parser'

import cors from 'cors'

import mongoose from 'mongoose'
// const user = require('./routes/stude');
import {user} from './routes/routes.js'
// const routes=require('./routes/stude')


// const user=require('./routes/user')
// app.use('/user', user)
app.use(bodyParser);
app.use(cors())

app.use('/student',user)

// app.use(bodyparser())
app.get("/ab",(req,res)=>{
    try{
        res.send("hello")
    }
    catch(err){
        console.log(error)
    }
})

mongoose.connect("mongodb+srv://Form164:Nazim164@1-9-21form.vsgdn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(()=>console.log("db connected"))
.catch((err)=>console.log(err))


app.listen(5000,()=>console.log("Start on port 5000"))
