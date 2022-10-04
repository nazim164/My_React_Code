import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";


// import { Form } from "../services/api";
// const initialValue = {
//   id: "",
//   name: "",
//   email: "",
//   phno: "",
//   image: "",
// };
const User = () => {
  // const [uservalue, setUserValue] = useState(initialValue);
  // const { id, name, email, phno, image } = uservalue;
  const fname=useRef();
  const Id=useRef();
  const gmail=useRef();
  const mobile=useRef();
  const pic=useRef();
  const [filen, setfilen] = useState();
 const navigate=useNavigate()

  // const onInputChange = (e) => {
  //   setUserValue({ ...uservalue, [e.target.name]: e.target.value });
  //   console.log(uservalue);
  // };
  const filechange = (e) => {
    console.log(e.target.files[0]);
    setfilen(e.target.files[0]);
  };
  //File Upload
  const filesubmit = async () => {
    if (filen.type !== "image/jpeg") {
      alert("please add valid file");
    } else {
      const formData = new FormData();
      formData.append("file", filen);
      console.log(filen);
      try {
        const res = await axios.post(
          "http://localhost:9090/uploadfile",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        const { fileName, filePath } = res.data;
        console.log({ fileName, filePath });
      } catch (err) {
        if (err.response.data === 500) {
          console.log("There is the problem with the Server");
        } else {
          console.log(err.response.data.msg);
        }
      }
    }
  };
  

  // useEffect(() => {
  //   filesubmit()
  // },[])
  const OnSubmit = async () => {

    // if(Id.current.value==="")
    // {
    //   alert("Enter Id Number")
    // }
    // else if(fname.current.value==="")
    // {
    //   alert("Enter User Name")
    // }
    // else if(gmail.current.value==="")
    // {
    //   alert("Enter Valid Email Address")
    // }
    // else if(mobile.current.value==="")
    // {
    //   alert("Enter Phone Number")
    // }
    // else if(pic.current.value==="")
    // {
    //   alert("Select Images")
    // }
    // else 
    // {
    //   filesubmit()
    // }
    
    let res=await axios.post("http://localhost:9090/show/post",{
      id:Id.current.value,
      name:fname.current.value,
      email:gmail.current.value,
      phno:mobile.current.value,
      image:filen.name,
    });
    console.log(res);
    navigate('/get')
    filesubmit()
  };
  return (
    <center>
      <div style={{ width: 350 }} className="text-center mt-5">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Id.No
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              // onChange={(e) => onInputChange(e)}
              // value={id}
              ref={Id}
              name="id"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              // onChange={(e) => onInputChange(e)}
              // value={name}
              ref={fname}
              name="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputPassword1"
              // onChange={(e) => onInputChange(e)}
              // value={email}
              ref={gmail}
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Mobile No
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              // onChange={(e) => onInputChange(e)}
              // value={phno}
              ref={mobile}
              name="phno"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Image
            </label>
            <input
              type="file"
              className="form-control"
              id="exampleInputPassword1"
              // onChange={(e) => onInputChange(e)}
              onChange={filechange}
              name="image"
            />
          </div>

          <button type="button" className="btn btn-primary" onClick={OnSubmit}>
            Submit
          </button>
        </form>
      </div>
    </center>
  );
};

export default User;
