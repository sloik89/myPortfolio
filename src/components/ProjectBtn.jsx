import React from "react";
import Btn from "../assets/ProjectBtn.png";
import BtnDark from "../assets/ProjectBtn-dark.png";
import Wrapper from "../wrappers/ProjectBtn";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/AppContext";
const ProjectBtn = () => {
  const { darkTheme } = useGlobalContext();
  return (
    <Wrapper className="home-btn">
      <Link to="/work" className="link">
        <img className="project-btn" src={darkTheme ? Btn : BtnDark} alt="" />
        <HiArrowRight className="link-icon" />
      </Link>
    </Wrapper>
  );
};

export default ProjectBtn;
