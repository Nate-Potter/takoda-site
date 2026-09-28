import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import takoda1 from "../assets/images/takoda1.jpeg";
import takoda2 from "../assets/images/takoda2.jpeg";
import takoda3 from "../assets/images/takoda3.jpeg";
import takoda4 from "../assets/images/takoda4.jpeg";

const slidesData = [
  {
    id: 1,
    image: takoda1,
    caption: "Takoda",
  },
  {
    id: 2,
    image: takoda2,
    caption: "Takoda",
  },
  {
    id: 3,
    image: takoda3,
    caption: "Takoda",
  },
  {
    id: 4,
    image: takoda4,
    caption: "Takoda",
  },
];

export function HeroSwiper() {
  return (
    <div className="hero-swiper">
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
