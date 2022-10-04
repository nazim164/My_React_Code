
import React,{useState} from 'react';

import './App.css';
import messi from './messi.png'
import cr7 from './cr7.jpg'
import neymar from './neymar.jpg'
import Actor from './Actor';


function App() {
  const [player ,setPlayer]=useState("")
  const[img,setImg]=useState([cr7,messi,neymar])
  const [pname,setpName]=useState("")
  
  function onplayer(e){
    
      const footBaller=e.target.value;
      setPlayer(footBaller);
      const fname=e.target.value;
      if(footBaller === "0"){
        setpName('Ronaldo')
      }
     else if (footBaller==="1") {
       setpName('Messi')
        
      } else {
        setpName('Neymar')
      }
  }

  return (
  
    <div className="container p-3" >
      <h1>DropDown For FootBaller In React</h1>
      <br></br>
      <select   className="custom-select" onChange={onplayer}>
      <option value="">FootBaller</option>
        <option value="0" >Ronaldo</option>
        <option value="1">Messi</option>
        <option value="2">Neymar</option>
   
      </select>
      <br></br><br></br><br></br>
     <p> {pname}</p>
      {player ? 
     <img src={img[player]} class="img-fluid w-50" >
      </img>:""}
      <hr/>     <br></br><br></br><br></br>
      <Actor/>

    </div>
  )
}

export default App;
