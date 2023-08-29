import React, { useState } from "react";
import Wrapper from "../wrappers/About.jsx";
import { Circle } from "../components/";
import { aboutData } from "../utilis/aboutData.jsx";
import avatar from "../assets/person2.png";
const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <Wrapper className="about">
      <Circle />
      <div className="about-info">
        <div className="about-text-contaniner">
          <h2>
            Captivating <span>stories</span> birth magnificent design.
          </h2>
          <p>
            10 years age, I began freelancing as a developer. SInce then, I've
            done remote work for agencies, consulted for startups, and
            collaborated on digital products for business and consumer use.
          </p>
        </div>
      </div>
      <div className="about-container">
        <div className="about-nav">
          {aboutData.map((item, idx) => {
            return (
              <div
                onClick={() => setIndex(idx)}
                key={item.id}
                className={`about-item ${index === idx && "about-item-active"}`}
              >
                <button>{item.title}</button>
              </div>
            );
          })}
        </div>

        <div>
          {aboutData[index].info.map((item, idx) => {
            return (
              <div className="about-text" key={idx}>
                <h4 className="about-title">{item.title} </h4>
                <div className="about-icons">
                  {item.icons?.map((item, idx) => {
                    return (
                      <div key={idx} className="icon">
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="img-about">
        <img src={avatar} alt="" />
      </div>
    </Wrapper>
  );
};

export default About;
