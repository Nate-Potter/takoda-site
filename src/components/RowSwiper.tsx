import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "../styles/swiper.css";

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
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
      slidesPerView={1}
      loop
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      speed={500}
      className="swiper-container">
      {/* Mapping the slide and index (number for even/odd to zoom in/out) */}
      {slidesData.map((slide, index) => (
        <SwiperSlide key={slide.id}>
          <img
            src={slide.image}
            alt={slide.caption}
            className={`swiper-img ${index % 2 === 0 ? "zoom-in" : "zoom-out"}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
