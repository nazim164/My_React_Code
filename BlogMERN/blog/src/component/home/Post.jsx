import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
const useStyle = makeStyles({
  container: {
    height: 350,
    margin: 10,
    border: "1px solid #d3cede",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    '& >*':{
        padding:'0 5px 5px 5px'
    }
  },
  image: {
    height: 150,
    width: "100%",
    objectFit: "cover",
    borderRadius: "10px 10px 0 0",
  },
  text :{
      color:'#878787',
      fontSize:12
  },
  heading:{
      fontSize:20,
      fontWeight:600,
      textAlign:'center'
  },
  detail:{
      fontSize:14,
      wordBreak:'break-word'
  }
});
const Post = ({posta}) => {
  const url =posta.picture || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";
  const classes = useStyle();
  return (
    <Box className={classes.container}>
      <img src={url} alt="wrapper" className={classes.image} />
      <Typography className={classes.text}>{posta.categories}</Typography>
      <Typography className={classes.heading}>{posta.title}</Typography>
      <Typography className={classes.text}>Author:{posta.username}</Typography>
      <Typography className={classes.detail}>{posta.description}</Typography>
    </Box>
  );
};

export default Post;
