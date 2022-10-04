const express=require ('express')
const app=express()
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const cors=require('cors')
const user=require('./routes/routes')


app.use(bodyParser.json());
app.use(cors());

app.use('/display',user)
const PORT=8000;

app.get('/see',(req,res)=>{
    try{
        res.send('nazim chishti')
    }catch(error){
        console.log("error while get api ",error)
    }
})

mongoose.connect("mongodb+srv://Form164:Nazim164@1-9-21form.vsgdn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
try{
    console.log('db is connected')
}catch(error){
    console.log('error while db is not connected')
}
// .then(()=>console.log('db is connected'))
// .catch((error)=>console.log('db not connected',error))

app.listen(PORT,()=>console.log("server is running at port 8000"))