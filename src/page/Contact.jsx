import React from "react";
import { motion } from "framer-motion";
import { useGlobalContext } from "../context/AppContext";
import Wrapper from "../wrappers/Contact";
import { BiSolidRightArrowAlt } from "react-icons/bi";
const Contact = () => {
  const { language } = useGlobalContext();
  return (
    <Wrapper className="h-full flex-column">
      <div className="contact  ">
        {language === "english" ? (
          <h2 className="header">
            Let's <span className="text-accent">connect.</span>
          </h2>
        ) : (
          <h2 className="header">
            Skontaktuj <span className="text-accent">się</span>
          </h2>
        )}

        <form className="form">
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder={`${language === "english" ? "name" : "nazwa"}`}
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
            placeholder={`${language === "english" ? "subject" : "temat"}`}
            className="input"
          />
          <textarea
            className="textarea"
            name="message"
            placeholder={`${language === "english" ? "message" : "wiadomość"}`}
          />
          <button type="button" className="form-btn">
            {language === "english" ? "Let's talk" : "Pogadajmy"}

            <BiSolidRightArrowAlt />
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Contact;
