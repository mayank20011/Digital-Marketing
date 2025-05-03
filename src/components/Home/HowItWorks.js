import { HowItWorksData } from "@/Data/homeData";
import Image from "next/image";
import HowItWorksAnimation from "./componentsAnimation/HowItWorksAnimation";
import Link from "next/link";
export default function HowItWorks() {
  return (
    <>
      <div className="custom-container flex flex-col gap-12">
        <h1 className="text-4xl text-center font-bold">
          {HowItWorksData.heading}
        </h1>
        <p className="text-center md:text-xl text-slate-600">
          {HowItWorksData.pera}
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {HowItWorksData.cards.map((card) => (
            <div
              className="sm:p-4 flex flex-col gap-2 sm:gap-4 text-center hover:-translate-y-[10px] transition hover:shadow-2xl rounded-2xl hover:border howItWorksCards p-2"
              key={card.number}
            >
              <div className="flex items-center justify-center w-fit mx-auto p-6 rounded-full hover:rotate-x-360 transition duration-1000 shadow-[2px_2px_5px_black]">
                <Image
                  src={card.src}
                  alt={card.alt}
                  className="select-none"
                  width={70}
                  height={70}
                />
              </div>
              <h2 className="font-bold text-xl md:text-2xl lg:text-3xl ">{card.number}</h2>
              <p className="text-xs md:text-sm sm:text-lg font-[600] text-neutral-500">{card.pera}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-12 items-center flex-col lg:flex-row">
          <div className="w-4/5 sm:w-2/5 aspect-[16/9]">
            <img
              src={HowItWorksData.about.src}
              alt={HowItWorksData.about.alt}
              className="w-full"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            <h1 className="text-3xl font-bold">
              {HowItWorksData.about.heading}
            </h1>
            <p className="text-md sm:text-md text-neutral-700">
              {HowItWorksData.about.pera}
            </p>
            <div className="border p-4 rounded-2xl border-slate-200 flex flex-col sm:flex-row">
              <div className="p-4 flex flex-col sm:text-center gap-4 bg-slate-100 rounded-xl w-full sm:w-1/2">
                <h1 className="text-xl font-bold">
                  {HowItWorksData.about.cardl.heading}
                </h1>
                <p className="text-neutral-500">
                  {HowItWorksData.about.cardl.pera}
                </p>
                <Link
                  className="w-fit px-6 py-2 rounded-2xl text-white sm:mx-auto bg-orange-300 transition hover:scale-95"
                  href={"/contact-us"}
                >
                  Lets Connect
                </Link>
              </div>
              <div className="flex flex-col gap-2 p-4 w-full sm:w-1/2 items-center justify-center text-md sm:text-md">
                {HowItWorksData.about.cardR.points.map((data) => (
                  <span className="flex gap-2 w-full sm:w-auto" key={data}>
                    <Image
                      src="/arrowUpRight.png"
                      alt="Arrow Up Right"
                      width={24}
                      height={24}
                    />
                    <p>{data}</p>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-12 items-center justify-center flex-col lg:flex-row">
          <div className="w-full flex flex-col gap-6 lg:w-3/5">
            <h1 className="text-3xl font-bold">
              {HowItWorksData.strategy.left.heading}
            </h1>
            <p className="text-lg text-neutral-500">
              {HowItWorksData.strategy.left.pera}
            </p>
            <div className="flex flex-col gap-6">
              {HowItWorksData.strategy.left.points.map((data) => (
                <span className="flex gap-4" key={data}>
                  <div className="h-[24px] self-center">
                    <Image
                      src="/arrowUpRight.png"
                      alt="arrow top right"
                      width={24}
                      height={24}
                    />
                  </div>
                  <p>{data}</p>
                </span>
              ))}
            </div>
            <Link
              href="/about-us"
              className="px-4 py-2 rounded-2xl text-white bg-orange-300 w-fit "
            >
              Know More
            </Link>
          </div>
          <div className="w-full lg:w-2/5 bg-orange-300 rounded-2xl opacity-90 flex flex-col sm:flex-row lg:flex-col p-4 items-center border">
            <div className="w-3/5 mx-auto -mt-[60px]">
              <Image
                src={HowItWorksData.strategy.right.img.src}
                alt={HowItWorksData.strategy.right.img.alt}
                className="w-full"
                width={300}
                height={300}
              />
            </div>
            <div className="px-4 gap-4 flex flex-col sm:flex-row w-full">
              <div className="w-full bg-white p-4 sm:w-1/2 rounded-xl flex flex-col gap-4 border">
               <h1 className="text-center font-semibold">Current Clients</h1>
                <p className="text-2xl sm:text-4xl md:text-5xl items-center text-center flex mx-auto font-bold grow">300<span className="text-4xl text-orange-600">+</span></p>
              </div>
              <div className="w-full bg-white p-4 sm:w-1/2 rounded-xl flex flex-col gap-4 border">
               <h1 className="text-center font-semibold">On Time Delivery</h1> 
               <p className="text-2xl sm:text-4xl md:text-5xl items-center text-center flex mx-auto font-bold grow">95<span className="text-4xl text-orange-600">%</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HowItWorksAnimation />
    </>
  );
}
