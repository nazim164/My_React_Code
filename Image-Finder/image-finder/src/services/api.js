import axios from "axios";

const API_KEY='23489674-99968188d71e511106396d5a5'

const URL='https://pixabay.com/api/'

export const getImages=(imgchange,nochange)=>{
    try{
const data=axios.get(`${URL}/?key=${API_KEY}&q=${imgchange}&image_type=photo&per_page=${nochange}&safesearch=true`)
return data
    }catch(error){
        console.log('Error While get Api Is Called',error)
    }
}