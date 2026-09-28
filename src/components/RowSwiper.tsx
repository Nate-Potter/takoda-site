import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import takoda6 from "../assets/images/takoda6.jpeg";
import takoda7 from "../assets/images/takoda7.jpeg";
import takoda8 from "../assets/images/takoda8.jpeg";
import takoda9 from "../assets/images/takoda9.jpeg";

const slidesData = [
  {
    id: 1,
    image: takoda6,
    caption: "Takoda",
  },
  {
    id: 3,
    image: takoda7,
    caption: "Takoda",
  },
  {
    id: 4,
    image: takoda8,
    caption: "Takoda",
  },
  {
    id: 4,
    image: takoda9,
    caption: "Takoda",
  },
];

export function RowSwiper() {
  return (
    <div className="row-swiper">
      <Swiper
        modules={[EffectFade, Pagination, Autoplay]}
        effect="fade"
        slidesPerView={1}
        spaceBetween={10}
        loop
        grabCursor
        centeredSlides
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        }}
        className="menu-swiper__slider">
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.image} alt={slide.caption} className="swiper-img" />
          </SwiperSlide>
        ))}

        <div className="slider-controller">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}
