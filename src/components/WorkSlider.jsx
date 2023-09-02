import React, { useState, useEffect } from "react";
import Wrapper from "../wrappers/WorkSlider";
import { workGallery } from "../utilis/workGalley";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
const WorkSlider = () => {
  const [index, setIndex] = useState(4);
  const [gallery, setGallery] = useState(workGallery);
  const handleFillterBtn = (options, idx) => {
    setIndex(idx);
    if (options === "All") {
      setGallery(workGallery);
      return;
    }
    setGallery(workGallery.filter((item) => item.category === options));
  };
  console.log(gallery);
  return (
    <Wrapper className="work-slider">
      <div className="work-btn-container">
        {["UI/UX", "Web App", "Mobile App", "React", "All"].map((item, idx) => {
          return (
            <button
              type="button"
              key={idx}
              onClick={(e) => handleFillterBtn(e.target.textContent, idx)}
              className={`work-btn ${idx === index && "work-btn-active"}`}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="work-gallery">
        {gallery.map((item, idx) => {
          return (
            <div key={idx} className="work-item">
              <div className="work-item-img">
                <img src={item.url} alt="" />
              </div>
              <h3 className="item-info">{item.title}</h3>
              <p>{item.desc}</p>
              <div className="work-item-content">
                <a href="#">
                  <AiFillEye />
                </a>
                <a href="#">
                  <AiFillGithub />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default WorkSlider;
