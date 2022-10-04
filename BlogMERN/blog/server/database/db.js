import mongoose from 'mongoose'

const Connection=async()=>{
    try{
        const url='mongodb+srv://BlogUser:Nazim164@blogweb.mjrgv.mongodb.net/BLOGMERN?retryWrites=true&w=majority'
        await mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
        console.log("db is connected")
    }catch(error){
        console.log('Error Is Occured While DB Connecting',error)
    }
}

export default Connection;



