const bodyParser = require('body-parser');
const express=require('express')
const fileUpload = require('express-fileupload');
const mongoose=require('mongoose')
const app=express()
const PORT=9090;
const user=require('./route/routes')
const cors=require('cors')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(fileUpload());
app.use('/show',user)



const URL='mongodb+srv://Form164:Nazim164@1-9-21form.vsgdn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(URL,{
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
  })
try{
console.log("congratulation DB Is Connected")
}catch(error){
    console.log('Error While Db Is Connecting')
}

app.post("/uploadfile", (req, res) => {
  if (req.files == null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }
  const file = req.files.file;
  console.log("New", file);
  
  file.mv(`${__dirname}/user-data/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

app.listen(PORT,()=>console.log("Server Is Running At Port 9090")) 