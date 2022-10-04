import React, { Fragment,useState} from 'react'
import axios from 'axios'

const Imageupload = () => {
    const onValue=(e)=>{
        setFile(e.target.value[0])
        setFileName(e.target.value[0].name)
        
 
      }
      const onSubmitValue=async(e)=>{
        e.preventDefault();
        const formData=new FormData()
        formData.append('file',file)
        try{
      const get=await axios.post('/upload',formData,{
        headers:{
          'Content-Type':'multipart/form-data'
        }
      })
      const {fileName,filePath}=get.data;
      setUploadFile({fileName,filePath})
        }catch(error){
      if(error.response.status===500){
        console.log('there was a problem with the server')
      }else{
        console.log(error.response.data.msg)
      }
        }
      
      }
    
  const [file, setFile] = useState('');
  const [filename,setFileName]=useState('choose file')
  const[uploadfile,setUploadFile]=useState({})
    return (
        <Fragment>
            <form onSubmit={onSubmitValue}>
                <div className="custom-file mb-4">
                    <input type="file" className="custom-file-input" id="customFile"   onChange={onValue}/>
                    <label className="custom-file-label" htmlFor="customFile">
                   {filename}
                    </label>
                </div>
                <input type="submit" value="Uplaod" className="btn btn-primary"/>
            </form>
        </Fragment>
    )
}

export default Imageupload
