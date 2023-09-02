import React from "react";
import { WorkSlider } from "../components";
import Wrapper from "../wrappers/Work";
const Work = () => {
  return (
    <Wrapper className="work">
      <div className="work-container">
        <div className="work-text">
          <h2 className="header-title">
            My work <span className="text-accent">.</span>{" "}
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            corporis repellendus, veritatis voluptatem temporibus facilis
            eveniet molestias vel harum a.
          </p>
        </div>
        <WorkSlider />
      </div>
    </Wrapper>
  );
};

export default Work;
