import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { testimonialData } from "@/Data/homeData";
import Image from "next/image";
import "swiper/css/navigation";
export default function ReviewSwiper() {
  const swiperRef = useRef(null);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        ref={swiperRef}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1.2,
            spaceBetween: 50,
          },
          1500:{
            slidesPerView:2,
            spaceBetween:30,
          }
        }}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={3000}
        loop={true}
        modules={[Pagination, Autoplay, Navigation]}
        navigation={{ nextEl: ".swiperNext", prevEl: ".swiperPrev" }}
        className="w-full border-green-600 relative"
        wrapperClass="pb-6 flex grow"
      >
        {testimonialData.map((obj) => (
          <SwiperSlide key={obj.name}>
            <div className="flex w-full py-4 flex-col gap-6 pb-6 grow">
              <div className="self-end flex flex-row gap-2">
                <h1 className="text-3xl">{obj.rating}</h1>
                <Image
                  src="/starIcon.png"
                  alt="Star Icon"
                  width={24}
                  height={24}
                  className="w-fit h-fit aspect-square"
                />
              </div>
              <p className="grow">{obj.pera}</p>
              <span className="border-1 border-slate-100"></span>
              <div className="flex gap-6 items-center">
                <Image
                  src={""}
                  alt={""}
                  width={70}
                  height={70}
                  className="rounded-full border-1 shadow-lg "
                />
                <div className="flex flex-col gap-1">
                  <h5 className="font-bold ">{obj.name}</h5>
                  <p className="text-sm text-neutral-700">{obj.position}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="w-fit flex gap-2 absolute right-0 bottom-[50px] sm:bottom-[20px]">
          <div className="swiperPrev p-1 sm:p-4 rounded-sm bg-orange-300 hover:scale-90 cursor-pointer">
            <Image
              src={"/arrowLeft.png"}
              alt={"arrow left"}
              width={20}
              height={20}
              className="cursor-pointer pointer-events-none group-hover:scale-90"
            />
          </div>
          <div className="swiperNext p-1 sm:p-4 rounded-sm bg-orange-300 hover:scale-90 cursor-pointer">
            <Image
              src={"/arrowRight.png"}
              alt={"arrow right"}
              width={20}
              height={20}
              className="cursor-pointer pointer-events-none group-hover:scale-90"
            />
          </div>
        </div>
      </Swiper>
    </>
  );
}
