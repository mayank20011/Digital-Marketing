import { OurImpactData } from "@/Data/aboutUsData";
import Image from "next/image";
export default function OurImpact() {
  return (
    <div className="custom-container roundex-full bg-slate-100 px-6 py-12 lg:px-24 lg:py-12 rounded-2xl shadow-lg flex gap-12 flex-col items-center">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">Our Impact Numbers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-6 md:gap-6 items-center">
        {OurImpactData.cards.map((obj, index) => (
          <div key={obj.number} className="flex justify-start md:justify-center">
            <div className={`flex flex-col gap-2 w-fit`}>
              <Image
                src={obj.src}
                alt={obj.alt}
                width={100}
                height={100}
                className="bg-white p-4 rounded-md border border-orange-300"
              ></Image>
              <div className="flex gap-2 items-center text-center">
                <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-bold">
                  {obj.number}
                </h1>
                <span className="text-xl md:text-2xl 2xl:text-4xl font-bold text-orange-300">
                  {obj.unit}
                </span>
              </div>
              <h5 className="text-neutral-500">{obj.heading}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
