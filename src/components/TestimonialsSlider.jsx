import React from "react";
import Wrapper from "../wrappers/TestimonialsSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { testimonialsData } from "../utilis/testimonialsData";
import { FreeMode, Pagination } from "swiper/modules";
const TestimonialsSlider = () => {
  return (
    <Wrapper>
      <Swiper
        className="services-swiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
      >
        {testimonialsData.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div className="swiper-inner flex-column">
                <img src={item.img} alt="" className="swiper-img" />

                <p>{item.name}</p>
                <p>{item.postition}</p>
                <span>{<FaQuoteLeft />}</span>
                <p>{item.desc}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

export default TestimonialsSlider;
