import axios from "axios";
const url='http://localhost:8000'
export const createPost=async(post)=>{
    try{
     return  await axios.post(`${url}/create`,post)
    }catch(error){
        console.log('Error While Post Api',error)
    }
}

export const getAllPost=async(param)=>{
    try{
       let response  =  await axios.get(`${url}/posts/${param}`);
       return response.data
    }catch(error){
        console.log('Error While Get Api Is Called',error)
    }

}
export const getPost=async(id)=>{
try{
    let response =await axios.get(`${url}/post/${id}`)
    return response.data
}catch(error){
    console.log('Error While GetPost Api Is Run',error)
}
}
export const updatePost=async(id,post)=>{
    try{
        await axios.post(`${url}/update/${id}`,post)

    }catch(error){
        console.log('Error While UpdatePost Api Is Call',error)
    }
}
export const deleteBlog=async(id)=>{
    try{
        await axios.delete(`${url}/delete/${id}`)
    }catch(error){
        console.log("Error While DeleteBlog Is Api Is Call",error)
    }
}

export const uploadFile=async(data)=>{
    try{
return await axios.post(`${url}/file/upload`,data)
    }catch(error){
        console.log("Error While uploading Image",error)
    }
}