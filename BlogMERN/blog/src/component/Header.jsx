import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { Link,useHistory } from 'react-router-dom'
import React from 'react'
// import {useOktaAuth} from '@okta/okta-react'


const usestyle =makeStyles({
    component:{
        background:'#ffffff',
        color:'black'
    },
    container:{
        justifyContent:'center',
        '&> *':{
            padding:20

        }
    },
    link:{
        textDecoration:'none',
        color:'inherit'
    }
})
const Header = () => {
    const classes=usestyle();

const history=useHistory();
// const {oktaAuth,authState}=useOktaAuth();
if(authState && authState.isPending) return null;
    const login=async()=>history.push('/login')
    
    const logout=async()=>oktaAuth.signOut()

    const button=authState.isAuthenticated ?
    <button onClick={logout}>LogOut</button>:
    <button onClick={login}>Login</button>
    return (
        <AppBar className={classes.component}>
  
            <Toolbar className={classes.container}>
                    <Link to='/'className={classes.link}><Typography>HOME</Typography></Link>
                    <Typography>ABOUT</Typography>
                    <Typography>CONTACT</Typography>
                    <Typography>{button}</Typography>
            </Toolbar>
        </AppBar>

    )
}

export default Header
