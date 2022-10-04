import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, useState,useEffect } from "react";
import PersonIcon from "@mui/icons-material/Person";
import SpeedIcon from "@mui/icons-material/Speed";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import SearchIcon from "@mui/icons-material/Search";
import HistoryIcon from "@mui/icons-material/History";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import VideocamIcon from "@mui/icons-material/Videocam";
import ForumIcon from "@mui/icons-material/Forum";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import { Link } from "react-router-dom";
import { useHistory, useParams, Link } from "react-router-dom";
import axios from "axios";
import { formValue } from "../../service/api";

const Student = () => {
  const filechange = (e) => {
    console.log(e.target.files[0]);
    setfilen(e.target.files[0]);
  };
  //file Upload 
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
  // }, [])
  let statename = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Dehli",
    "Goa",
    "Gujarat",
    "Haryana",
    "Jharkhand",
    "Kerala",
    "Maharashtra",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajisthan",
    "Sikkim",
    "Telangana",
    "Uttar Pradesh",
  ];
  let cityname = [];
  const fname=useRef()
  const phno=useRef()
  const emailId=useRef()
  const address=useRef()
  const state=useRef()
  const cities=useRef()
  const pincode=useRef()
  const discrip=useRef()
  const images=useRef()
  const [dropstate, setDropState] = useState("");
  const [dropcity, setDropCity] = useState("");
  const [filen, setfilen] = useState();
  const history=useHistory()
  // const onValueChange = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  //   console.log(user);
  // };
