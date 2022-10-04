import { makeStyles, Snackbar } from '@material-ui/core'
import React from 'react'
import MuiAlert from '@material-ui/lab/Alert'
const useStyle=makeStyles({
    snack:{
        '&>*':{
            color:'#fff',
            backgroundColor:'#000000'
        }
    }
})
const SnackBar = ({toggle,setToggle}) => {
    const classes=useStyle()
    const handleClose=()=>{
        setToggle(false)
    }
    return (
      <Snackbar className={classes.snack} open={toggle} autoHideDuration={3000} onClose={handleClose}>
          <MuiAlert severity="info"onClose={handleClose}>
        Number Of Images Should Be Between 3 And 200
          </MuiAlert>
      </Snackbar>
    )
}

export default SnackBar
