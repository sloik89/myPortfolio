import React from "react";
import { Link } from "react-router-dom";
import nav from "../utilis/nav";
const Nav = () => {
  return (
    <nav className="nav">
      {nav.map((item, idx) => {
        const { path, icon } = item;
        console.log(path, icon);
        return (
          <Link to={path} key={idx}>
            {" "}
            {icon}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
