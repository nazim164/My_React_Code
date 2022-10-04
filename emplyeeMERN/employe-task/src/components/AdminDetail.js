import axios from "axios";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useEffect, useState } from "react";

function AdminDetail() {
  const [show, setShow] = useState([]);

  const [i, setI] = useState(0);
  const [empname, setEmpName] = useState();
  const [empid, setEmpId] = useState();
  const [empdesgn, setEmpdesgn] = useState();
  const [empadd, setEmpAdd] = useState();
  const [empphone, setEmpPhone] = useState();
  const[photo,setphoto]=useState('')
  const [length, setLength] = useState(); 

  const[f1,setf1]=useState(false)
  const[b1,setb1]=useState(false)
  const getValue = async () => {
    const res = await axios.get("http://localhost:8080/show/get");

    setEmpName(res.data[i].name);
    setEmpId(res.data[i].employeeid);
    setEmpdesgn(res.data[i].designation);
    setEmpAdd(res.data[i].address);
    setEmpPhone(res.data[i].phone);
    setphoto(res.data[i].picture)
    console.log(res.data[i]);
    setLength(res.data.length);
  };

  useEffect(() => {
    getValue();
  }, []);
const FrwValue=()=>{
  // e.preventDefault();
  
if(i!==length-1){
  getValue()
  setI(i+1)
}
else{
  setf1(true);
  setb1(false)
}
}
const BckValue=()=>{
  // e.preventDefault();

  if(i!==0){
    getValue()
    setI(i-1)
  }
  else{
    setb1(true)
    setf1(false)
  }

}
  return (
    <div style={{ backgroundColor: "#749769" }}>
    
      <div className="text-center pt-3">
        <h2
          style={{
            color: "white",
            backgroundColor: " #201717",
            marginLeft: 400,
            marginRight: 400,
            fontSize: 30,
            borderRadius: 5,
          }}
        >
          ADMIN CONSOLE
        </h2>
      </div>
      <div style={{backgroundColor:'#ffffff',padding:4,marginRight:220,marginLeft:220,marginTop:50}}>
        <h1
          className="text-center "
          style={{
            color: "white",
            backgroundColor: "cadetblue",
           width:500,
           marginLeft:180,
            borderRadius: 40,
            marginTop: 40,
          }}
        >
          ADMIN DETAILS
        </h1>
     
        <div style={{marginLeft:100,marginTop:50}}>
          <img src={`/uploads/${photo}`} width="200px" height="200px"/>
        </div>

      <div className="mt-5"style={{marginLeft:390}}>
      
      <div className="mb-3 d-flex " style={{ width: 350 ,marginTop:-250}}>
          <label
            htmlFor="exampleInputEmail1"
            className="form-label"
            style={{ fontWeight: "bold" }}
          >
            Name:
          </label>
          &nbsp;&nbsp;
          <input
            type="text"
            placeholder="Enter Name"
            style={{ marginLeft: 42, width: 800 }}
            value={empname}
          />
        </div>
        <div className="mb-3 d-flex " style={{ width: 350 }}>
          <label htmlFor="exampleInputEmail1" style={{ fontWeight: "bold" }}>
            Employee ID
          </label>
          &nbsp;&nbsp;
          <input
            type="text"
            placeholder="Enter Employee Id"
            style={{ width: 245 }}
            value={empid}
          />
        </div>
     
        <div className="mb-3 d-flex " style={{ width: 350 }}>
          <label htmlFor="exampleInputEmail1" style={{ fontWeight: "bold" }}>
            Designation:
          </label>
<input  value={empdesgn} style={{marginLeft:12,width:250}}/>
        </div>
        <div className="d-flex">
          <label className="form-check-label" style={{ fontWeight: "bold" }}>
            Address :
          </label>
          &nbsp; <textarea
            id="exampleFormControlTextarea1"
            rows="3"
            style={{ marginLeft: 32, width: 250 }}
            value={empadd}
          ></textarea>
        </div>
        <br />
        <div className="mb-3 d-flex " style={{ width: 350 }}>
          <label htmlFor="exampleInputEmail1" style={{ fontWeight: "bold" }}>
            Mobile:
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <input
            type="number"
            placeholder="Enter Mobile Number"
            style={{ marginLeft: 28, width: 800 }}
            value={empphone}
          />   
        </div>
      </div>
      </div>
<div style={{marginLeft:1150,marginTop:-200}}>
  <button style={{width:100,backgroundColor:'black',color:'white',borderRadius:100}} onClick={FrwValue} disabled={f1}><ArrowForwardIcon/></button>
</div>

<div style={{marginTop:-32}}>
  <button style={{width:100,backgroundColor:'black',color:'white',borderRadius:100,marginLeft:65  }} onClick={BckValue} disabled={b1}><ArrowBackIcon/></button>
</div>
<br />
      <br />
      <br />  <br />
      <br />
      <br /><br />
      <br />
      <br /><br />
      <br />
      <br /><br /><br />  <br />
  
  
 
      
    </div>
  );
}

export default AdminDetail;
