import axios from 'axios'
const url="http://localhost:9090/show"
export const Form=async(user)=>{
    try{
return await axios.post(`${url}/post`,user)
    }catch(error)
    {
        console.log("Error While Post Api Is Called")
    }
}