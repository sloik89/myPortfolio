import React from "react";
import { ProjectBtn, ParticleContainer } from "../components";
import Wrapper from "../wrappers/Home";
import photo from "../assets/paint.png";
import person from "../assets/person2.png";
import { fadeIn } from "../utilis/variants";
import { motion } from "framer-motion";
import { useGlobalContext } from "../context/AppContext";
const Home = () => {
  const { language } = useGlobalContext();
  return (
    <Wrapper className="">
      <div className="home flex-container">
        <div className="text-container">
          {language === "english" ? (
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="header-title header"
            >
              Transforming Ideas <br />
              Into
              <span className="text-accent">Digital Reality</span>
            </motion.h1>
          ) : (
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="header-title header"
            >
              Zamieniam pomysły <br />w
              <span className="text-accent">Wirtualną rzeczywistość </span>
            </motion.h1>
          )}

          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="desc"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            officia.adipisicing elit. Blanditiis, officia.Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Blanditiis, officia.adipisicing
            elit. Blanditiis, officia.
          </motion.p>
          <motion.div
            variants={fadeIn("down", 0.9)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <ProjectBtn />
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("up", 0.9)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="img-container"
        >
          <img className="person" src={person} alt="" />
          <div
            style={{ backgroundImage: `url('${photo}')` }}
            className="bg-splash"
          ></div>
          <ParticleContainer />
        </motion.div>
      </div>
    </Wrapper>
  );
};

export default Home;
