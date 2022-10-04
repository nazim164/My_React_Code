import React, { useEffect, useState } from "react";
import axios from "axios";

const GetPage = () => {
  const [users, setUsers] = useState([]);
  const [Id, setId] = useState([]);
  const[i,setI]=useState(0);
  const[fname,setFname]=useState([]);
  const[length,setLength]=useState([])
  const [d,setd]=useState([])
  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response.data);
    setUsers(response.data);
    
    // setId(response.data.id)
  
  };
 
  useEffect(() => {
    getAllUsers();
  }, []);

 

  const url = "http://localhost:9090/show/";
  const getUsers = async () => {
    return await axios.get(url);
  };
 

const onSubmit=(e)=>{

  console.log(e.target.value);
  var d=users.filter(data=>(data.id==e.target.value))
  console.log(d);
  setd(d)
}
 

  return (
    <div style={{backgroundColor:"lightgreen"}}>
      <center>
        <select style={{ width: 500, marginTop: 50, textAlign: "center" }} onChange={onSubmit}>
          <option>Select</option>
          {users.map(user => (
            <option key={user.id} value={user.id} >
              {user.id}
            </option>
          ))}
        </select> 
        <br></br>  <br></br>
        <div>
          {d.map((data)=>
          <div>
            <img src={`./uploads/${data.image}`} width="200px"  height="200px"/>
              <h1>Name:{data.name}</h1>
            <h2>Email Id:{data.email}</h2>
            <h3>mobile.No :{data.phno}</h3>
            {/* <h4>{data.image}</h4> */}
          </div>
          )}
        </div>
  
                                 
       
        
        
         
         


  

      </center>
    </div>
  );
};

export default GetPage;
