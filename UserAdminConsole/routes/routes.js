const express = require("express");
const route = express.Router();
// const multer = require('multer')
// const upload=require('../middleware/upload')
// const upload=require('../utils/upload')

const userSchema = require("../schema/schema");



route.get("/add", async (req, res) => {
  try {
    const showuser = await userSchema.find();
    res.json(showuser);
  } catch (error) {
    res.status(400).json(error);
  }
});
route.post("/postuser", (req, res) => {
  const user = new userSchema({
      name:req.body.name,
    email: req.body.email,
    contact: req.body.contact,
    gender:req.body.gender,
    picture: req.body.picture,
    address: req.body.address,
    country: req.body.country,
    state: req.body.state,
    city: req.body.city,
    resume: req.body.resume,
  });
  user
    .save()
    .then(() => res.send(user))
    .catch((error) => {
      res.send(error);
    });
});
// route.post('/upload',(req,res)=>{
//   if(req.files===null)
//   {
//     return res.status(400).json({msg:'no file uploaded'})
//   }
//   const file=req.files.file;
//   file.mv(`${__dirname}/reactconsole/public/uploads/${file.name}`,err=>{
//     if(err){
//       console.error(err)
//       return res.status(500).send(err)
//     }
//     res.json({fileName:file.name,filePath:`/uploads/${file.name}`})
//   })
// })



module.exports = route;
