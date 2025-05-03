"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const imageList = [
  { src: "/whyUsSlide1.webp", alt: "Client1 Logo" },
  { src: "/whyUsSlide2.webp", alt: "Client2 Logo" },
  { src: "/whyUsSlide3.png", alt: "Client3 Logo" },
  { src: "/whyUsSlide4.png", alt: "Client4 Logo" },
  { src: "/whyUsSlide5.png", alt: "Client5 Logo" },
  { src: "/whyUsSlide6.svg", alt: "Client6 Logo" },
];

const WhyUsSlide = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        loop={true}
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: true }}
        className="w-full"
      >
        {imageList.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-[150px] h-[150px] mx-auto">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100px, 150px"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default WhyUsSlide;
