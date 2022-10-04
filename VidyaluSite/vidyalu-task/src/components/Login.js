import React, { useState } from "react";
import { useHistory } from "react-router";
import  {LoginTask} from '../service/api'
// const LoginValue={
//   email:'',
//   password:''
// }
const Login = () => {
  const history=useHistory()
    const[btn,setBtn]=useState(true)
    // const[login,setLogin]=useState(LoginValue)
    // const btnValid=(e)=>{
    // setBtn(e.target.value)
    // if(e.target.value.length<=8){
    //     setBtn(false)
    // }else{
    //     setBtn(true)
    // }
    // }

    const onInputChange=(e)=>{
      // setLogin({...login, [e.target.name ]:e.target.value})
      // setBtn(e.target.value)
      // console.log(login)
    if(e.target.value.length<=8){
        setBtn(false)
    }else{
        setBtn(true)
    }

    }
  
    const handleClick=async()=>{
      // await LoginTask(login)
      history.push('/stdlis')

    }
  return (
    <div>
      <form>
      <div className="pt-5">
        <hr />
        
      </div>
      <div className="d-flex justify-content-center pt-5 text-muted">
        <h4>Log In to Your Account!</h4>
      </div>
      <br/>
      <div className="d-flex justify-content-center">
        <div className="form-group  " style={{ width: 450 }}>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email address"
            name="email"
            onChange={(e)=>onInputChange(e)}
          />
        </div>
      </div>
      <br/>
      <div className="d-flex justify-content-center">
        <div className="form-group  " style={{ width: 450 }}>
          <input
            type="password"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Password"
            // onChange={btnValid}
            onChange={(e)=>onInputChange(e)}
            name="password"

          />
        </div>
      </div>
      <br/>
      <div className="row">
          <div className="col-7">
              
          </div>
          
          <div className="col-5 text-warning">
              Forgot Password
          </div>
      </div>
      <br/>
      <div className="d-flex justify-content-center">
        <button
          type="submit"
          className="btn btn-primary p-2"
          style={{ width: 450 }}
          disabled={btn}
          value={btn}
          onClick={(e)=>handleClick(e)}
        >
         Log In
        </button>
      </div>
      <br />
      <div className="d-flex justify-content-center">
        <div style={{ marginTop: -8 }} className="text-muted">
          <p>_______________________________</p>
        </div>
        &nbsp;
        <div>
          <span>OR</span>
        </div>
        &nbsp;
        <div style={{ marginTop: -8 }} className="text-muted">
          <p>_______________________________</p>
        </div>
      </div>
      <div className="d-flex justify-content-center">
          <button type="button" className="btn  p-1 "style={{width:250,backgroundColor:'rgb(66, 113, 175)'}} ><a href="https://www.facebook.com/"style={{color:'#ffffff',textDecoration:'none',fontSize:20,fontWeight:'none'}}> <b>f</b> Register with</a></button>
          &nbsp;&nbsp;&nbsp;
          <button type="button" className="btn btn-danger p-1 "style={{width:250}} ><a href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp"style={{color:'#ffffff',textDecoration:'none',fontSize:20,fontWeight:'none'}}> <b>G+</b> Register with</a></button>
      </div>
      <br/>
      <div className="d-flex justify-content-center">
      Don't have an account?&nbsp;&nbsp;<a href="/" style={{textDecoration:'none'}}>Sign Up</a>
      </div>
      </form>
    </div>
  );
};

export default Login;
