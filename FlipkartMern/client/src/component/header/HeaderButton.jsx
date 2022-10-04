import { Badge, Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ShoppingCart } from "@material-ui/icons";
import React from "react";
const useStyle = makeStyles({
  login: {
    background: "#ffff",
    color: "#2874f0",
    fontWeight: 600,
    textTransform: "unset",
    borderRadius: 2,
    padding: "2px 40px",
    boxShadow:'none'
  },
  wrapper: {
    margin: "0 7% 0 auto",
    display: "flex",
    
    "&> *": {
      marginRight: 50,
      alignItems:'center'
      // fontSize:12
    },
  },
  container:{
      display:'flex',
  }
});

const HeaderButton = () => {
  const classes = useStyle();
  return (
    <Box className={classes.wrapper}>
      <Button variant="contained" className={classes.login}>
        Login
      </Button>
      <Typography style={{marginTop:5}}>More</Typography>
      <Box className={classes.container}>
        <Badge badgeContent={2} color="secondary">
          <ShoppingCart />
        </Badge>

        <Typography style={{marginLeft:10}}>Cart</Typography>
      </Box>
    </Box>
  );
};

export default HeaderButton;
