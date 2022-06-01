import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/9.jpg";
import HeaderSocials from "./headerSocials";
import "./heder"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello.. I'm</h5>

        <h1>
          <a style={{ fontSize:"25px"}} 
            href=""
            class="typewrite"
            data-period="2000"
            data-type='[ "Lakshitha Perera(Eric)", "Front-End Developer" ]'
          >
            <span class="wrap"></span>
          </a>
        </h1>

        

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Me" />
        </div>

        <div className="scroll__down arrow" id="#contact">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
