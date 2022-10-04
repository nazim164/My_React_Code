const express = require("express");
const { findOne } = require("../Schema/schema");
const Drop = require("../Schema/schema");
const route = express.Router();

//Post APi for User
route.post("/post", async (req, res) => {
  try {
    const value = await Drop.findOne({ email: req.body.email });
    if (value) {
      res.status(401).json("User Already Register");
    }
    const user = req.body;
    const newUser = new Drop(user);
    await newUser.save();
    res.status(200).json("User Register SuccessFully");
  } catch (error) {
    console.log("Error", error.message);
  }
});
//Get Api For User
route.get('/',async(req,res)=>{
    try{
        const user=await Drop.find()
        res.json(user)
    }catch(error){
        res.json({message:error.message})
    }
})
module.exports = route;
