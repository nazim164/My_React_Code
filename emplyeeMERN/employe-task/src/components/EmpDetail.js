import React, { useRef, useState } from "react";
// import e1 from "./e1.jpg";
import w1 from "./w1.png"
import axios from "axios";
import { useHistory } from "react-router-dom";

// const InitialValue={
//     name:'',
//     employeeid:'',
//     designation:'',
//     address:'',
//     phone:'',
//     picture:''
// }

function EmpDetail() {
  const [filen, setfilen] = useState();
  const filechange = (e) => {
    console.log(e.target.files[0]);
    setfilen(e.target.files[0]);
  };
  const fname = useRef();
  const employeId = useRef();
  const designid = useRef();
  const add = useRef();
  const photo = useRef();
  const mobile = useRef();

  // File Upload
  const filesubmit = async () => {
    if (filen.type !== "image/jpeg") {
      alert("please add valid file");
    } else {
      const formData = new FormData();
      formData.append("file", filen);
      console.log(filen);
      try {
        const res = await axios.post(
          "http://localhost:8080/uploadfile",
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

  let EmpDesign = [
    "Team Lead",
    "QA",
    "Software Developer",
    "Business Develpoer Manager",
    "Accountant",
  ];
  // const [value,setValue]=useState(InitialValue)
  // const handleChange=(e)=>{
  //     setValue({...value,[e.target.name]:e.target.value})
  // }
  // const OnSubmit=async()=>{
  //     await savePost(value)
  // }

  //api calling process
  const history = useHistory();
  const onSubmit = () => {
    const PostData=async()=>{
      let res = await axios.post("http://localhost:8080/show/postdata", {
        name: fname.current.value,
        employeeid: employeId.current.value,
        designation: designid.current.value,
        address: add.current.value,
        phone: mobile.current.value,
        picture:filen.name,
  
        
      });
  
      console.log(res)
 
      history.push('/admin')
     
    }
   
    if(fname.current.value===""||employeId.current.value===""||designid.current.value===""||add.current.value===""||mobile.current.value===""){
      alert("Please All Field Is Fill");
    }
    else{
      PostData()
      alert("Data Submitted")
      filesubmit()
    }
 

   
  

  // const Submitprofie = async () =>
  //  {
  //    const formData = new FormData();
  //    formData.append('file', profile);
  //    try {
  //       const res = await axios.post('http://localhost:5000/uploadfile',
  //       formData, { headers: { 'Content-Type': 'multipart/form-data' } })
  //        const { fileName, filePath } = res.data;
  //        setuploadedfile({ fileName, filePath });
  //        console.log(uploadedfile)
  //        setOpen(true); }
  //        catch (err) {
  //           if (err.response.data === 500)
  //            {
  //               console.log("There is the problem with the Server");
  //              } else {
  //                console.log(err.response.data.msg);
  //              }
  //             }
  //           }

  }
  return (
    <div>
      <div style={{ backgroundColor: " rgb(89, 195, 228)" }}>
        <center>
          <h2
            style={{
              color: "white",
              backgroundColor: " #201717",
              fontWeight: 600,
              fontSize: 25,
              padding: 10,
              marginLeft: 520,
              marginRight: 520,
              marginTop: 10,
              borderRadius: 5,
            }}
          >
            USER CONSOLE
          </h2>
          <h1
            style={{
              fontWeight: 600,
              fontSize: 22,
              color: "white",
              backgroundColor: "cadetblue",
              padding: 10,
              marginLeft: 400,
              marginRight: 400,
              borderRadius: 40,
              marginTop: 10,
            }}
          >
            EMPLOYEE DETAILS
          </h1>
        </center>

        <br />
        <form style={{ marginLeft: 100 }}>
          <br />
          <br />
          <img src={w1} width="250px" height="250px" />
          <br />
          <label style={{ marginLeft: 50, fontWeight: "bold", marginTop: 10 }}>
            Employee Photo
          </label>
          <br />
          <br />
          <input
            type="file"
            id="formFile"
            placeholder="Choose Certificate"
            style={{ backgroundColor: "white", width: 250 }}
            onChange={filechange}
            required
          />
        </form>
        <form style={{ marginLeft: 700, marginTop: -340 }}>
          <div className="mb-3 d-flex " style={{ width: 350 }}>
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
              ref={fname}
              required
              minLength="4"
              maxLength="8"
            />
          </div>
          <br />
          <div className="mb-3 d-flex " style={{ width: 350 }}>
            <label htmlFor="exampleInputEmail1" style={{ fontWeight: "bold" }}>
              Employee ID
            </label>
            &nbsp;&nbsp;
            <input
              type="text"
              placeholder="Enter Employee Id"
              style={{ width: 245 }}
              ref={employeId}
              required
            />
          </div>
          <br />
          <div className="mb-3 d-flex " style={{ width: 350 }}>
            <label htmlFor="exampleInputEmail1" style={{ fontWeight: "bold" }}>
              Designation:
            </label>

            <select
              className="form-control"
              id="exampleFormControlSelect1 mt-5"
              rows="3"
              style={{ marginLeft: 10, width: 290 }}
              ref={designid}
              required
            >
              <option>Select Employee Designation</option>
              {EmpDesign.map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
              {/* <option>Team Lead</option>
    <option>QA</option>
    <option>Software Developer</option>
    <option>Business Develpoer Manager</option>
    <option>Accountant</option> */}
            </select>
          </div>
          <br />
          <div className="d-flex">
            <label className="form-check-label" style={{ fontWeight: "bold" }}>
              Address :
            </label>
            <textarea
              ref={add}
              id="exampleFormControlTextarea1"
              rows="3"
              style={{ marginLeft: 32, width: 250 }}
              required
            ></textarea>
          </div>
          <br />
          <div className="mb-3 d-flex " style={{ width: 350 }}>
            <label htmlFor="exampleInputEmail1" style={{ fontWeight: "bold" }}>
              Mobile:
            </label>
            &nbsp;&nbsp;&nbsp;
            <input
              type="number"
              placeholder="Enter Mobile Number"
              style={{ marginLeft: 28, width: 800 }}
              ref={mobile}
              required
            />
          </div>
          <br />
          <br />
          <br />
          <button
            type="button"
            style={{
              width: 200,
              marginLeft: -200,
              backgroundColor: "black",
              color: "#ffffff",
              padding: 8,
            }}
            onClick={onSubmit}
          >
            Submit
          </button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </form>
      </div>
    </div>
  );
}

export default EmpDetail;
