import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "../styles/swiper.css";

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
    </div>
  );
}
