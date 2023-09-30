import React from "react";
import Wrapper from "../wrappers/Testimonials";
import { TestimonialsSlider } from "../components/";
const Testimonials = () => {
  return (
    <Wrapper className="testimonials h-full flex-column">
      <h2 className="header">
        What clients <span className="text-accent">say.</span>{" "}
      </h2>
      <TestimonialsSlider />
    </Wrapper>
  );
};

export default Testimonials;
