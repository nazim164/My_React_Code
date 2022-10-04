import { FormControl, FormGroup,Input, InputLabel,Button, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {addUser} from '../Service/api'
const useStyle=makeStyles({
container:{
    width:'50%',
    margin:'5% 0 0 25%',
    '&>*':{
        marginTop:20
    }
}
})
const initialValues={   
    name:'',
    username:'',
    email:'',
    phone:''
}
const Register = () => {
    const[user,setUser]=useState(initialValues)
    const{name,username,email,phone}=user;
    const classes=useStyle()
    const history=useHistory()

    const onValueChange=(e)=>{
        
        setUser({...user,[e.target.name]:e.target.value})
       
    }
    const addUserDetail=async()=>{
        await addUser(user)
        history.push('/Login')
        alert("Register SuccessFully")

    }
    return (
        <FormGroup className={classes.container}>
            <Typography variant='h4'>Register Form</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='name' value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={(e)=>onValueChange(e)}name='username'value={username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='email'value={email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='phone' value={phone}/>
            </FormControl>
            <Button variant='contained'color='primary'onClick={()=>addUserDetail()}>Register</Button>
        </FormGroup>
    )
}

export default Register
