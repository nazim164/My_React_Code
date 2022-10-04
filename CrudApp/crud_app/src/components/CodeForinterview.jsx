import { Box,makeStyles } from '@material-ui/core'
import React from 'react'
import crud from '../assets/images/crud.png'
const useStyle=makeStyles({
image:{
    width:'60%',
    height:'60%',
    marginLeft:'400px',
    marginTop:'200px'
}
})
const CodeForinterview = () => {
    const classes=useStyle()
    return (
      <Box className={classes.image}>
<img src={crud}/>
      </Box>
    )
}

export default CodeForinterview
