import { Grid } from "@material-ui/core";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Post from "./Post";
import { getAllPost } from "../../service/api";
import { useState } from "react";
import { useEffect } from "react";

const Posts = () => {
  // let post = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const[post,setPost]=useState([]);
  const {search}=useLocation()
   useEffect(()=>{
     const fetchData=async()=>{
       let data =await getAllPost(search)
       console.log(data) 
       setPost(data)      
     }
     fetchData()

   },[search])
  return(
    post.map((posta) => (
        <Grid item lg={3} sm={4} xs={12}>
          <Link to={`/details/${posta._id}`} style={{textDecoration:'none', color:'inherit'}}>
          <Post posta={posta}/>
          </Link>
       
        </Grid>
      ))
  );
};

export default Posts;
