import { whatWeDo } from "@/Data/homeData";
import Link from "next/link";
export default function WhatWeDo() {
  return (
    <div className="custom-container flex flex-col gap-6 md:gap-12">
      <h2 className="text-4xl text-center font-bold">What We do ?</h2>
      <div className="w-full grid sm:grid-cols-2 gap-6">
        {whatWeDo.map((data,id) => (
          <Link key={id} href={data.href}>
            <div
              className={`h-full flex items-center gap-2 sm:gap-6 p-2 py-4 sm:p-4 rounded-2xl border-2 border-b-8 border-black hover:scale-102 transition flex-row sm:flex-col lg:flex-row cursor-pointer ${
                data.bg == "black"
                  ? "bg-black text-white border-slate-200"
                  : "bg-white text-black"
              }`}
            >
              <div className={`sm:order-1 ${(id+1)%2==0? 'order-2' : ''}`}>
                <img src="/digitalMarketing.webp" alt="" />
              </div>
              <div className={` sm:order-2 flex flex-col gap-2 justify-center`}>
                <h1 className="sm:text-lg md:text-xl lg:text-2xl font-bold">
                  {data.heading}
                </h1>
                <p className="text-xs sm:text-sm">{data.pera}</p>
                <p
                  className={`text-xs md:text-sm w-fit px-2 py-1 sm:px-4 sm:py-2 rounded-md scale-105 transform ${
                    data.bg == "black"
                      ? "hover:bg-white hover:text-black"
                      : "hover:bg-black hover:text-white"
                  }`}
                >
                  Read More
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
