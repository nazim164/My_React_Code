import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {  makeStyles,alpha } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core';

// component
import SearchBar from './SearchBar'
import HeaderButton from './HeaderButton';


const useStyle=makeStyles({
    header:{
        background:'#2874f0',
        height:55
        
    },
    logo:{
        width:74
    },
    subURL:{
        width:10,
        marginLeft:4,
        height:10
    },
    container:{
        display:'flex'
    },
    component:{
        marginLeft:'12%',
        lineHeight:0
    },
    subHeading:{
        fontSize:10,
        fontStyle:'italic'
    }
})
const ToolBar=withStyles({
    root:{
        minHeight:55
    }
})(Toolbar)
const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const classes=useStyle()
    return (
        <AppBar className={classes.header}>
           <ToolBar>
            <Box className={classes.component}>
            <img src={logoURL} className={classes.logo}/>
             <Box className={classes.container}>
             <Typography className={classes.subHeading}>Explore <Box component="span" style={{color:'#FFE500'}}>Plus</Box></Typography>
               <img src={subURL} className={classes.subURL}/>
             </Box>
            </Box>
            <SearchBar/>
            <HeaderButton/>
           </ToolBar>
        </AppBar>
    )
}

export default Header
