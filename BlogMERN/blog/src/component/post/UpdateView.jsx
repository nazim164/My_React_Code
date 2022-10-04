import {Box,Button,FormControl,InputBase,makeStyles,TextareaAutosize,} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { getPost,updatePost } from "../../service/api";
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
  form: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  textField: {
    flex: 1,
    margin: "0 30px",
    fontSize: 34,
  },
  textearea: {
    width: "100%",
    marginTop: 50,
    border: "none",
    "&:focus-visible": {
      outline: "none",
    },
  },
}));
const InitialValue={
  title:'',
  description:'',
  picture:'',
  username:'Nazim164',
  categories:'All',
  createDate:new Date()
}
const UpdateView = ({ match }) => {
  const [post, setPost] = useState(InitialValue);
  const history=useHistory()
  const classes = useStyle();
  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
 


  useEffect(() => {
    const fetchData = async () => {
      let data = await getPost(match.params.id);
      console.log(data);
      setPost(data);
    };
    fetchData();
  }, []);
  const handleChange=(e)=>{
    setPost({...post,[e.target.name]:e.target.value})
}
const updateBlog=async()=>{
  await updatePost(match.params.id,post)
  history.push(`/details/${match.params.id}`)

}
  return (
    <Box className={classes.container}>
      <img src={url} className={classes.image} />
      <FormControl className={classes.form}>
        <AddCircle fontSize="large" color="action" />
        <InputBase name="title" placeholder="Title" className={classes.textField} value={post.title} onChange={(e)=>handleChange(e)} />
        <Button variant="contained" color="primary"onClick={()=>updateBlog()}>
          Update
        </Button>
      </FormControl>
      <TextareaAutosize
        rowsMin={5}
        placeholder="Tell Your Story...."
        className={classes.textearea}
        value={post.description}
        onChange={(e)=>handleChange(e)} 
        name="description"
      />
    </Box>
  );
};

export default UpdateView;
