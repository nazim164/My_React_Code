const express=require('express')
const mongoose=require('mongoose')
const app=express()
const cors=require('cors')
const bodyParser=require('body-parser')
const user =require('./routes/routes')
const fileUpload=require('express-fileupload')
// const routes=require('./routes/routes')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(fileUpload())

app.use('/showdetail',user)
// app.use('/file',routes)


const PORT=9000;
// app.get('/add',(req,res)=>{
//     try{
//         res.send("Ya Gareeb Nawaz")
//     }catch(error){
//         res.status(400).json('Error While Get Api Is Called');
//     }
    
// })
app.post("/uploadfile", (req, res) => {
    if (req.files == null) {
      return res.status(400).json({ msg: "No file uploaded" });
    }
    const file = req.files.file;
    console.log("New", file);
    
    file.mv(`${__dirname}/adminuser/public/uploads/${file.name}`, (err) => {
      if (err) { 
        console.log(err);
        return res.status(500).send(err);
      }
  
      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
  })
app.listen(PORT,()=>console.log("Server Is Running At Port 9000"))
 const url="mongodb+srv://Form164:Nazim164@1-9-21form.vsgdn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology: true})
try{
console.log("db Is Connected");
}catch(error){
    console.log('Error While Db Connecting');
}