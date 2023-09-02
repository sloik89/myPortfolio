import React from "react";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDrizzleLine,
  RiPinterestLine,
  RiBehanceLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
const Socials = () => {
  return (
    <div className="socials-container flex-end">
      <Link className="social-link">
        <RiYoutubeLine />
      </Link>
      <Link className="social-link">
        <RiInstagramLine />
      </Link>
      <Link className="social-link">
        <RiFacebookLine />
      </Link>
      <Link className="social-link">
        <RiDrizzleLine />
      </Link>
      <Link className="social-link">
        <RiPinterestLine />
      </Link>
      <Link className="social-link">
        <RiBehanceLine />
      </Link>
    </div>
  );
};

export default Socials;
