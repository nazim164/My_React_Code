import React from "react";
import { AppBar, Box, TextField, Toolbar, Typography } from "@material-ui/core";
import { Collections } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
const useStyle=makeStyles({
    navbar:{
        marginLeft:10,
        fontSize:22
    },
    container:{
        backgroundColor:'#FF6F61'
    },
    textfield:{
        paddingTop:15,
        marginLeft:15
    }
})



const NavBar = ({onImageChange,onNumberCount}) => {
const classes=useStyle()
  return (
   <Box>
        <AppBar className={classes.container} position="static">
      <Toolbar>
        <Collections />
        <Typography className={classes.navbar}>Image-Finder</Typography>
      </Toolbar>
    </AppBar>
    <Box className={classes.textfield}>
        <TextField label="Search Image" variant="outlined" onChange={(e)=> onImageChange(e.target.value)}/>
        <TextField label="Number Of Image" variant="outlined" style={{marginLeft:20}} onChange={(e)=>onNumberCount(e.target.value)}/>
    </Box>
   </Box>
  );
};

export default NavBar;
