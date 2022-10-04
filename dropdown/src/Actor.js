import React, { useState } from 'react'
import john from './john.jpg'
import war from './war.jpg'
import shah from './shah.jpg'
import './App.css';

export default function Actor() {
    const [actor,setActor]=useState("")
    const[img,setImag]=useState([john,war,shah])
    const[name,setName]=useState()

    function onactor(e){
        const aname=e.target.value;
        setActor(aname);
        const name=e.target.value;
        if(aname==="0")
        {
            setName('John Abraham')
        }
        else if(aname==="1"){
            setName('Hritik Roshan')
        }
        else{
            setName('Shah Rukh Khan')
        }

    }
    return (
        <div className="container p-5">
            <h1>Actor DDL</h1>
            <br></br><br></br><br></br><br></br>
            <select className="cuatom-select" onChange={onactor}>
                <option>Acotrs</option>
                <option value="0">John </option>
                <option value="1">Hritik </option>
                <option value="2">Shah Rukh </option>
            </select>
       <p>{name}</p>     
            {actor ?
        <img src={img[actor]} className="img-fluid w-50"></img>:""
        }
        </div>
    )
}
