import axios from 'axios'
const url="http://localhost:9090/show"
export const SignUpTask=async(user)=>{

    try{
return await axios.post(`${url}/post`,user)
    }catch(error){

        console.log("Error While Post Api Is Called")
    }
}
export const getUsers=async(id)=>{
    id=id || '';
    return await axios.get( `${url}/${id}`);
}
// export const LoginTask=async(user)=>{
//     try{
// return await axios.post(`${url}/login`,user)
//     }catch(error)
//     {
//         console.log("Error While Login Post Api Is Called")
//     }
// }
export const counSellor=async(user)=>{
    try{
return await axios.post(`${url}/couns`,user)
    } 
    catch(error){
        console.log("Error While Counsellor Post Api Is Called",error)
    }
}
export const TeacherValue=async(user)=>{
    try{
return await axios.post(`${url}/techschema`,user)
    }catch(error){
        console.log("Error while Teacher Api Is Called",error)
    }
}
// export const formValue=async(user)=>{
//     try{
// return await axios.post(`${url}/form`,user)
//     }catch(error){
//         console.log("Error",error)
//     }
// }
//post api for form

export const editUser=async(id,user)=>{
    return await axios.put(`${url}/${id}`,user)
}

