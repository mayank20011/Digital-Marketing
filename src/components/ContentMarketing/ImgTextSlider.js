"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";

export default function ImgTextSlider({ data }) {
  return (
    <div className="relative">
      <Swiper
        className=""
        slidesPerView={1}
        spaceBetween={30}
        modules={[Navigation]}
        navigation={{ nextEl: ".swiperNext", prevEl: ".swiperPrev" }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1.2,
          },
        }}
        wrapperClass=""
      >
        {data.map((slide, id) => (
          <SwiperSlide key={id} className="">
            <div className="p-[10px] w-full flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2 flex flex-col gap-4 order-2 md:order-1">
                <h3 className="text-4xl font-bold">{slide.heading}</h3>
                <p>{slide.paragraph}</p>
                <Link
                  href={"/contact-us"}
                  className="px-4 py-2 rounded-2xl border w-fit bg-black text-white hover:bg-white hover:text-black hover:shadow-[3px_3px_2px_black] transition hover:-translate-y-[5px]"
                >
                  Contact Us
                </Link>
              </div>
              <div className="w-full md:w-1/2 h-fit order-1 md:order-2">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={500}
                  height={500}
                  className="drop-shadow-[10px_10px_2px_black]"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-2 pl-[10px]">
        <div className="swiperPrev rounded-full p-1 h-fit hover:scale-90 transition cursor-pointer bg-gradient-to-tr from-orange-400 to-pink-400 shadow-[3px_3px_3px_black] border border-white">
          <Image
            src={"/arrowLeft.png"}
            alt={"arrow left logo"}
            width={40}
            height={40}
          />
        </div>
        <div className="swiperNext rounded-full p-1 hover:scale-90 transition bg-gradient-to-tr from-orange-400 to-pink-400 cursor-pointer shadow-[3px_3px_3px_black] border border-white">
          <Image
            src={"/arrowRight.png"}
            alt={"arrow right logo"}
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
}
