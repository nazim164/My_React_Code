
import mongoose from 'mongoose'
import grid from 'gridfs-stream'

const url='http:localhost:8000'
let gfs
const conn =mongoose.connection
conn.once('open',()=>{
    gfs =grid(conn.db,mongoose.mongo)
    gfs.collection('fs')
})

export const uploadFile=(req,res)=>{
 try{
    if(!req.file)
        return  res.status(404).json("file not found")
   const imageURL=`${url}/file/${req.file.filename}`
   res.status(200).json(imageURL)
 }catch(error){
     res.status(500).json(error)
 }
  }
  export const getImage=async(req,res)=>{
      try{
            const file=await gfs.files.findOne({filename:req.params.filename})
            const readStream =gfs.createReadStream(file.filename)
            readStream.pipe(res)
      }catch(error){
          res.status(500).json('Error While Image Is Upload',error)
      }
  }