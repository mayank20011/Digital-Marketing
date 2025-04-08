"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState } from "react";

const ShowcaseSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full">
      <Swiper
        autoplay={{ delay: 5000 }}
        modules={[Autoplay]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="w-full bg-slate-100 md:rounded-b-[40px] md:aspect-[16/6] aspect-[16/24] border-b-2 border-b-slate-200"
      >
        <SwiperSlide className="relative aspect-auto">
          <img
            src="/s2d.png"
            alt="cow Heard"
            className="w-full h-full cursor-grab hidden md:block brightness-100"
            loading="lazy"
          />
          <img
            src="/s2m.png"
            alt="Cow Portrait"
            className="w-full h-full cursor-grab md:hidden brightness-100"
          />
        </SwiperSlide>

        <SwiperSlide className="relative aspect-auto">
          <img
            src="/s1d.png"
            alt="cow Heard Grazing"
            className="w-full h-full cursor-grab hidden md:block brightness-100"
            loading="lazy"
          />
          <img
            src="/s1m.png"
            alt="Cow Looking"
            className="w-full h-full cursor-grab md:hidden brightness-100"
            loading="lazy"
          />
        </SwiperSlide>
      </Swiper>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-40">
        <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all ${activeIndex === 0 ? "bg-green-400 border-2 border-white" : "bg-white border-2 border-green-400"}`}></div>
        <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all ${activeIndex === 1 ? "bg-green-400 border-2 border-white" : "bg-white border-2 border-green-400"}`}></div>
      </div>
    </div>
  );
};

export default ShowcaseSwiper;