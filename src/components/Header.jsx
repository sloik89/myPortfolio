import React from "react";
import Wrapper from "../wrappers/Header";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";
import { Socials } from "./";

const Header = () => {
  return (
    <Wrapper className="flex-column">
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
      <div className="socials">
        <Socials />
      </div>
    </Wrapper>
  );
};

export default Header;
