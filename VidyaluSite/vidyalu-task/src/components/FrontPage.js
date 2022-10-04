import React, { useState } from "react";
import { useHistory } from "react-router";
import { counSellor, SignUpTask, TeacherValue } from "../service/api";

const SignupValue = {
  name: "",
  email: "",
  password: "",
  confpassword: "",
};

const FrontPage = () => {
  const history = useHistory();
  const [iserror, setIsError] = useState();
  const [disbtn, setDisBtn] = useState(true);
  const [signup, setSignUp] = useState(SignupValue);
  const [student, setStudent] = useState();
  const [counc, setCounc] = useState();
  const [teacher, setTeacher] = useState();
  const { name, email, password, confpassword } = signup;
  // const[couns,setCouns]=useState(CounsellorValue)
  const OnSubmit = async () => {
    if (name == "") {
      alert("Name Must be Required");
    } else if (email == "") {
      alert("Email Must Be Required");
    } else if (password == "") {
      alert("Password Must Be Required");
    } else if (confpassword == "") {
      alert("Confirm Password Must Be Required");
    } else if (password !== confpassword) {
      alert("Confirm Password Should Be Match To Password");
    } else {
      alert("User Register SuccessFully")
      history.push("/stdlis");
    }
    if (student) {
      await SignUpTask(signup);
    }
    if (counc) {
      await counSellor(signup);
    }
    if (teacher) {
      await TeacherValue(signup);
    }
  };
  const onInputChange = (e) => {
    setSignUp({ ...signup, [e.target.name]: e.target.value });
    console.log(signup);

    // setPsw2(e.target.value)
    setDisBtn(e.target.value);
    if (e.target.value.length <= 8) {
      setDisBtn(false);
    } else {
      setDisBtn(true);
    }
  };

  return (
    <div>
      <hr className="mt-5" />
      <div
        className="text-center mt-5"
        style={{ paddingTop: 60, fontSize: 22 }}
      >
        <p className="text-muted ">Sign Up and Start</p>
      </div>
      <div className="text-center text-muted">
        <p>I want to enroll as</p>
      </div>
      <div className="d-flex justify-content-center">
        <div className="text-center bg-light p-2 border" style={{ width: 140 }}>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            value={student}
            onChange={() => setStudent(signup)}
            value={student}
          />
          &nbsp;&nbsp;
          <label>Student</label>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div className="text-center bg-light p-2 border" style={{ width: 140 }}>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onChange={() => setCounc(signup)}
            value={counc}
            // onChange={(e)=>onInputChange(e)}
          />
          &nbsp;&nbsp;
          <label>Counsellor</label>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div className="text-center bg-light p-2 border" style={{ width: 140 }}>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onChange={() => setTeacher(signup)}
            value={teacher}
          />
          &nbsp;&nbsp;
          <label>Teacher</label>
        </div>
      </div>
      <br />
      <div className="d-flex justify-content-center">
        <div class="form-group  " style={{ width: 450 }}>
          <input
            type="name"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
          />
        </div>
      </div>
      <br />
      <div className="d-flex justify-content-center">
        <div class="form-group  " style={{ width: 450 }}>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email address"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
          />
        </div>
      </div>
      <br />
      <div className="d-flex justify-content-center">
        <div className="form-group  " style={{ width: 450 }}>
          <input
            type="password"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Password"
            // onChange={(e) => setPsw1(e.target.value)}
            value={password}
            onChange={(e) => onInputChange(e)}
            name="password"
          />
        </div>
      </div>

      <div className="d-flex justify-content-center text-muted">
        <span>Password should Be contain atleast eight character</span>
      </div>
      <br />
      <div className="d-flex justify-content-center">
        <div className="form-group  " style={{ width: 450 }}>
          <input
            type="password"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Confirm Password"
            // value={psw2}
            value={confpassword}
            // onChange={lengthPass}
            onChange={(e) => onInputChange(e)}
            name="confpassword"
          />
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <p style={{ marginRight: 100 }}>{iserror}</p>
      </div>
      <br />
      <div className="d-flex justify-content-center">
        <button
          type="submit"
          className="btn btn-primary p-2"
          style={{ width: 450 }}
          disabled={disbtn}
          onClick={OnSubmit}
        >
          Sign up
        </button>
      </div>
      <br />
      <div className="d-flex justify-content-center">
        <div style={{ marginTop: -8 }} className="text-muted">
          <p>_______________________________</p>
        </div>
        &nbsp;
        <div>
          <span>OR</span>
        </div>
        &nbsp;
        <div style={{ marginTop: -8 }} className="text-muted">
          <p>_______________________________</p>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn  p-1 "
          style={{ width: 250, backgroundColor: "rgb(66, 113, 175)" }}
        >
          <a
            href="https://www.facebook.com/"
            style={{
              color: "#ffffff",
              textDecoration: "none",
              fontSize: 20,
              fontWeight: "none",
            }}
          >
            {" "}
            <b>f</b> Register with
          </a>
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          type="button"
          className="btn btn-danger p-1 "
          style={{ width: 250 }}
        >
          <a
            href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp"
            style={{
              color: "#ffffff",
              textDecoration: "none",
              fontSize: 20,
              fontWeight: "none",
            }}
          >
            {" "}
            <b>G+</b> Register with
          </a>
        </button>
      </div>
      <br />
      <div className="d-flex justify-content-center">
        Already have an account?&nbsp;&nbsp;
        <a href="login" style={{ textDecoration: "none" }}>
          Log In
        </a>
      </div>

      {/* <button type="submit" className="btn btn-primary p-2"style={{width:450}}  ><a href="https://www.facebook.com/">Sign up</a></button> */}
    </div>
  );
};

export default FrontPage;
