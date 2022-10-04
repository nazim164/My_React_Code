import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
const useStyle=makeStyles({
    header:{
        background:'#111111'
    },
    tabs:{
        color:'#ffffff',
        textDecoration:'none',
        marginRight:20,
        fontSize:20
    }
})

const Navbar = () => {
    const classes=useStyle()
    return (
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <NavLink className={classes.tabs} to='./'exact>Crud-Operation</NavLink>
                <NavLink className={classes.tabs} to='All' exact>All Users</NavLink>
                {/* <NavLink className={classes.tabs} to='Add'exact>Add Users</NavLink> */}
                <NavLink className={classes.tabs} to='Register'exact>Register</NavLink>
                <NavLink className={classes.tabs} to='Login'exact>LogIn</NavLink>
                {/* <NavLink className={classes.tabs} to='Add'exact>Add Users</NavLink> */}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
