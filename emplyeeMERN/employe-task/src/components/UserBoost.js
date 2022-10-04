import React, { useState } from 'react'

function UserBoost() {
const [dusbtn,setDisBtn]=useState(true)
const[confpass,setConfPass]=useState("")
const[pass,setPass]=useState("")
const[IsError,setIsError]=useState()
   
     const passMatch=(e)=>{
        setConfPass(e.target.value)
   

     setDisBtn(e.target.value)
     if(e.target.value.length<=8){
        setDisBtn(false)
    }
    else{
        setDisBtn(true)
    }
    }
    const ValidBtn=(e)=>{
        setDisBtn(e.target.value)
        if(pass!==confpass){
            setIsError("Confirm Password Should Be Match Password");
        }
        else{
            setIsError()
        }
    }
   
    return (
        <div>
            <div className="pt-2 text-center bg-primary text-white mr-5" style={{marginLeft:500,marginRight:500}}> 
            <h2 >USER CONSOLE</h2>
            </div>
            
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <h1>Hello</h1>

                    </div>
                    <div className="col-4">
                        <h1>Nazim</h1>
                    </div>

                </div>

            </div>
     
     <input type="password"onChange={(e)=>setPass(e.target.value)} value={pass}/>
        <input type="password" name="confpass" onChange={(e)=>passMatch(e)} value={confpass}/>
        {IsError}
        <button type="submit" disabled={dusbtn} onClick={ValidBtn}>SUBMIT</button>
     
        </div>
    )
}

export default UserBoost
