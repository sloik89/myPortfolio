import React from "react";
import img from "../assets/splash.png";
const TopLeftImg = () => {
  return (
    <div
      style={{ backgroundImage: `url('${img}')` }}
      className="top-left-img"
    ></div>
  );
};

export default TopLeftImg;
