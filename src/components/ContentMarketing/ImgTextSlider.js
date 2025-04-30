"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";

export default function ImgTextSlider({data}){
  return(
    <Swiper
    className="max-w-full flex"
    slidesPerView={1}
    spaceBetween={30}
    loop={true}
    breakpoints={
      {
        640:{
          slidesPerView:1.2
        }
      }
    }
    >
    {data.map((slide,id)=>(
      <SwiperSlide key={id} className="h-full">
        <div className="p-[10px] w-full flex flex-col md:flex-row gap-12 items-center grow">
          <div className="w-full md:w-1/2 flex flex-col gap-4 order-2 md:order-1">
            <h3 className="text-4xl font-bold">{slide.heading}</h3>
            <p>{slide.paragraph}</p>
            <Link href={"/contact-us"} className="px-4 py-2 rounded-2xl border w-fit bg-black text-white hover:bg-white hover:text-black hover:shadow-[3px_3px_2px_black] transition hover:-translate-y-[5px]">Contact Us</Link>
          </div>
          <div className="w-full md:w-1/2 h-fit order-1 md:order-2">
            <Image src={slide.src} alt={slide.alt} width={500} height={500}  className="drop-shadow-[10px_10px_2px_black]"/>
          </div>
        </div>
      </SwiperSlide>
    ))}
    </Swiper>
  );
}