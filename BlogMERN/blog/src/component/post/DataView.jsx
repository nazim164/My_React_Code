import { Box, makeStyles, Typography } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getPost,deleteBlog } from "../../service/api";
const useStyle = makeStyles((theme)=>({
  container: {
    padding: "0 100px",
    [theme.breakpoints.down('md')]:{
        padding:0
    }
  },
  image: {
    width: "100%",
    height: "50vh",
    objectFit: "cover",
  },
  icon:{
      float:'right',
      margin:10,
  },
  icons:{
      margin:5,
      border:'1px solid #878787',
      borderRadius:5,
      padding:5
  },
  heading:{
      fontSize:36,
      fontWeight:600,
      textAlign:'center',
      margin:'50px 0 10px 0'

  },
  subheading:{
    color:'#878787',
    display:'flex',
    margin:'10px 0',
    [theme.breakpoints.down('sm')]:{
     display:'block'
    }
  },
  link:{
    textDecoration:'none',
    color:'inherit'
  }
}));

const DataView = ({match}) => {
  const classes = useStyle();
  const history=useHistory()
  const url ="https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
const [post,setPost]=useState({})

useEffect(()=>{
  const fetchData=async()=>{
    let data =await getPost(match.params.id)
    console.log(data)
    setPost(data)
  }
  fetchData()
},[])

const deletePost=async()=>{
  await deleteBlog(post._id)
  history.push('/')
}


  return (
    <Box className={classes.container}>
      <img src={post.picture || url} alt="Banner" className={classes.image} />
      <Box  className={classes.icon}>
      <Link to={`/update/${post._id}`}><Edit className={classes.icons} color='primary'/></Link>
      <Delete onClick={()=>deletePost()} className={classes.icons} color='error'/>
      </Box>
      <Typography className={classes.heading}>{post.title}</Typography>
    <Box className={classes.subheading}>
      <Link to={`/?username=${post.username}`}className={classes.link}>
        <Typography>Author:<span style={{fontWeight:600}}>{post.username}</span></Typography>
        </Link>
        <Typography style={{marginLeft:'auto'}}>{new Date(post.createDate).toDateString()}</Typography>
    </Box>
    <Typography>{post.description}</Typography>
    </Box>
  );
};

export default DataView;
