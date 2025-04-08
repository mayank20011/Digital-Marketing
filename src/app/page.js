import "./globals.css";
import Link from "next/link";
import HomeAnimation from "./HomeAnimation";
export default function Home() {
  return (
    <>
      <div className="custom-container py-6 sm:oy-12 md:py-24 gap-6 flex items-center flex-col md:flex-row">
        <div className="order-2 md:order-1 md:w-1/2 flex flex-col gap-6 2xl:gap-12">
          <h1 className="text-3xl sm:text-4xl xl:text-6xl font-bold heroAnimation translate-y-[100px] opacity-0">
            Grow Your Brand with Smart Digital Marketing
          </h1>
          <p className="text-sm sm:text-md xl:text-2xl heroAnimation translate-y-[100px] opacity-0">
            We help startups and businesses boost visibility, drive traffic, and
            convert leads through tailored digital strategies that actually
            work.
          </p>
          <Link
            href={"/contact-us"}
            className="heroAnimation block bg-black w-fit px-6 py-2 text-sm sm:text-md md:text-xl text-white hover:bg-white hover:text-black  hover:border-black border-2 border-black transition rounded-md hover:scale-90 translate-y-[100px] opacity-0"
          >
            Contact Us
          </Link>
        </div>
        <div className="md:w-1/2 aspect-16/9">
          <img
            src="/digitalMarketing.webp"
            alt="Digital Marketing"
            className="h-full w-full translate-x-[60px] opacity-0 heroAnimationImg"
          />
        </div>
      </div>
      <HomeAnimation />
    </>
  );
}
