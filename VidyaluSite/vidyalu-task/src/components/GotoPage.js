import React, { useState, useEffect } from "react";
import {AppBar,Button,Card,CardContent,makeStyles,Table,TableCell,TableHead,TableRow,Toolbar,Typography} from "@mui/material";
import { Box, fontSize } from "@mui/system";
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
import w3 from "./w3.jpg";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {NavBar, Nav, NavItem, NavDropdown} from 'react-bootstrap';
// import nazim from '../components/nazim.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEdit, faGraduationCap,faUserGraduate} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getUsers } from "../service/api";

const GotoPage = () => {
  const [show, setShow] = useState([]);
  const [getdata, setGetData] = useState([]);
  const[open,setOpen]=useState(false)
  const[i,setI]=useState(0)
  const[fname,setFname]=useState()
  const[email,setEmail]=useState()
  const[mobile,setMobile]=useState()
  const[cityname,setCityName]=useState()
  const [statename,setStateName]=useState()
  const[pincode,setPincode]=useState()
  const[image,setImage]=useState()
  const [users,setUsers]=useState([])
  const history=useHistory()
  const getAllUsers= async()=>{
    const response=await getUsers();
    console.log(response.data);
    setUsers(response.data)
 }
 useEffect(() => {
  getAllUsers();
  
}, [])
  const getValue=async(id)=>{
    id=id || '';
    const res=await  axios.get(`http://localhost:9090/show/${id}`)
    setFname(res.data[i].name);
    setEmail(res.data[i].email);
    setCityName(res.data[i].city);
    setStateName(res.data[i].state);
    setPincode(res.data[i].zipcode);
    setMobile(res.data[i].phno)
    setImage(res.data[i].photo)
    console.log(res.data[i]);
  }
  useEffect(() => {
   getValue();
  }, []);
 const logOut=()=>{
   localStorage.clear()
  //  history.push("/");
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
              <div className="d-flex">
              <div>
              <img src={`/uploads/${image}`} width="50px" height="40px"style={{borderRadius:'50%',marginLeft:1000}}/>
              </div>
                <Typography className="float-right mt-2 ml-1">{fname}</Typography>
               <Box className="float-right ">
               <div className="d-flex">
               {/* <ArrowDropDownCircleIcon className="text-white mt-2" /> */}
                &nbsp;&nbsp;
                <div className="dropdown">
                  <button
                    className="btn text-white  "
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    style={{ marginLeft: -12 }}
                  >
               
                    <ArrowDropDownIcon />
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    
                    <Link to="/setval "className="text-black"style={{textDecoration:'none'}}>Profile</Link>
                    <br/>
                    <Link to="/" onClick={logOut} className="text-black"style={{textDecoration:'none'}}>Logout</Link>
                    {/* <br />
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
                    </Link> */}
                  </div>
                </div>
               </div>
                 
               </Box>
              </div>
              
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <div style={{ marginTop: -25 }}>
          <span className="text-muted">_____________________________</span>

          <div className="row">
            <div className="col-2"style={{ backgroundColor: "rgb(34, 88, 204)" }}>
              <br />
              <div className="d-flex">
                <PersonIcon className="text-white" />
                &nbsp;&nbsp;
                <div>
                <Link><Typography className="text-white">Profile</Typography></Link>
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
                <Link><Typography className="text-white">Dashboard</Typography></Link>
              </div>
              <br />
              <div className="d-flex">
                <FilePresentIcon className="text-white" />
                &nbsp;&nbsp;
                <Link><Typography className="text-white">Courses</Typography></Link>
              </div>
              <br />
              <div className="d-flex">
                <ArrowDropDownCircleIcon className="text-white mt-2" />
                &nbsp;&nbsp;
                <div className="dropdown">
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
                <Link><Typography className="text-white">Search </Typography></Link>
              </div>
              <br />
              <div className="d-flex">
                <HistoryIcon className="text-white" />
                &nbsp;&nbsp;
                <Link><Typography className="text-white">Booking History </Typography></Link>
              </div>
              <br />
              <div className="d-flex">
                <AccountBalanceIcon className="text-white" />
                &nbsp;&nbsp;
                <Link><Typography className="text-white">Bank Details </Typography></Link>
              </div>
              <br />
              <div className="d-flex">
                <VideocamIcon className="text-white" />
                &nbsp;&nbsp;
                <Link><Typography className="text-white">Video Conference</Typography></Link>
              </div>
              <br />
              <div className="d-flex">
                <ForumIcon className="text-white" />
                &nbsp;&nbsp;
                <Link><Typography className="text-white">Chat </Typography></Link>
              </div>
              <br />
              <div className="d-flex">
                <HelpIcon className="text-white" />
                &nbsp;&nbsp;
                <Link><Typography className="text-white">Help & Support</Typography></Link>
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
            <div className=" col-9 mt-3">
              <div style={{marginTop:5}}>
           
              <img src={w3} width="1050px" height="250px" />
              
              <div className="  text-white" style={{position: 'absolute',top: '8px',left: '16px',marginTop:50,fontSize:40,marginLeft:247}}>{fname}</div>
            
              <div className="  text-white " style={{position: 'absolute',top: '8px',top: '16px',fontSize:20,marginTop:100,marginLeft:250}}>{cityname},{statename},{pincode}</div>
              
              <div className=" text-white" style={{position: 'absolute',top: '8px',top: '16px',fontSize:15,marginTop:130,marginLeft:250}}><span className="text-warning">Phone :</span>{mobile} | <span className="text-warning">Email :</span>{email}</div>
              {
                users.map(user=>(
                  <div>
            <div className=" text-white" style={{position: 'absolute',top: '8px',right: '16px',fontSize:22,}}><Link to={`/edit/${user._id}`} ><FontAwesomeIcon icon={faEdit} className="text-warning  "style={{marginTop:10}}/></Link></div>
                  </div>
                ))
              }
                

              <img src={`/uploads/${image}`} width="200px" height="200px" style={{borderRadius:'50%',marginTop:-280,marginLeft:30,border:'5px solid rgb(34, 88, 204',padding:5}}/>

              
              </div>
              
              <Box>
                {/* {show.map((data) => (
                  <Box>
                    <Box>
                      <Box>
                        <Typography>Name:{data.name}</Typography>
                        <Typography>Email:{data.email}</Typography>
                        <Typography>Password:{data.password}</Typography>
                        <Typography>
                          Confirm Password:{data.confpassword}
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Button
                      variant="contained"
                      onClick={() => {
                        setGetData(data._id);
                        setOpen(true)
                      }}
                    >
                      click here
                    </Button>
                  </Box>
                ))} */}
              </Box>
             {/* <Box open={open} onClose={handleClose}>
             {show
                .filter((get) => {
                  return get._id === getdata;
                })
                .map((e) => (
                  <Box>
                    <Typography>name:{e.name}</Typography>
                    <Typography>email:{e.email}</Typography>
                    <Typography>email:{e.password}</Typography>
                  </Box>
                ))}
             </Box> */}
              <br />
              <br />
              <div className="row d-flex">
                <div className="col-6">
                  <Card className="shadow  bg-white rounded">
                    <CardContent className="d-flex">
                      <Typography
                        className="font-weight-bold"
                        style={{ fontSize: 16 }}
                      >
                        Registered Student
                      </Typography>
                      <Typography style={{ marginLeft: 220 }}>
                        <a
                          href=""
                          className="text-warning"
                          style={{ textDecoration: "none" }}
                        >
                          View All
                        </a>
                      </Typography>
                      <br />
                      <br />
                    </CardContent>
                    <Card
                      className="ml-3 mr-3 mb-4 border"
                      style={{ borderRadius: 15 }}
                    >
                      <CardContent
                        style={{ backgroundColor: "rgb(34, 88, 204)" }}
                      >
                        <div className="d-flex">
                          <FontAwesomeIcon
                            icon={faUserGraduate}
                            className="text-white "
                            style={{ width: 60, height: 60 }}
                          />
                          &nbsp;&nbsp;&nbsp;
                          <Typography className="text-white ">
                            Last 7 days
                          </Typography>
                          <br />
                          <br />
                        </div>
                        {/* <Typography>50</Typography> */}
                        <div className="ml-5 ">
                          <Typography
                            className="text-white font-weight-bold ml-4"
                            style={{ fontSize: 30, marginTop: -40 }}
                          >
                            150
                          </Typography>
                        </div>
                      </CardContent>
                    </Card>
                  </Card>
                </div>
                <div className="col-4">
                  <Card className="shadow bg-white shadow">
                    <CardContent className="d-flex">
                      <Typography className="font-weight-bold">
                        Active Course
                      </Typography>
                      <Typography style={{ marginLeft: 100 }}>
                        <Link
                          to="#"
                          className="text-warning "
                          style={{ textDecoration: "none" }}
                        >
                          Veiw All
                        </Link>
                      </Typography>
                    </CardContent>
                    <Card
                      style={{
                        backgroundColor: "rgb(228, 154, 16)",
                        borderRadius: 15,
                      }}
                      className="ml-3 mr-3 mb-5 mt-4"
                    >
                      <CardContent className="d-flex">
                        <FontAwesomeIcon
                          icon={faGraduationCap}
                          className="text-white "
                          style={{ width: 50, height: 50 }}
                        />
                        <Typography
                          className="ml-4 mt-2 font-weight-bold text-white"
                          style={{ fontSize: 30 }}
                        >
                          56
                        </Typography>
                      </CardContent>
                    </Card>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default GotoPage;



//


    
                  //  users.map(user=>(
                      //  <h3 key={user._id}>
                           {/* <TableCell>{user._id}</TableCell> */}
                           {/* <h3>{user.name}</h3>
                           <h3>{user.email}</h3>
                           <h3>{user.phno}</h3>
                           <h3>{user.address}</h3>
                           <h3>{user.state}</h3>
                           <h3>{user.city}</h3>
                           <h3>{user.zipcode}</h3>
                           <h3>{user.discrip}</h3> */}
                          
                           {/* <h3>
                               <Button variant='contained'color='primary'style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                               <Button  variant='contained'color='secondary'onClick={()=>deleteUserData(user._id)}>Delete</Button>
                           </h3> */}
                          //  <div className=" text-white" style={{position: 'absolute',top: '8px',right: '16px',fontSize:22,}}><Link to={`/edit/${user._id}`} ><FontAwesomeIcon icon={faEdit} className="text-warning  "style={{marginTop:10}}/></Link></div>
                      //  </h3>
                       
                   
               
//