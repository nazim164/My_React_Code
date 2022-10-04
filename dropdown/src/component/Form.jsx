import axios from 'axios';
import React from 'react'
import { useState } from 'react';
// import { createPost } from '../services/api';

const Form = () => {
  let states=["Select State","Maharashtra","Gujrat"];
  let cities=["Select City"];
  // let code=[]
  const [showstate,setshowState]=useState('')
  const[showcity,setshowCity]=useState('')
  const [display,setDisplay]=useState('')
  axios.get('http://localhost:8000/student/all')
  .then((res)=>{
    const db=res.data
    setDisplay(db)
  })
  // const [zipcode,setZipcode]=useState('')

  const ValueOfState=(e)=>{
   
    setshowState(e.target.value)

  }
  const ValueOfCity=(e)=>{
    
    setshowCity(e.target.value)
 
  }
  // const ValueOfZipcode=(e)=>{
  //   setZipcode(e.target.value)
  // }
  if(showstate==="Maharashtra"){
    cities=["Pune","Mumbai","Nagpur"]
  
  }
  else if(showstate==="Gujrat"){
    cities=["Ahmedabad","Surat","Rajkot"]
  }
  // if(showcity==="Nagpur"){
  //   code=["440013","440013"]
  // }


  return (
    <div>
      <form>
        <select onChange={ValueOfState}>
          {states.map((data)=>
          <option key={data} value={data}>{data}</option>
          )}
        </select>
    
        <select onChange={ValueOfCity}>
        {cities.map((data)=>
        <option key={data} value={data}>{data}</option>
        )}
      </select>
      {/* <select onChange={ValueOfZipcode}>
        {code.map((data)=>
        <option key={data} value={data}>{data}</option>
        )}
      </select> */}
     
     <p>City :{showcity}</p>
     {/* <p >ZipCode :{zipcode}</p> */}
      </form>
    </div>
  )
}

export default Form;
