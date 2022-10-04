import React from 'react'
import logo from './logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import img from './img.png';
import logo1 from './logo1.png';
import symbol from './symbol.jpg'
import Footer from './Footer';
import CircularProgress from '@material-ui/core/CircularProgress'
import customersupport from './customersupport.png'
import Cards from './Cards'


import './App.css'
const App = () => {
  const progress = 40;
  return (

    <div>

      <div class="customer-support">
        <a href="#">
          <img src={customersupport} alt="ss"></img>
        </a>
      </div>
      <div>
        <div
          role="alert"
          className="alert alert-primary alert-dismissible fade show m-0 text-center"
        >
          <strong>Anytime, anywhere</strong> | Learn on your schedule from any
          device{" "}
          <button
            type="button"
            data-dismiss="alert"
            aria-label="Close"
            className="close"
            style={{ background: "none", outline: "none", border: "none" }}
          >
            <span aria-hidden="false">×</span>
          </button>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light ps-4 ">
          <div className="d-flex justify-content-evenly align-items-center">
            <a routerlink="/" className="navbar-brand" href="/html/vidyalu/">
              <img src={logo} alt="" width="127" />
            </a>
            <div className="choose-course">
              <select name="" id="" className="form-control">
                <option value="">Categories</option>
                <option value="">Humanities</option>
                <option value="">Business</option>
                <option value="">Health &amp; Medicine</option>
                <option value="">Science</option>
                <option value="">Social Sciences</option>
              </select>
            </div>
            &nbsp;&nbsp; &nbsp;
            <div className="search-cources">
              <form action="">
                <div className="d-flex">
                  &nbsp;&nbsp;
                  <input
                    type="text"
                    placeholder="Search Online Courses"
                    className="form-control w-auto "

                  />

                  <button className="btn btn-warning" style={{ backgroundColor: "#fe9100", color: "#fff", borderRadius: "1px" }}>
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              </form>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
          <div className=" collapse navbar-collapse show d-flex justify-content-evenly" id="navbarSupportedContent">
            <ul className="ms-5 navbar-nav mr-auto">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Courses +{" "}
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Counselors
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Teachers
                </a>
              </li>
            </ul>

            <div className="login-btns my-2 my-lg-0">
              <button
                type="submit"
                routerlink="/signup"
                className="btn btn-outline-primary my-2 my-sm-0"
                tabindex="0"
              >
                &nbsp;
                Sign Up
              </button>
              &nbsp;&nbsp;
              <button
                type="submit"
                routerlink="/login"
                className="btn btn-primary my-2 my-sm-0"
                tabindex="0"
              >
                Login
              </button>
            </div>
          </div>
        </nav>
      </div>
     
<hr/>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 d-flex justify-content-between">
            <FontAwesomeIcon icon={faAlignJustify} style={{color:"skyblue",border:"1px solid skyblue",fontSize:"30px",padding:"4px"}}/>
            {/* <img src={symbol} width="20px" height="20px"/> */}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <img src={img} alt="responsive image" style={{ width: "100%" }}></img>


          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {/* </div>
      </div> */}
          {/* <div className="container">
        <div className="row"> */}
          <div class="d-flex justify-content-around p-2">
            <div className="col-sm-8 p-0  ">
              <div class="card shadow" >
                <div class="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 >Running Courses</h5>
                    <h6 ><a href="" style={{ color: "#ff8b00" }}>View All</a></h6>
                  </div>

                  <div className="row">

                    <div className="col-sm-4 text-center">

                      <CircularProgress variant="determinate" value={45} />
                      <p>45%</p>
                      <p class="card-text" style={{ fontSize: "12px" }}>The Webdeveloper Bootcamp 2021</p>
                      {/* <p class="card-text">Bootcamp 2021</p> */}
                      <a href="#" class="card-link" style={{ color: "#ff8b00" }}>22-06-2021 | 10:00 AM</a>

                    </div>
                    <div className="col-sm-4 text-center">


                      <CircularProgress variant="determinate" value={45} />
                      <p>45%</p>

                      <p class="card-text" style={{ fontSize: "12px" }}>Angular The Complete Guide(2021-edition)</p>
                      <a href="#" class="card-link" style={{ color: "#ff8b00" }}>22-06-2021 | 10:00 AM</a>

                    </div>
                    <div className="col-sm-4 text-center ">

                      <CircularProgress variant="determinate" value={45} />
                      <p>45%</p>

                      <p class="card-text" style={{ fontSize: "12px" }}>Angular The Complete JavaScript Course 2021</p>
                      <a href="#" class="card-link" style={{ color: "#ff8b00" }}>22-06-2021 | 10:00 AM</a>
                    </div>

                  </div>




                </div>
              </div>
              <div className="row">
                <div className="col-md-6 w-100 mt-5">
                  <div className="d-flex justify-content-between">
                    <h6 >Post Counseling Session</h6>
                    <h6 ><a href="" style={{ color: "#ff8b00" }}  >View All</a></h6>

                  </div>
                  <div className="card ">

                    <table class="table ">
                      <thead >
                        <tr style={{ backgroundColor: "#81c6f7", paddingBottom: "10%" }} >

                          <th scope="col" style={{ color: "blue", fontSize: "12px" }}>Session</th>
                          <th scope="col" style={{ color: "blue", fontSize: "12px" }}>Start Date</th>
                          <th scope="col" style={{ color: "blue", fontSize: "12px" }}>End Date</th>
                        </tr>
                      </thead>
                      <tbody style={{ paddingBottom: "10%" }}>
                        <tr>

                          <td style={{ fontSize: "10px" }}>Counseling Session 1</td>
                          <td style={{ fontSize: "10px" }}>12-06-2021</td>
                          <td style={{ fontSize: "10px" }}>12-06-2021</td>
                        </tr>
                        <tr>

                          <td style={{ fontSize: "10px" }}>Counseling Session 1</td>
                          <td style={{ fontSize: "10px" }}>12-06-2021</td>
                          <td style={{ fontSize: "10px" }}>12-06-2021</td>
                        </tr>
                        <tr>

                          <td style={{ fontSize: "10px" }}>Counseling Session 1</td>
                          <td style={{ fontSize: "10px" }}>12-06-2021</td>
                          <td style={{ fontSize: "10px" }}>12-06-2021</td>
                        </tr>

                        <tr>

                          <td style={{ fontSize: "10px" }}>Counseling Session 1</td>
                          <td style={{ fontSize: "10px" }}>12-06-2021</td>
                          <td style={{ fontSize: "10px" }}>12-06-2021</td>
                        </tr>
                        <tr>

                          <td style={{ fontSize: "10px" }}>Counseling Session 1</td>
                          <td style={{ fontSize: "10px" }}>12-06-2021</td>
                          <td style={{ fontSize: "10px" }}>12-06-2021</td>
                        </tr>
                        <tr>

                          <td style={{ fontSize: "10px" }}>Counseling Session 1</td>
                          <td style={{ fontSize: "10px" }}>12-06-2021</td>
                          <td style={{ fontSize: "10px" }}>12-06-2021</td>
                        </tr>
                      </tbody>
                    </table>

                  </div>
                </div>
                <div className="col-md-6 w-100 mt-5">
                  <div className="d-flex justify-content-between">
                    <h6 >Past Courses</h6>
                    <h6 ><a href="" style={{ color: "#ff8b00" }}  >View All</a></h6>
                  </div>
                  <div className="card ">

                    <table class="table ">
                      <thead >
                        <tr style={{ backgroundColor: "#81c6f7", paddingBottom: "10%" }} >

                          <th scope="col" style={{ color: "blue", fontSize: "12px" }}>Session</th>
                          <th scope="col" style={{ color: "blue", fontSize: "12px" }}>Start Date</th>
                          <th scope="col" style={{ color: "blue", fontSize: "12px" }}>End Date</th>
                        </tr>
                      </thead>
                      <tbody style={{ paddingBottom: "10%" }}>
                        <tr>

                          <td style={{ fontSize: "10px" }}>Data Engineering</td>
                          <td style={{ fontSize: "10px" }}>12-06-2021</td>
                          <td style={{ fontSize: "10px" }}>12-06-2021</td>
                        </tr>
                        <tr>

                          <td style={{ fontSize: "10px" }}>Data Engineering</td>
                          <td style={{ fontSize: "10px" }}>12-06-2021</td>
                          <td style={{ fontSize: "10px" }}>12-06-2021</td>
                        </tr>
                        <tr>

                          <td style={{ fontSize: "10px" }}>Data Engineering</td>
                          <td style={{ fontSize: "10px" }}>12-06-2021</td>
                          <td style={{ fontSize: "10px" }}>12-06-2021</td>
                        </tr>

                        <tr>

                          <td style={{ fontSize: "10px" }}>Data Engineering</td>
                          <td style={{ fontSize: "10px" }}>12-06-2021</td>
                          <td style={{ fontSize: "10px" }}>12-06-2021</td>
                        </tr>
                        <tr>

                          <td style={{ fontSize: "10px" }}>Data Engineering</td>
                          <td style={{ fontSize: "10px" }}>12-06-2021</td>
                          <td style={{ fontSize: "10px" }}>12-06-2021</td>
                        </tr>
                        <tr>

                          <td style={{ fontSize: "10px" }}>Data Engineering</td>
                          <td style={{ fontSize: "10px" }}>12-06-2021</td>
                          <td style={{ fontSize: "10px" }}>12-06-2021</td>
                        </tr>
                      </tbody>
                    </table>

                  </div>


                </div>
              </div>
              <div className="col-12 m-0 p-0 mt-4">


                <div class="card shadow  " style={{ width: "100%" }}>
                  <div class="card-body">
                    <div className="d-flex justify-content-between">
                      <h5 >Certificate</h5>
                      <h6 ><a href="" style={{ color: "#ff8b00" }}>View All</a></h6>


                    </div>

                    <div className="row ">

                      <div className="col-sm-6 ">

                        <div className="d-flex">
                          <p class="card-text  pr-5" style={{ fontSize: "12px", fontWeight: "bold" }}>Data Engineer </p>
                          <FontAwesomeIcon icon={faFilePdf} style={{ color: "red" }} />
                        </div>

                        <p class="card-text" style={{ fontSize: "12px" }}>Issued On 06-06-2021 </p>
                      </div>

                      <div className="col-sm-6 ">

                        <div className="d-flex">
                          <p class="card-text  pr-5" style={{ fontSize: "12px", fontWeight: "bold" }}>Data Engineer </p>
                          <FontAwesomeIcon icon={faFilePdf} style={{ color: "red" }} />
                        </div>

                        <p class="card-text" style={{ fontSize: "12px" }}>Issued On 06-06-2021 </p>
                        <hr />
                      </div>

                      <div className="col-sm-6 ">

                        <div className="d-flex">
                          <p class="card-text  pr-5" style={{ fontSize: "12px", fontWeight: "bold" }}>Data Engineer </p>
                          <FontAwesomeIcon icon={faFilePdf} style={{ color: "red" }} />
                        </div>

                        <p class="card-text" style={{ fontSize: "12px" }}>Issued On 06-06-2021 </p>
                      </div>

                      <div className="col-sm-6 ">

                        <div className="d-flex">
                          <p class="card-text  pr-5" style={{ fontSize: "12px", fontWeight: "bold" }}>Data Engineer </p>
                          <FontAwesomeIcon icon={faFilePdf} style={{ color: "red" }} />
                        </div>

                        <p class="card-text" style={{ fontSize: "12px" }}>Issued On 06-06-2021 </p>
                      </div>
                      <hr />


                    </div>




                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4  w-auto shadow">
              <div className="col-sm-12 m-0 p-0">


                <div class="card" >
                  <div class="card-body p-2">
                    <div className="d-flex justify-content-between">
                      <h5 >Notification</h5>
                      <h6 ><a href="" style={{ color: "#ff8b00" }}  >View All</a></h6>
                    </div>

                    <div className="d-flex justify-content-between">
                      <img
                        src={logo1} className="rounded-circle" alt="avatar" style={{ borderRadius: "50%", width: "28px" }}></img>
                      <p className="m-2 w-auto" style={{ fontSize: "12px" }}><p><b>John Deo</b>&nbsp;&nbsp; | 2-06-2021</p>Lorem  consectetur adipiscing elit, sed do eiusmod
                      </p>

                    </div><hr />
                    <div className="d-flex justify-content-between">

                      <img src={logo1} className="rounded-circle" alt="avatar" style={{ borderRadius: "50%", width: "28px" }}></img>
                      <p className="m-2 w-auto" style={{ fontSize: "12px" }}><p><b>John Deo</b>&nbsp;&nbsp; | 2-06-2021</p>Lorem  consectetur adipiscing elit, sed do eiusmod
                      </p>

                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">

                      <img src={logo1} className="rounded-circle" style={{ borderRadius: "50%", width: "28px" }}></img>
                      <p className="m-2 w-auto" style={{ fontSize: "12px" }}><p><b>John Deo</b>&nbsp;&nbsp; | 2-06-2021</p>Lorem  consectetur adipiscing elit, sed do eiusmod
                      </p>

                    </div><hr />
                    <div className="d-flex justify-content-between">

                      <img src={logo1} className="rounded-circle" alt="avatar" style={{ borderRadius: "50%", width: "28px" }}></img>
                      <p className="m-2 w-auto" style={{ fontSize: "12px" }}><p><b>John Deo</b>&nbsp;&nbsp; | 2-06-2021</p>Lorem  consectetur adipiscing elit, sed do eiusmod
                      </p>

                    </div>

                  </div>
                </div>
              </div>
              <br />
              <div className="col-sm-12 ">
                <div className="d-flex justify-content-between">
                  <h5 >Resources</h5>
                  <h6 ><a href="" style={{ color: "#ff8b00" }}>View All</a></h6>
                </div>

                <div class="card shadow" >
                  <div class="card-body p-2">



                    <div className="d-flex justify-content-between" style={{ fontSize: "14px", backgroundColor: "skyblue" }}>

                      <p style={{ color: "blue" }}><b>Course <br />Name</b></p>

                      <p style={{ color: "blue" }}><b>Resources</b><br />(Last 2 Days)</p>
                    </div>
                    <div className="col-12 ">

                    <p class="card-text p-0 m-0 " style={{ fontSize: "15px" }}>2021 Complete Public Speaking  MasterClass For Every Occasion </p>
                      <FontAwesomeIcon icon={faFilePdf} style={{ color: "red" }} ></FontAwesomeIcon>
                        <p className="">abcd.pdf</p>
                    <div className="col-6 ">


                      {/* <div className="d-flex p-2 justify-content-between" style={{flexDirection:"column"}}> */}
       
                    </div>
                   
                    <hr />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <br />

      </div>
      <Cards/>
      <Footer/>
    
    </div>


  )
}

export default App
