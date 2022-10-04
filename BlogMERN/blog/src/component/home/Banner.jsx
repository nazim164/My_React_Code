import { makeStyles,Box, Typography } from '@material-ui/core'
import React from 'react'
const useStyle=makeStyles({
    image:{
        background:`url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/55% repeat-x #000`,
        width:'100%',
        height:'50vh',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
       
        '& :first-child':{
            fontSize:66,
            color:'#ffffff',
            lineHeight:1,
        },
        '& :last-child':{
            fontSize:23,
            background:'#FFFFFF'
        }
    }
})
const Banner = () => {
    const classes=useStyle();
    return (
       <Box className={classes.image}>
           <Typography>BLOG</Typography>
           <Typography>Nazim__NC@</Typography>
       </Box>
    )
}

export default Banner
