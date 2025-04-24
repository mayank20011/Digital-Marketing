"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ServiceSlideData } from "@/Data/Services";
import { Autoplay } from "swiper/modules";

const InfiniteSlide = () => {
  return (
    <div className="overflow-hidden w-full flex justify-center items-center">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={15000}
        slidesPerView="auto"
        spaceBetween={60}
        allowTouchMove={false}
        freeMode={true}
        // freeModeMomentum={false}
        grabCursor={false}
        className="relative bg-orange-300"
      >
        {ServiceSlideData.map((data, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center !w-auto"
          >
            <h1 className="text-center text-[15vw] sm:text-[10vw] md:[7vw] font-bold py-[10px] text-nowrap drop-shadow-[2px_7px_1px_white]">
              {data}
            </h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InfiniteSlide;
