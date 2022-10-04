import React, { useRef } from "react";
import axios from "axios";
// import { makeStyles } from '@material-ui/core/styles';
// // import SearchZip from './SearchZip';

// const useStyles = makeStyles({
//     input:{
//         fontSize:20,
//         textAlign:'center',
//         display:'flex',
//         color:'navyblue',
//         marginRight:200
//     }
// })

const Register = () => {
  const fname = useRef();
  const lname = useRef();
  const state = useRef();
  const city = useRef();
  const zip = useRef();

  const handlesubmit = async () => {
    let res = await axios.post(" http://localhost:8000/display/createuser", {
      first_name: fname.current.value,
      last_name: lname.current.value,
      state: state.current.value,
      city: city.current.value,
      zip: zip.current.value,
    });
    console.log(res);
  };

  return (
    <div className="container" style={{backgroundColor:"goldenrod"}}>
      <form
        style={{
          border: "2px double black",
          padding: 15,
          marginLeft: 500,
          marginRight: 500,
          borderRadius: 10,
          backgroundColor: "cyan",
        }}
      >
        <center>
          <div className="mb-3">
            {/* <center><h3>Register-Page</h3></center> */}
            <input
              placeholder="Enter  FirstName"
              type="text"
              ref={fname}
              style={{ width: "200px", padding: 10 }}
            />
          </div>
          <br />
          <div className="mb-3">
            <input
              placeholder="Enter  LastName"
              type="text"
              ref={lname}
              style={{ width: "200px", padding: 10 }}
            />
          </div>
          <br />
          <div className="mb-3">
            <input
              placeholder="Enter  State"
              type="text"
              ref={state}
              style={{ width: "200px", padding: 10 }}
            />
          </div>
          <br />
          <div className="mb-3">
            <input
              placeholder="Enter  City"
              type="text"
              ref={city}
              style={{ width: "200px", padding: 10 }}
            />
          </div>
          <br />
          <div className="mb-3">
            <input
              placeholder="Enter  zipCode"
              type="text"
              ref={zip}
              style={{ width: "200px", padding: 10 }}
            />
          </div>
          <br />
          <button
            onClick={handlesubmit}
            type="submit"
            style={{
              width: "200px",
              padding: 15,
              color: "navy",
              backgroundColor: "tomato",
            }}
          >
            Submit
          </button>
        </center>
      </form>
    </div>
  );
};

export default Register;
