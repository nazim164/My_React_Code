import express from 'express'
import Connection from './database/db.js';
import bodyParser from 'body-parser';
import cors from 'cors'
import Router from './routes/routes.js'
// import user from './controller/post-controller.js'
// const user=require('./controller/post-controller')
// import user from './routes/routes.js'


const app=express()
app.use(cors())
// app.use(bodyParser.json({extended:true}))
// app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser())
// app.use('/student',Router)

app.use('/student',Router)
const PORT=8000;

app.listen(PORT,()=>console.log("Server Is Running At Port  8000"))


Connection();