import React from "react";
import { motion } from "framer-motion";
import Wrapper from "../wrappers/Contact";
import { BiSolidRightArrowAlt } from "react-icons/bi";
const Contact = () => {
  return (
    <Wrapper className="h-full flex-column">
      <div className="contact  ">
        <h2 className="header">
          Let's <span className="text-accent">connect.</span>
        </h2>
        <form className="form">
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input"
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="subject"
            className="input"
          />
          <textarea className="textarea" name="message" placeholder="message" />
          <button type="button" className="form-btn">
            Let's talk
            <BiSolidRightArrowAlt />
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Contact;
