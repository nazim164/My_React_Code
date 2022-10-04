import React from "react";
// import lappy from "../img/lappy.jpg";
import meet from "./meet.jpg";
import data1 from "./data1.jpg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// import rating from "../img/rating-4.png";

function Rcard() {
  return (
    <div className="mb-5">
      {/* <div className="row d-flex justify-content-between p-2 mb-5">
            <div className="col-sm-6">
            <h3>Popular courses.</h3>
                
            </div>
            <div className="col-sm-6 ">
              
            <ul className=" d-flex justify-content-between" style={{fontSize:"1.5rem"}}>
                <li className="list">Data Science</li>
                <li className="list ms-4">Computer Science</li>
                <li className="list ms-4">Business</li>
                <li className="list ms-4">Healthcare</li>
                <li className="list ms-4">Design</li>
            </ul>
            </div>
        </div>
      <div class="row row-cols-1 row-cols-md-4 g-4 mb-5 p-2 ">
        <div class="col">
          <div class="card shadow ">
            <img src={lappy} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Data Engineer</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow">
            <img src={lappy} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Data scientist</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow">
            <img src={lappy} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Data Structure and Ai</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow">
            <img src={lappy} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Programming for DATA</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
       
      </div> */}
  
     
        
         <h2 className="text-center">Other Courses That Might Interest You</h2> 
       

      <div class="container-fluid mb-5">
        <div class="row">
          <div class="col-sm-12">
            <div id="inam" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-12 col-lg-3 mt-2">
                        <div
                          class="card shadow "
                          // style={{ width: "300px", margin: "auto" }}
                        >
                          <img src={data1} class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title" >Counsleing Session 10</h5>
                            <FontAwesomeIcon icon={faStar} style={{color:"orange"}}/>
                            <span class="fa fa-star checked"></span>
                            <FontAwesomeIcon icon={faStar} style={{color:"orange"}}/>
                            <span class="fa fa-star checked"></span>
                            <FontAwesomeIcon icon={faStar} style={{color:"orange"}}/>
                            <span class="fa fa-star checked"></span>
                            <FontAwesomeIcon icon={faStar} style={{color:"orange"}}/>
                            <span class="fa fa-star checked"></span>
                            <FontAwesomeIcon icon={faStar} /><span style={{color:"orange"}}>4.6(1234)</span>
                          
                            <span class="fa fa-star"></span>
                            <h3 class="estimate-time">
                         
                              <span className="span">Lorem  consectetur adipiscing elit </span>
                            </h3>
                            <h2  class="course-price">₹455</h2>  <hr/>
                            <span>Created By</span>
                            <p>John Deo</p>
                          
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-3 mt-2">
                        <div
                          class="card shadow"
                          // style={{ width: "300px" }}
                        >
                          <img src={meet} class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Data Engineer</h5>
                            <FontAwesomeIcon icon={faStar} style={{color:"orange"}}/>
                            <span class="fa fa-star checked"></span>
                            <FontAwesomeIcon icon={faStar} style={{color:"orange"}}/>
                            <span class="fa fa-star checked"></span>
                            <FontAwesomeIcon icon={faStar} style={{color:"orange"}}/>
                            <span class="fa fa-star checked"></span>
                            <FontAwesomeIcon icon={faStar} style={{color:"orange"}}/>
                            <span class="fa fa-star checked"></span>
                            <FontAwesomeIcon icon={faStar} /><span style={{color:"orange"}}>4.6(1234)</span>
                          
                            <span class="fa fa-star"></span>
                            <h3 class="estimate-time">
                             
                              <span>5 months at 5-10 hrs/week</span>
                            </h3>
                            <h2  class="course-price">₹455</h2>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-3 mt-2">
                        <div
                          class="card shadow"
                          // style={{ width: "300px" }}
                        >
                          <img src={data1} class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Counseling Engineer</h5>
                            <FontAwesomeIcon icon={faStar} style={{color:"orange"}}/>
                            <span class="fa fa-star checked"></span>
                            <FontAwesomeIcon icon={faStar} style={{color:"orange"}}/>
                            <span class="fa fa-star checked"></span>
                            <FontAwesomeIcon icon={faStar} style={{color:"orange"}}/>
                            <span class="fa fa-star checked"></span>
                            <FontAwesomeIcon icon={faStar} style={{color:"orange"}}/>
                            <span class="fa fa-star checked"></span>
                            <FontAwesomeIcon icon={faStar} /><span style={{color:"orange"}}>4.6(1234)</span>
                          
                            <span class="fa fa-star"></span>
                           <h3 class="estimate-time">
                          
                              <span className="span">Lorem  consectetur adipiscing elit </span>
                            </h3>
                            <h2  class="course-price">₹455</h2>
                            <hr/>
                            <span>Created By</span>
                            <p>John Deo</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-3 mt-2">
                        <div
                          class="card shadow"
                          // style={{ width: "300px" }}
                        >
                          <img src={meet} class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Data Engineer</h5>
                            <FontAwesomeIcon icon={faStar} style={{color:"orange"}}/>
                            <span class="fa fa-star checked"></span>
                            <FontAwesomeIcon icon={faStar} style={{color:"orange"}}/>
                            <span class="fa fa-star checked"></span>
                            <FontAwesomeIcon icon={faStar} style={{color:"orange"}}/>
                            <span class="fa fa-star checked"></span>
                            <FontAwesomeIcon icon={faStar} style={{color:"orange"}}/>
                            <span class="fa fa-star checked"></span>
                            <FontAwesomeIcon icon={faStar} /><span style={{color:"orange"}}>4.6(1234)</span>
                          
                            <span class="fa fa-star"></span>
                            <h3 class="estimate-time">
                             
                              <span>5 months at 5-10 hrs/week</span>
                            </h3>
                            <h2  class="course-price">₹455</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-12 col-lg-3 mt-2">
                        <div
                          class="card shadow "
                          // style={{ width: "300px", margin: "auto" }}
                        >
                          <img src={data1} class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Data Engineer</h5>

                            <img
                              _ngcontent-vno-c8=""
                              src={meet}
                              alt=""
                              width="87"
                              height="15"
                            />
                            <h3 class="estimate-time">
                              Estimated Time{" "}
                              <span>5 months at 5-10 hrs/week</span>
                            </h3>
                            <h2  class="course-price">₹455</h2>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-3 mt-2">
                        <div
                          class="card shadow"
                          //  style={{ width: "300px" }}
                        >
                          <img src={data1} class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Data Structure and Ai</h5>
                            <img
                              _ngcontent-vno-c8=""
                              src={meet}
                              alt=""
                              width="87"
                              height="15"
                            />
                            <h3 class="estimate-time">
                              Estimated Time{" "}
                              <span>5 months at 5-10 hrs/week</span>
                            </h3>
                            <h2  class="course-price">₹455</h2>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-3 mt-2">
                        <div
                          class="card shadow"
                          // style={{ width: "300px" }}
                        >
                          <img src={data1} class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Data scientist</h5>
                            <img
                              _ngcontent-vno-c8=""
                              src={meet}
                              alt=""
                              width="87"
                              height="15"
                            />
                            <h3 class="estimate-time">
                              Estimated Time{" "}
                              <span>5 months at 5-10 hrs/week</span>
                            </h3>
                            <h2  class="course-price">₹455</h2>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-3 mt-2">
                        <div
                          class="card shadow"
                          //  style={{ width: "300px" }}
                        >
                          <img src={data1} class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Data scientist</h5>
                            <img
                              _ngcontent-vno-c8=""
                              src={meet}
                              alt=""
                              width="87"
                              height="15"
                            />
                            <h3 class="estimate-time">
                              Estimated Time{" "}
                              <span>5 months at 5-10 hrs/week</span>
                            </h3>
                            <h2  class="course-price">₹455</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
            
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Rcard;

