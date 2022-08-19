import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Components
import Sidebar from "../Nav/Sidebar";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import './TopNavbar.css'
import Home from "../Sections/Home";
export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);


  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "80px",padding:"4px" }}>
        <NavInner className="container-fluid flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
            <div className="d-flex" >
           <div style={{background:"black",borderRadius:"50%",padding:"10px"}}> <img src='/U.png' style={{width:"12px",height:"10px"}}></img><img src="/B.png" style={{width:"17px",height:"10px",marginLeft:"-8px"}}></img></div>
           <div className="upbox"><img className="" src="/upbox.png"></img></div>
           
              </div>  
            </h1>
          </Link>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link className="skin" activeClass="active" style={{ padding: "10px 15px" }} to="/" spy={true} smooth={true} offset={-80}>
              THIS MONTH
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link className="skin" activeClass="active" style={{ padding: "10px 15px" }} to="/skin" spy={true} smooth={true} offset={-80}>
              SKIN
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link className="skin" activeClass="active" style={{ padding: "10px 15px" }} to="/hair" spy={true} smooth={true} offset={-80}>
              HAIR
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link className="skin" activeClass="active" style={{ padding: "10px 15px" }} to="/bath" spy={true} smooth={true} offset={-80}>
              BATH
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link className="skin" activeClass="active" style={{ padding: "10px 15px" }} to="/sale" spy={true} smooth={true} offset={-80}>
              SALE
              </Link>
            </li>
            <li className="semiBold font15 pointer flexCenter">
              <Link className="skin-login" activeClass="active"  to="/login" spy={true} smooth={true} offset={-80}>
              LOG IN 
              </Link>
            </li>
          </UlWrapper>
        
          
       
        </NavInner>
     
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;