const OnSubmit=async()=>{
  if(fname.current.value===""){
    alert("Name Must Be Required")
  }
  else if(phno.current.value==="")
  {
    alert("Phone Number Must Be Required")
  }
  else if(emailId.current.value==="")
  {
    alert("Email Must Be Required")
  }
  else if(address.current.value==="")
  {
    alert("Address Must Be Required")
  }
  else if(state.current.value==="")
  {
    alert("State Must Be Required")
  }
  else if(cities.current.value==="")
  {
    alert("City Must Be Required")

  }
  else if(pincode.current.value==="")
  {
    alert("Pincode Must Be Required")
 
  }
  else if(discrip.current.value==="")
  {
    alert("Discription Must Be Required")

  }
  else {
    filesubmit()
    history.push("/goto")
  }
  
    let res=await axios.post("http://localhost:9090/show/form",{
      name:fname.current.value,
      email:emailId.current.value,
      phno:phno.current.value,
      address:address.current.value,
      state:state.current.value,
      city:cities.current.value, 
      zipcode:pincode.current.value,
      discrip:discrip.current.value,
      photo:filen.name,
    });
    console.log(res);
    


}
  
 
  const StateValue = (e) => {
    setDropState(e.target.value);
  };
  const CityValue = (e) => {
    setDropCity(e.target.value);
  };
  if (dropstate === "Andhra Pradesh") {
    cityname = [
      "Alampur",
      "Amur",
      "Bapatla",
      "Chandur",
      "Dhone",
      "Eluru",
      "Farrukhnagar",
      "Gudivada",
      "Isnapur",
    ];
  } else if (dropstate === "Arunachal Pradesh") {
    cityname = [
      "Basar",
      "Changlang",
      "Deomali",
      "Itanagar",
      "Khonsa",
      "Seppa",
      "Tawang",
    ];
  } else if (dropstate === "Assam") {
    cityname = [
      "Ambikapur",
      "Anand Nagar",
      "Bijni",
      "DerGaon",
      "Hauli",
      "Sanari",
    ];
  } else if (dropstate === "Bihar") {
    cityname = [
      "Amarpur",
      "Baraipur",
      "Chhapra",
      "Dehri",
      "Gazipur",
      "Jamalpur",
      "Katihar",
      "Nirmali",
    ];
  } else if (dropstate === "Chhattisgarh") {
    cityname = [
      "Ambikapur",
      "Banarsi",
      "Champa",
      "Deori",
      "Gogaon",
      "Kanker",
      "Mowa",
      "Patan",
      "Raipur",
    ];
  } else if (dropstate === "Dehli") {
    cityname = ["Dehli", "New Dehli"];
  } else if (dropstate === "Goa") {
    cityname = [
      "Aldona",
      "Bandora",
      "Calapor",
      "Mopusa",
      "panaji",
      "saligao",
      "Valpoi",
    ];
  } else if (dropstate === "Gujarat") {
    cityname = [
      "Amreli",
      "Bedi",
      "Chhota Udaipur",
      "Dholka",
      "Gandhinagar",
      "Himatnagar",
    ];
  } else if (dropstate === "Haryana") {
    cityname = [
      "Ambola",
      "Barwala",
      "Bilaspur",
      "Dabwali",
      "Firozpur",
      "Fatehabad",
      "Gohana",
      "Hasanpur",
      "Julana",
      "kansepur",
      "Loharu",
      "Maham",
      "Narwana",
    ];
  } else if (dropstate === "Jharkhand") {
    cityname = [
      "Adityapur",
      "Baliapur",
      "Chandour",
      "Deoghar",
      "Gumia",
      "Hazaribagh",
    ];
  } else if (dropstate === "Kerala") {
    cityname = [
      "Adoor",
      "beypur",
      "chalaKhudi",
      "Chittur",
      "Dharmadam",
      "Elur",
      "Feroke",
      "GuruVayur",
      "Haripad",
    ];
  } else if (dropstate === "Maharashtra") {
    cityname = [
      "Achalpur",
      "Bhandara",
      "Chandrapur",
      "Dharmabad",
      "Faizpur",
      "Jalgaon",
      "Nagpur",
    ];
  } else if (dropstate === "Nagaland") {
    cityname = ["dimapur", "Kohima", "Mon"];
  } else if (dropstate === "Odisha") {
    cityname = [
      "Anandapur",
      "Baleshwar",
      "Chandapur",
      "Dungamal",
      "Ganjam",
      "Hirakud",
      "Jaleswar",
      "Karanja",
    ];
  } else if (dropstate === "Punjab") {
    cityname = [
      "Ahmedgarh",
      "Bhawanigarh",
      "Daulatpur",
      "Firozpur",
      "Gobindgarh",
      "Hajipur",
    ];
  } else if (dropstate === "Rajisthan") {
    cityname = [
      "Ajmer",
      "Banswara",
      "Barkhera",
      "Dholpur",
      "Fatehnagar",
      "Jaipur",
      "Pushkar",
    ];
  } else if (dropstate === "Sikkim") {
    cityname = ["mangan", "Namchi", "Naya Bazar", "Singtom"];
  } else if (dropstate === "Telangana") {
    cityname = [
      "Asifabad",
      "Bhongir",
      "Devarkonda",
      "Hyderabad",
      "Jangaon",
      "Mahbubnagar",
      "Nizamabad",
      "",
    ];
  } else if (dropstate === "Uttar Pradesh") {
    cityname = [
      "AfzalGarh",
      "Allahabad",
      "Bakiabad",
      "Chilkana Sultanpur",
      "Dildarnagar Fetahpur",
      "Ghaziabad",
      "Hafizpur",
    ];
  }
 

  return (
    <div>
      <div>
        <AppBar
          style={{ backgroundColor: "rgb(34, 88, 204)", paddingTop: 0.04 }}
        >
          <Toolbar>
            <Box className="container">
              <Box className="clearfix">
                <Typography
                  className="float-left "
                  style={{ marginLeft: -65, fontWeight: 600 }}
                >
                  VIDYALU
                </Typography>
                {/* <Typography className="float-right">Nazim C</Typography> */}
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <div style={{ marginTop: -25 }}>
          <span className="text-muted">_____________________________</span>
          <div className="row">
            <div
              className="col-2"
              style={{ backgroundColor: "rgb(34, 88, 204)" }}
            >
              <br />
              <div className="d-flex">
                <PersonIcon className="text-white" />
                &nbsp;&nbsp;
                <div>
                  <Link
                    to="/goto"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Profile
                  </Link>
                  {/* <Link
                      to="stud"
                      className="text-black ml-4"
                      style={{ text  Decoration: "none" }}
                    >
                      Student List
                    </Link> */}
                </div>
              </div>
              <br />
              <div className="d-flex">
                <SpeedIcon className="text-white" />
                &nbsp;&nbsp;
                <Typography className="text-white">Dashboard</Typography>
              </div>
              <br />
              <div className="d-flex">
                <FilePresentIcon className="text-white" />
                &nbsp;&nbsp;
                <Typography className="text-white">Courses</Typography>
              </div>
              <br />
              <div className="d-flex">
                <ArrowDropDownCircleIcon className="text-white mt-2" />
                &nbsp;&nbsp;
                <div class="dropdown">
                  <button
                    className="btn text-white  "
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    style={{ marginLeft: -12 }}
                  >
                    Dropdown
                    <ArrowDropDownIcon />
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link
                      to="stud"
                      className="text-black ml-4"
                      style={{ textDecoration: "none" }}
                    >
                      Student List
                    </Link>
                    <br />
                    <Link
                      to="couns"
                      className="text-black ml-4"
                      style={{ textDecoration: "none" }}
                    >
                      Councellor List
                    </Link>
                    <br />
                    <Link
                      to="tech"
                      className="text-black ml-4"
                      style={{ textDecoration: "none" }}
                    >
                      Teacher List
                    </Link>
                  </div>
                </div>
              </div>
              <br />
              <div className="d-flex">
                <SearchIcon className="text-white" />
                &nbsp;&nbsp;
                <Typography className="text-white">Search </Typography>
              </div>
              <br />
              <div className="d-flex">
                <HistoryIcon className="text-white" />
                &nbsp;&nbsp;
                <Typography className="text-white">Booking History </Typography>
              </div>
              <br />
              <div className="d-flex">
                <AccountBalanceIcon className="text-white" />
                &nbsp;&nbsp;
                <Typography className="text-white">Bank Details </Typography>
              </div>
              <br />
              <div className="d-flex">
                <VideocamIcon className="text-white" />
                &nbsp;&nbsp;
                <Typography className="text-white">Video Conference</Typography>
              </div>
              <br />
              <div className="d-flex">
                <ForumIcon className="text-white" />
                &nbsp;&nbsp;
                <Typography className="text-white">Chat </Typography>
              </div>
              <br />
              <div className="d-flex">
                <HelpIcon className="text-white" />
                &nbsp;&nbsp;
                <Typography className="text-white">Help & Support</Typography>
              </div>
              <br />
              <div className="d-flex">
                <LogoutIcon className="text-white" />
                &nbsp;&nbsp;
                <Typography className="text-white">Logout</Typography>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
            <div className="col-10 mt-5">
              <div
                className="mt-5 border border-muted"
                style={{
                  border: "2px solid ",
                  marginRight: 20,
                  borderRadius: 10,
                }}
              >
                <span className="ml-4 text-muted " style={{ fontSize: 22 }}>
                  Personal Details
                </span>
                <br />
                <br />
                <div className="row ml-3 ">
                  <div className="col-4">
                    <form>
                      <label className="label-control text-muted">Name</label>
                      <br />
                      <input
                        type="text"
                        className="form-control bg-light"
                        ref={fname}
                        name="name"
                      />
                    </form>
                  </div>

                  <div className="col-4">
                    <form>
                      <label className="label-control text-muted">
                        Phone Number
                      </label>
                      <br />
                      <input
                        type="number"
                        className="form-control bg-light"
                        ref={phno}
                        name="phone"
                      />
                    </form>
                  </div>
                  <div className="col-4">
                    <form>
                      <label className="label-control text-muted">
                        Email Id
                      </label>
                      <br />
                      <input
                        type="email"
                        className="form-control bg-light"
                        style={{ width: 300 }}
                        ref={emailId}
                        name="email"
                      />
                    </form>
                  </div>
                </div>
                <br />
                <div className="row ml-3 ">
                  <div className="col-4">
                    <form>
                      <label className="label-control text-muted">
                        Address
                      </label>
                      <br />
                      <input
                        type="text"
                        className="form-control bg-light"
                        ref={address}
                        name="address"
                      />
                    </form>
                  </div>

                  <div className="col-4">
                    <form>
                      <label className="label-control text-muted">State</label>
                      <br />
                      {/* <input type="text" className="form-control bg-light" /> */}

                      <select
                        className="form-control bg-light"
                        onChange={StateValue}
                        ref={state}
                      >
                        <option>Select State</option>
                        {statename.map((data) => (
                          <option key={data} value={data}>
                            {data}
                          </option>
                        ))}
                      </select>
                    </form>
                  </div>
                  <div className="col-4">
                    <form>
                      <label className="label-control text-muted">City</label>
                      <br />

                      {dropstate === "" ? (
                        " "
                      ) : (
                        <select
                          className="form-control bg-light"
                          style={{ width: 300 }}
                          onChange={CityValue}
                          ref={cities}
                        >
                          {/* <option className="text-muted">Select City</option> */}
                          {cityname.map((data) => (
                            <option key={data} value={data}>
                              {data}
                            </option>
                          ))}
                        </select>
                      )}
                    </form>
                  </div>
                </div>
                <br />
                <div className="row ml-3 ">
                  <div className="col-4">
                    <form>
                      <label className="label-control text-muted">
                        Zip Code
                      </label>
                      <br />
                      <input
                        type="number"
                        name="pincode"
                        className="form-control bg-light"
                        ref={pincode}
                      />
                    </form>
                  </div>

                  <div className="col-7">
                    <form>
                      <label className="label-control text-muted">
                        discription
                      </label>
                      <br />
                      {/* <input type="text" className="form-control bg-light" /> */}

                      <div class="form-floating">
                        <textarea
                          style={{ width: 660 }}
                          className="form-control bg-light"
                          placeholder="Leave a comment here"
                          id="floatingTextarea"
                          name="description"
                          ref={discrip}
                        ></textarea>
                      </div>
                      <br />
                    </form>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-5">
                  <form>
                    <label className="label-control text-muted">
                      Image Upload
                    </label>
                    <br />
                    {/* <input type="text" className="form-control bg-light" /> */}

                    <div class="form-floating">
                      <input
                        type="file"
                        style={{ width: 250 }}
                        className="form-control bg-light"
                        placeholder="Upload Image"
                        id="floatingTextarea"
                        name="description"
                        onChange={filechange}
                      ></input>
                    </div>
                    <br />
                  </form>
                </div>
              </div>
              <div className="clearfix">
                <span className="float-right">
                  <button
                    type="button"
                    className="btn text-white  mr-4 "
                    style={{
                      width: 150,
                      height: 45,
                      backgroundColor: "rgb(34, 88, 204)",
                    }}
                    onClick={() => OnSubmit()}
                  >
                    Submit
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Student;
