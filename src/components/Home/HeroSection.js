import Link from "next/link";
import { heroSectionData } from "@/Data/homeData";
export default function HeroSection() {
  return (
    <>
      <div className="custom-container py-6  gap-6 flex items-center flex-col md:flex-row">
        <div className="order-2 md:order-1 md:w-1/2 flex flex-col gap-6 2xl:gap-12  w-full overflow-y-hidden ">
          <h1 className="max-w-full whitespace-normal break-words text-2xl sm:text-4xl xl:text-6xl font-bold heroAnimation translate-y-[90px] opacity-0">
            {heroSectionData.heading}
          </h1>
          <p className="text-sm sm:text-md xl:text-2xl heroAnimation translate-y-[100px] opacity-0 overflow-hidden text-slate-600">
            {heroSectionData.pera}
          </p>
          <Link
            href={"/contact-us"}
            className="heroAnimation block bg-black w-fit px-6 py-2 text-sm sm:text-md 2xl:text-xl text-white hover:bg-white hover:text-black  hover:border-black border-2 border-black transition rounded-md hover:scale-90 translate-y-[100px] opacity-0"
          >
            Contact Us
          </Link>
        </div>
        <div className="md:w-1/2 aspect-square overflow-hidden flex items-center">
          <img
            src="/digitalMarketing.webp"
            alt="Digital Marketing"
            className="w-full translate-x-[60px] opacity-0 heroAnimationImg "
          />
        </div>
      </div>
    </>
  );
}
