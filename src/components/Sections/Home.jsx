import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import HeaderImage from "../../assets/img/header-img.png";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import "./Home.css";
import TopNavbar from "../Nav/TopNavbar";
import Footer from "./Footer";
export default function Home() {
  return (
    <div className="container-fluid">
      <div
        className="row mt-5 mobile-device"
        style={{ background: " #F5F8FF" }}
      >
        <div className="col-md-4 col-xs-12 col-lg-4 col-sm-4">
          <div className="look1">Look good without </div>
          <div className="look2">leaving your house.</div>
          <div className="lorem">
            Upbox is the easiest way to look your best without
          </div>
          <div className="lorem">
            {" "}
            having to hunt for the perfect makeup combination.
          </div>
          <div className="lorem">
            {" "}
            Our stylists curate the latest trends and send them
          </div>
          <div className="lorem">directly to your door every month.</div>
          <div className="signup">SIGN UP </div>
        </div>
        <div className=" col-md-8 col-xs-12 col-lg-8 col-sm-8 d-flex">
          <img className="main-header-img" src="/BOX.png"></img>
        </div>
      </div>
      <div className="pic-plan mt-5">Pick your plan</div>
      <div className="bottom-border"></div>
      <div className="row mt-5 px-5">
        <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12">
          <div className="plan1">
            <div className="monthlly">Monthly</div>
            <div className="dowler-month">$18/mo</div>
            <div className="find-your-box">FIND YOUR BOX</div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12">
          <div className="plan2">
            <div className="monthlly">Yearly</div>
            <div className="dowler-month">$15/mo</div>
            <div className="find-your-box">FIND YOUR BOX</div>
          </div>
        </div>
      </div>
      <div className="small-div mt-5">
        Your plan auto-renews at the end of 30 days from the 1st day you
        signed-up.
      </div>
      <div className="how-its-works mt-5">How it works?</div>
      <div className="row px-5 mt-5">
        <div className="col-md-2"></div>
        <div className="col-md-2">
          <div>
            <img src="/how1.png"></img>
          </div>
        </div>
        <div className="col-md-2"></div>

        <div className="col-md-6">
          <div className="setup">Setup your profile &</div>
          <div className="setup">preferences</div>
          <div className="once mt-3">
            Once you create an account, you can start to
          </div>
          <div className="once">
            {" "}
            tell us your likes and dislikes so we can tailor
          </div>
          <div className="once"> the experience just for you.</div>
          <div>
            <img src="/box2 1.png" style={{ width: "100%" }}></img>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7"></div>
        <div className="col-md-5">
          <div className="review"> Review your </div>
          <div className="review">custom box</div>
          <div className="once mt-3">
            Once we get to know you, we will show you the
          </div>
          <div className="once"> box we’ve crafted. This is your chance to</div>
          <div className="once">
            {" "}
            approve it before we ship it to your house.
          </div>
        </div>
      </div>
      <div className="row px-5 mt-5">
        <div className="col-md-2"></div>
        <div className="col-md-2">
          <div>
            <img src="/meck.png"></img>
          </div>
        </div>
        <div className="col-md-2"></div>

        <div className="col-md-6">
          <div className="review">Try it on at home</div>
          <div className="once mt-3">
            Your box will arrive within 3-5 days (usually sooner){" "}
          </div>
          <div className="once">
            and you get the joy to unbox your Upbox. Try it all on
          </div>
          <div className="once">
            {" "}
            and send back whatever you’re not in love with.
          </div>
        </div>
      </div>
      <div className="try-it-for ">TRY IT FOR YOURSELF </div>
     <div className="wrapper-box-meckeup" style={{background:"#F5F8FF",height:"910px"}}>
      <div className="social-post mt-5">Social Posts</div>

      <div className="d-flex meckup-card">
        <div className="">
          <img src="/img1.png" style={{width:"350px"}}></img>\
          <div className="how-to-rok mt-3">How to rock the lip look</div>
          <div className="how-to-rok"> that turns heads</div>
        </div>
        <div className="">
          <img src="/img2.png" style={{marginLeft:"15px",width:"350px"}}></img>
          <div className="how-to-rok1 mt-3">Find the perfect shade</div>
          <div className="how-to-rok1">for the season</div>
           
        </div>
        <div className="">
          <img src="/img3.png" style={{marginLeft:"16px",width:"350px"}}></img>
          <div className="how-to-rok1 mt-3">The 5 eye shadow</div>
          <div className="how-to-rok1"> secrets you never knew</div>
           
        </div>
        <div className="">
          <img src="/img4.png" style={{marginLeft:"16px",width:"350px"}}></img>
          <div className="how-to-rok1 mt-3">The pro-tips for at home</div>
          <div className="how-to-rok1">hair dying</div>
           
        </div>
      </div>
      <div className="follow mt-5">FOLLOW US ON INSTAGRAM</div>
      </div>
      <div className="footer-section">
      <div className="d-flex" >
           <div style={{background:"black",borderRadius:"50%",padding:"10px"}}> <img src='/U.png' style={{width:"12px",height:"10px"}}></img><img src="/B.png" style={{width:"17px",height:"10px",marginLeft:"-8px"}}></img></div>
           <div className="upbox"><img className="" src="/upbox.png"></img></div>
         
           {/* <div>
            <img src="/tw.png"></img>
           </div>
           <div>
            <img src="/tw.png"></img>
           </div> <div>
            <img src="/tw.png"></img>
           </div> <div>
            <img src="/tw.png"></img>
           </div>
            */}
              </div>  
              <div className="row mt-5 d-flex">
                <div className="col-md-3">
                  <div className="upbox-footer">UPBOX</div>
                  <div className="upbox-footer-sub mt-3">Upbox Bag</div>
                  <div className="upbox-footer-sub mt-3">Upbox Box Platinum</div>
                  <div className="upbox-footer-sub mt-3">Upbox Box VIP</div>
                  <div className="upbox-footer-sub mt-3">Deals</div>
                  <div className="upbox-footer-sub mt-3">Seasonal Items</div>
                  <div className="upbox-footer-sub mt-3">Upbox Promise</div>
                </div>
                <div className="col-md-3">
                <div className="upbox-footer">Find Us On</div>
                  <div className="upbox-footer-sub mt-3">Instagram</div>
                  <div className="upbox-footer-sub mt-3">Facebook</div>
                  <div className="upbox-footer-sub mt-3">TikTok</div>
                  <div className="upbox-footer-sub mt-3">SnapChat</div>
                  <div className="upbox-footer-sub mt-3">Twitter</div>
                                 </div>
                <div className="col-md-3">
                <div className="upbox-footer">Product</div>
                  <div className="upbox-footer-sub mt-3">Get the App</div>
                  <div className="upbox-footer-sub mt-3">Loyalty Program</div>
                  <div className="upbox-footer-sub mt-3">Affiliates</div>
                  <div className="upbox-footer-sub mt-3">Press</div>
                </div>
                <div className="col-md-3">
                <div className="upbox-footer">Help</div>
                  <div className="upbox-footer-sub mt-3">Returns</div>
                  <div className="upbox-footer-sub mt-3">FAQ</div>
                  <div className="upbox-footer-sub mt-3">Contact</div>
                  <div className="upbox-footer-sub mt-3">Community</div>
                  <div className="upbox-footer-sub mt-3">Videos</div>

                </div>

              </div>
              <div className="border-bottom-style mt-5">
                <div className="d-flex" style={{justifyContent:"space-around"}}>
                  <div>© 2020 Quest AI. Upbox is a Sample Project and open source design project free for personal and commercial use.</div>
              <div>Terms</div>
              <div>Privacy Policy</div>
              </div>

              </div>
      </div>
    </div>
  );
}
