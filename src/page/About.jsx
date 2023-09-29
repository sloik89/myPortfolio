import React, { useState } from "react";
import Wrapper from "../wrappers/About.jsx";
import { Circle } from "../components/";
import { aboutData } from "../utilis/aboutData.jsx";
import avatar from "../assets/person2.png";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { fadeIn } from "../utilis/variants.jsx";
import { useGlobalContext } from "../context/AppContext";
const About = () => {
  const { language } = useGlobalContext();
  const [index, setIndex] = useState(0);
  return (
    <Wrapper className="about">
      <Circle />
      <div className="about-info">
        <div className="about-text-contaniner">
          {language === "english" ? (
            <h2 className="header">
              Captivating <span>stories</span> birth magnificent design.
            </h2>
          ) : (
            <h2 className="header">
              Zachycające <span>historie</span> rodzą niesamowite projekty.
            </h2>
          )}

          <p className="desc">
            {language === "english"
              ? "10 years ago, I began freelancing as a developer. SInce then, I ve done remote work for agencies, consulted for startups, and collaborated on digital products for business and consumer use."
              : "10 lat temu, zaczynałem freelance jako developer. Od tamtego czasu, pracowałem zdalnie dla agencji, byłem konsultantem dla startupów oraz doradzałęm w sprawie produktów cyfrowych "}
          </p>
        </div>
        <div className="about-counters">
          <div className="count">
            <CountUp start={0} end={10} duration={5} delay={1.5} /> +
            <p>Years of expirience</p>
          </div>
          <div className="count">
            <CountUp start={0} end={231} duration={5} delay={1.5} /> +
            <p>Satisfied Clients</p>
          </div>
          <div className="count">
            <CountUp start={0} end={601} duration={5} delay={1.5} /> +
            <p>Finished Projects</p>
          </div>
          <div className="count">
            <CountUp start={0} end={7} duration={5} delay={1.5} /> +
            <p>
              {language === "english" ? "Wining Awards" : "Wygrane nagrody"}
            </p>
          </div>
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
      <motion.div
        variants={fadeIn("right", 0.9)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="img-about"
      >
        <img src={avatar} alt="" />
      </motion.div>
    </Wrapper>
  );
};

export default About;
