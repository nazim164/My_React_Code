import React from "react";
import "./App.css"
import logo from "./logo.png";


function Footer() {
  return (
    <div>
      <div className="footer-part">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-box">
                <h5>Learning Consider it done.</h5>
                <ul className="p-0">
                  <li>
                    <a href="#"> About </a>
                  </li>
                  <li>
                    <a href="#"> Careers </a>
                  </li>
                  <li>
                    <a href="#"> Press </a>
                  </li>
                </ul>
                <div className="social-media">
                  <ul className="p-0">
                    <li>
                      <a href="#" target="_blank">
                        <i className="fab fa-facebook-f" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-box">
                <h5>Legal</h5>
                <ul className="p-0">
                  <li>
                    <a href="#"> Terms of Service &amp; Honor Code </a>
                  </li>
                  <li>
                    <a href="#"> Privacy Policy </a>
                  </li>
                  <li>
                    <a href="#"> Accessibility Policy </a>
                  </li>
                  <li>
                    <a href="#"> Trademark Policy </a>
                  </li>
                  <li>
                    <a href="#"> Sitemap </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-box">
                <h5>Support</h5>
                <ul className="p-0">
                  <li>
                    <a href="#"> Help </a>
                  </li>
                  <li>
                    <a href="#"> Safety </a>
                  </li>
                  <li>
                    <a href="#"> COVID-19 Info </a>
                  </li>
                  <li>
                    <a href="#"> Terms of Use </a>
                  </li>
                  <li>
                    <a href="#"> Privacy Policy </a>
                  </li>
                  <li>
                    <a href="#"> CA Privacy Notice </a>
                  </li>
                  <li>
                    <a href="#"> Do Not Sell My Info </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-box">
                <h5>Newsletter</h5>
                <form action="">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                  />
                  <button style={{backgroundColor:"#ff9700"}} className="btn btn-warning mt-3">SUBMIT</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div  className="copy-right ">
        <div  className="container  ">
          <div  className="row ">
            <div  className="col-md-6 ">
              <p >
                Copyright © 2021 . All rights Reserved.
              </p>
            </div>
            <div  className="col-md-6 text-end">
              <img
                
                src={logo}
                alt=""
                width="80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
