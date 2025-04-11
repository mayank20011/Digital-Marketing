"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
const WhyUsSlide = () => {

  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: true }}
        className="w-full"
        wrapperClass="flex items-center pb-6"
      >
        <SwiperSlide>
          <div className="w-full flex items-center justify-center">
            <Image
              src="/whyUsSlide1.webp"
              alt="Client1 Logo"
              width={150}
              height={150}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/whyUsSlide2.webp"
            alt="Client2 Logo"
            width={150}
            height={150}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/whyUsSlide3.png"
            alt="Client3 Logo"
            width={150}
            height={150}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/whyUsSlide4.png"
            alt="Client4 Logo"
            width={150}
            height={150}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/whyUsSlide5.png"
            alt="Client5 Logo"
            width={150}
            height={150}
          />
        </SwiperSlide>
         
         <SwiperSlide>
          <Image
          src="/whyUsSlide6.svg"
          alt="Client6 Logo"
          width={150}
          height={150}
          />
         </SwiperSlide>
         <div className="swiper-pagination bottom-[40px]"></div>
      </Swiper>
    </>
  );
};

export default WhyUsSlide;
