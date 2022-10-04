import { Box, Button, FormControl, InputBase, makeStyles, TextareaAutosize } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createPost,uploadFile } from "../../service/api";
const useStyle = makeStyles((theme) => ({
  container: {
    padding: "0 100px",
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
  image: {
    width: "100%",
    height: "50vh",
    objectFit: "cover",
  },
  form:{
      display:'flex',
      flexDirection:'row',
      marginTop:10
  },
  textField:{
      flex:1,
      margin:'0 30px',
      fontSize:34
  },
  textearea:{
    width:'100%',
    marginTop:50,
    border:'none',
    '&:focus-visible':{
        outline:'none'
    }
  }
}));
const InitialValue={
    title:'',
    description:'',
    picture:'',
    username:'Nazim164',
    categories:'All',
    createDate:new Date()
}
const CreateView = () => {
  const classes = useStyle();
  const history=useHistory()
  const[file,setFile]=useState('')
  // const[image,setImage]=useState('')
  const [post,setPost]=useState(InitialValue)
  
  const handleChange=(e)=>{
        setPost({...post,[e.target.name]:e.target.value})
    }
    const savePost=async()=>{ 
    await createPost(post);
    history.push('/')
    }
    const url ="https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
    useEffect(()=>{
      console.log(file)
      const getImage=async()=>{
        if(file){
          const data=new FormData()
          data.append("name",file.name)
          data.append("file",file)

        const image=  await uploadFile(data)
        post.picture=image.data
        // setImage(image.data)
        }
          

      }
      getImage()

    },[file])
  return (
    <Box className={classes.container}>
      <img src={url} className={classes.image} />
      <FormControl className={classes.form}>
        <label htmlFor="fileinput">
          <AddCircle fontSize='large' color='action'/>
          </label>
          <input type="file" id="fileinput" style={{display:'none'}}
          onChange={(e)=>setFile(e.target.files[0])}
          />
          <InputBase placeholder='Title' className={classes.textField} onChange={(e)=>handleChange(e)} name='title'/>
          <Button onClick={()=>savePost()} variant='contained' color='primary'>Publish</Button>
      </FormControl>
      <TextareaAutosize
      rowsMin={5}
      placeholder='Tell Your Story....'
      className={classes.textearea}
      onChange={(e)=>handleChange(e)}
      name='description'
      />
    </Box>
  );
};

export default CreateView;
