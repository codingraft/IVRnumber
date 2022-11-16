import React from "react";
import "./style.css";
import Logo from "../images/ivrlogo.gif";
import Whatsapp from "../images/whatsapp.png";
import Phone from "../images/telephone.png";

const url = "https://api.whatsapp.com/send?phone=919508308432&text=Hi";
const Header = ({ showSide, setShowSide }) => {
  function openSlider() {
    setShowSide((prev) => !prev);
  }
  return (
    <header className="header">
      <div className="whatsapp">
        <a target="_blank" href={url} rel="noreferrer">
          <img src={Whatsapp} alt="" />
        </a>
      </div>
      <div className="phone">
        <a href="tel: +91 9508308432">
          <img src={Phone} alt="" />
        </a>
      </div>

      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="header_left">
        <ul className="nav_links">
          <li>
            <a href="#about">What is IVR?</a>
          </li>
          <li>
            <a href="#features">IVR Featues</a>
          </li>
          <li>
            <a href="#benifits">IVR Benefits</a>
          </li>
          <li>
            <a href="#plan">Plan And Pricing</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li className="mobile_bar" onClick={openSlider}>
            <span></span>
            <span></span>
            <span></span>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

// dj-forma
// arial
