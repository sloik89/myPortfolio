import React from "react";
import Btn from "../assets/ProjectBtn.png";
import Wrapper from "../wrappers/ProjectBtn";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
const ProjectBtn = () => {
  return (
    <Wrapper className="home-btn">
      <Link to="/work" className="link">
        <img className="project-btn" src={Btn} alt="" />
        <HiArrowRight className="link-icon" />
      </Link>
    </Wrapper>
  );
};

export default ProjectBtn;
