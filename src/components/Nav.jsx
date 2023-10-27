import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import nav from "../utilis/nav";
import Wrapper from "../wrappers/Nav";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../context/AppContext";
const Nav = () => {
  const location = useLocation();
  const [isDisabled, setIsDisabled] = useState(true);
  const { setDarkTheme, darkTheme } = useGlobalContext();
  useEffect(() => {
    console.log("first");
    // time to change block links
    let interval;
    if (isDisabled) {
      interval = setTimeout(() => {
        setIsDisabled(false);
      }, 900);
    }
    return () => {
      clearInterval(interval);
    };
  }, [location.pathname]);
  return (
    <Wrapper className="nav">
      {nav.map((item, idx) => {
        const { path, icon, name } = item;

        return (
          <Link
            className={`flex-center ${
              location.pathname === path ? "text-accent" : ""
            } ${isDisabled && "disabled"}`}
            to={path}
            key={idx}
          >
            {" "}
            {icon}
            <div className="tooltip">
              <p>{item.name}</p>
              <div className="triangle"></div>
            </div>
          </Link>
        );
      })}
      <button className="flex-center theme-btn" onClick={setDarkTheme}>
        {darkTheme ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
    </Wrapper>
  );
};

export default Nav;
