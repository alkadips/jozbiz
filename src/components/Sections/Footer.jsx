import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../../assets/svg/Logo";
import './Footer.css'
export default function Footer() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="container-fluid px-5" style={{marginTop:"0px"}}>
      <div className=" row big-box" style={{ marginTop: "70px" }}>
          <div className="col-md-6">
            <div>Subscribe</div>
            <div className="to-get">To get weekly & monthly </div>
            <div className="to-get">news, Subscribe to our </div>
            <div className="to-get">newsletter. </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex mt-5">
              <input className="input-box"></input>
              <div className="subscribe">Subscribe</div>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "100px" }}>
          <div className="col-md-6">
            <img src="/logo.png"></img>
            <div className="address">Lorem ipsum dolor sit amet </div>
            <div className="address">consec elit sed eiusmod </div>
            <div className="address">tempor incididunt ut labore </div>
            <div className="address">etdolore magna aliqua.</div>

            <div className="address2">Address: 858 Lorem ipsum</div>
            <div className="address">tempor incididunt </div>
            <div className="address">Phone: +91 7698454647</div>
            <div className="address">Email: info@example.com</div>
          </div>
          <div className="col-md-2">
            <div className="home quik-link">Quick links</div>
            <div className="home mt-3">Home</div>
            <div className="home mt-3">Who we are</div>
            <div className="home mt-3">What we do</div>
            <div className="home mt-3">Get Involved</div>
            <div className="home mt-3">News & Events</div>
          </div>
          <div className="col-md-2">
            <div
              className="home fw-bold"
              style={{ fontSize: "20px", fontWeight: "bold" }}
            >
              Support
            </div>
            <div className="home mt-3">Contact Us</div>
            <div className= "home mt-3">Section 8</div>
            <div className="home mt-3">Section 80G</div>
            <div className="home mt-3">UN GCNI</div>
            <div className="home mt-3">NITI Aayog NGO Darpan</div>
          </div>
          <div className="col-md-2">
            <div className="home" style={{ fontSize: "20px", fontWeight: "bold" }}>Enquiry</div>
            <div className="home mt-3">abc@gmail.com</div>
            <div className="home mt-3">xyz@gmail.com</div>
          </div>
        </div>
        <div className="row footer mt-5">
          <div className="col-md-6">
            <div className="footer-text" style={{ color: "white", marginTop: "25px" }}>
              {" "}
              Copyright © 2022 All Rights Reserved
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-2"></div>
          <div className="col-md-2">
            <div className="d-flex" style={{justifyContent:"space-evenly",marginTop:"30px"}}>
              <div>
                <img style={{ width: "10px" }} src="/facebook.png"></img>
              </div>
              <div>
                <img style={{ width: "6px" }} src="/lin.png"></img>
              </div>{" "}
              <div>
                <img style={{ width: "15px" }} src="/tweter.png"></img>
              </div>{" "}
              <div>
                <img style={{ width: "16px" }} src="/instagram.png"></img>
              </div>
            </div>
          </div>
        </div>
   
        </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;