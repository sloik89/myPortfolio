import React from "react";
import bolt from "../assets/bolt.png";
import Wrapper from "../wrappers/Services";
import { ServicesSlider } from "../components";
const Services = () => {
  return (
    <Wrapper className="services h-full flex-center">
      <div className="services-container">
        <div className="services-text">
          <h2 className="header-title">
            My Services <span className="text-accent">.</span>{" "}
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            corporis repellendus, veritatis voluptatem temporibus facilis
            eveniet molestias vel harum a.
          </p>
        </div>
        <ServicesSlider />
      </div>
      <div className="bolt-img">
        <img src={bolt} alt="" />
      </div>
    </Wrapper>
  );
};

export default Services;
