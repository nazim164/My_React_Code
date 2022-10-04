import axios from "axios"
// const url='http://localhost:9000'
export const uploadFile=async(data)=>{
  try{
return await axios.post('http://localhost:9000/file/upload',data)
  }catch(error){
      console.log("Error While uploading Image",error)
  }
}