import React from "react";
import Wrapper from "../wrappers/Header";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";
import { Socials } from "./";
import { useGlobalContext } from "../context/AppContext";
const Header = () => {
  const { language, switchLang } = useGlobalContext();
  console.log(language);
  return (
    <Wrapper className="flex-column">
      <div className="logo-btn">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
        <button
          onClick={switchLang}
          className={` ${
            language === "english"
              ? "language-switcher active-eng"
              : "language-switcher active-pl"
          } `}
        >
          <span>EN </span>/ <span>PL</span>
        </button>
      </div>
      <div className="socials">
        <Socials />
      </div>
    </Wrapper>
  );
};

export default Header;
