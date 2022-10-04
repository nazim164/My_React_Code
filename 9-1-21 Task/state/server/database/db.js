import mongoose from 'mongoose'

const Connection=async()=>{
    try{
const url='mongodb+srv://Form164:Nazim164@1-9-21form.vsgdn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
console.log("Db Is Connected")
    }catch(error){
        console.log("Error While Db Connection",error)
    }
}

export default Connection;