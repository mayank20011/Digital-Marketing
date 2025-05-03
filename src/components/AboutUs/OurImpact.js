import { OurImpactData } from "@/Data/aboutUsData";
import Image from "next/image";
export default function OurImpact() {
  return (
    <div className="custom-container roundex-full border border-slate-100 p-6 lg:px-24 lg:py-6 rounded-2xl flex gap-6 flex-col items-center  bg-gradient-to-tr from-orange-100 to-blue-100 shadow-black">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-transparent bg-gradient-to-tr from-orange-400 to-pink-400 bg-clip-text drop-shadow-[1px_1px_1px_black]">Our Impact Numbers</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-6 md:gap-6 items-center">
        {OurImpactData.cards.map((obj, index) => (
          <div key={obj.number} className="flex justify-start md:justify-center">
            <div className={`flex flex-col gap-2 w-fit`}>
              <Image
                src={obj.src}
                alt={obj.alt}
                width={50}
                height={50}
                className="rounded-md border drop-shadow-[2px_2px_1px_white]"
              ></Image>
              <div className="flex gap-2 items-center text-center">
                <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-bold text-white bg-clip-text drop-shadow-[1px_1px_1px_black]">
                  {obj.number}
                </h1>
                <span className="text-xl md:text-2xl 2xl:text-4xl font-bold text-orange-300 drop-shadow-[1px_1px_1px_black]">
                  {obj.unit}
                </span>
              </div>
              <h5 className="text-neutral-500 drop-shadow-[1px_1px_1px_white]">{obj.heading}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
