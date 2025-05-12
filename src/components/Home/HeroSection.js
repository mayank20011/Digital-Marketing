import Link from "next/link";
import Image from "next/image";
import { heroSectionData } from "@/Data/homeData";
export default function HeroSection() {
  return (
    <>
      <div className="custom-container gap-6 flex items-center flex-col md:flex-row">
        <div className="order-2 md:order-1 md:w-1/2 flex flex-col gap-4 2xl:gap-6 w-full  overflow-y-hidden ">
          <h1 className="max-w-full whitespace-normal break-words text-2xl sm:text-3xl xl:text-5xl font-bold relative opacity-0 homeHeroText">
            {heroSectionData.heading}
          </h1>
          <p className="text-sm sm:text-lg text-slate-600 relative opacity-0 homeHeroText">
            {heroSectionData.pera}
          </p>
          <Link
            href={"/contact-us"}
            className="block bg-black w-fit px-4 py-2 text-sm text-white hover:bg-white hover:text-black  hover:border-black border-2 border-black transition rounded-md hover:scale-90 relative opacity-0 homeHeroText"
          >
            Contact Us
          </Link>
        </div>
        <div className="aspect-square overflow-hidden flex h-fit items-center w-full md:w-1/2 lg:w-[500px]">
          <Image
            src="/digitalMarketing.webp"
            alt="Digital Marketing"
            className="object-contain relative homeHeroImg opacity-0"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </>
  );
}
