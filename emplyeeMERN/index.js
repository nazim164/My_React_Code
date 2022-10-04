const express=require ('express')
const fileUpload = require('express-fileupload');
const app=express()
const mongoose=require('mongoose')


const cors=require('cors')
const bodyParser=require('body-parser')

const user=require('./Routes/routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(fileUpload());

app.use('/show',user)

const PORT=8080;
const url='mongodb+srv://Form164:Nazim164@1-9-21form.vsgdn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology: true})
try{
console.log('Db Is Connected')
}catch(error){
    console.log('Error While Db Is Connecting')
}



// app.post('/upload', function(req, res) {
//   let sampleFile;
//   let uploadPath;

//   if (!req.files || Object.keys(req.files).length === 0) {
//     return res.status(400).send('No files were uploaded.');
//   }

//   // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
//   sampleFile = req.files.sampleFile;
//   uploadPath = `${__dirname}/adminuser/public/uploads/${sampleFile.name}`;

//   // Use the mv() method to place the file somewhere on your server
//   sampleFile.mv(uploadPath, function(err) {
//     if (err)
//       return res.status(500).send(err);

//     res.send('File uploaded!');
//   });
// });

 
// app.get('/get',(req,res)=>{
//     try{
// res.send("Ya Gareeb Nawaz")
//     }catch(error){
//         res.status(400).json('Error While Get Api Is Called',error)
//     }
// })

app.post("/uploadfile", (req, res) => {
  if (req.files == null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }
  const file = req.files.file;
  console.log("New", file);
  
  file.mv(`${__dirname}/employe-task/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});



app.listen(PORT,()=>console.log('Server Is Running At Port 8080'));

