import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Wrapper from "../wrappers/ServicesSwiper";
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { serviceData } from "../utilis/serviceData";
import { FreeMode, Pagination } from "swiper/modules";
const ServicesSlider = () => {
  return (
    <Wrapper>
      <Swiper
        className="services-swiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
      >
        {serviceData.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div className="swiper-inner">
                <div className="swiper-icon">{item.icons}</div>
                <div>
                  <div className="swiper-title">{item.title}</div>
                  <p>{item.desc}</p>
                  <div className="swiper-arrow">
                    <RxArrowTopRight />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

export default ServicesSlider;
