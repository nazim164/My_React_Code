import axios from "axios";
const url='http://localhost:8080'

export const uploadFile=async(data)=>{
    try{
return await axios.post(`${url}/file/upload`,data)
    }catch(error){
        console.log("Error While uploading Image",error)
    }
}