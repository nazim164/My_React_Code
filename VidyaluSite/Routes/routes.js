const { response } = require("express");
const express = require("express");
const Vidyalu = require("../Schema/schema");
const counschema = require("../Schema/counschema");
const techSchema = require("../Schema/techschema");
const formSchema=require('../Schema/formSchema')
const route = express.Router();

// route.post('/post',async(req,res)=>{

//     const user=new Vidyalu({
//         name:req.body.name,
//         email:req.body.email,
//         password:req.body.password,
//         confpassword:req.body.confpassword,

//     })
//     user
//     .save()
//     .then(()=>res.send(user))
//     .catch((error)=>{
//         res.send(error)
//     });

// })
//get api for student
route.get("/getuser", async (req, res) => {
  // const id=req.params.id;
  try {
    const Vuser = await Vidyalu.find();
    res.json(Vuser);
  } catch (error) {
    res.json({ message: error.message });
  }
  // const Vuser=  await Vidyalu.find()
  // res.send(Vuser)
});
// post api for student
route.post("/post", async (req, res) => {
  try {
    const exist = await Vidyalu.findOne({ email: req.body.email });
    if (exist) {
      res.status(401).json("User Already Register");
    }
    const user = req.body;
    const newUser = new Vidyalu(user);
    await newUser.save();
    res.status(200).json("User Is SuccessFully Register");
  } catch (error) {
    console.log("Error", error.message);
  }
});
// post api for counsellor
route.post("/couns", async (req, res) => {
  try {
    const server = await counschema.findOne({ email: req.body.email });
    if (server) {
      res.status(401).json("user Already  Register");
    }

    const user = req.body;
    const newUser = new counschema(user);
    await newUser.save();
    res.status(200).json("User Is SuccessFully Register");
  } catch (error) {
    console.log("Error", error);
  }
});
//get api for counsellor
route.get("/getcouns", async (req, res) => {
  const Vuser = await counschema.find();
  res.send(Vuser);
});
//post api for teacher
route.post("/techschema", async (req, res) => {
  try {
    const server = await techSchema.findOne({ email: req.body.email });
    if (server) {
      res.status(401).json("user Already  Register");
    }
    const user = req.body;
    const newUser = new techSchema(user);
    await newUser.save();
    res.status(200).json("User Is SuccessFully Register");
  } catch (error) {
    console.log("Error", error);
  }
});
//get api for teacher
route.get("/gettech", async (req, res) => {
  const Vuser = await techSchema.find();
  res.send(Vuser);
});
//login Page API

route.post("/login", async (req, res) => {
  try {
    let user = await Vidyalu.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (user) {
      return res.status(200).json(`${req.body.email} Login  SuccessFully`);
    } else {
      return res.status(401).json("Invalid Login");
    }
  } catch (error) {
    console.log("error:", error);
  }
});
//post api for form
route.post('/form',async(req,res)=>{
  try{
    const user=await formSchema.findOne({email:req.body.email})
    if(user){
      res.status(401).json("User Already Register")
    }
    const exist=req.body;
    const newUser=new formSchema(exist)
    await newUser.save();
    res.status(200).json("User SuccessFully Register")
  }catch(error){
    console.log("error",error)
  }
})
//get api for form
route.get("/",async(req,res)=>{
  const user=await formSchema.find()
  res.send(user)
})
route.get("/:id",async(req,res)=>{
  const id =req.params.id;
  try{
      const user=await formSchema.findById(id);
      res.json(user);

  }catch(error){
      res.json({message:error.message})

  }
 
})

//edit  api

route.put("/:id", async (req, res) => {
  const user = req.body;
  const edituser = new Vidyalu(user);
  try {
    await Vidyalu.updateOne({ _id: req.body.id }, edituser);
    res.json(edituser);
  } catch (error) {
    res.json({ message: error.message });
  }
});
module.exports = route;
