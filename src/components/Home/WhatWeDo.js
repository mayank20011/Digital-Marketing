import { whatWeDo } from "@/Data/homeData";
import Link from "next/link";
export default function WhatWeDo() {
  return (
    <div className="custom-container flex flex-col gap-6 md:gap-12">
      <h2 className="text-4xl text-center font-bold">What We do ?</h2>
      <div className="w-full grid md:grid-cols-2 gap-6">
        {whatWeDo.map((data) => (
          <Link href={data.href}>
            <div
              className={`flex items-center gap-6 p-4 sm:p-6 rounded-2xl border-2 border-b-8 border-black hover:scale-102 transition flex-col lg:flex-row cursor-pointer ${
                data.bg == "black"
                  ? "bg-black text-white border-slate-200"
                  : "bg-white text-black"
              }`}
              key={data.heading}
            >
              <div className={""}>
                <img src="/digitalMarketing.webp" alt="" />
              </div>
              <div className="flex flex-col gap-2 sm:gap-4 justify-center">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                  {data.heading}
                </h1>
                <p className="text-sm md:text-md">{data.pera}</p>
                <Link
                  href={data.href}
                  className={`text-sm md:text-md w-fit px-4 py-2 rounded-md scale-105 transform ${
                    data.bg == "black"
                      ? "hover:bg-white hover:text-black"
                      : "hover:bg-black hover:text-white"
                  }`}
                >
                  Read More
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
