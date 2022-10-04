import { Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import Images from "./component/Images";
import NavBar from "./component/NavBar";
import SnackBar from "./component/SnackBar";
import {getImages} from './services/api'

function App() {
  const[data,setData]=useState([])
  const [imgchange,setImgChange]=useState('mountains')
  const [nochange,setNoChange]=useState(12)
  const [toggle,setToggle]=useState(false)

 
  useEffect(()=>{
    if(nochange<3 || nochange>200){
      setToggle(true)
      return
    } 
    setToggle(false)
    getImages(imgchange,nochange).then(response=>{
      setData(response.data.hits)
      console.log(response.data.hits)
     
    })
  },[imgchange,nochange])

  const onImageChange=(imgchange)=>{
    
setImgChange(imgchange)
  }
  const onNumberCount=(nochange)=>{
    setNoChange(nochange)
  }

  return (
    <Box >

<NavBar onImageChange={onImageChange} onNumberCount={onNumberCount}/>
<Images data={data}/>
<SnackBar toggle={toggle} setToggle={setToggle}/>
    </Box>
  );
}

export default App;
