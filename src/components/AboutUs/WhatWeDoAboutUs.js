import Image from "next/image";
import { WhatWeDoAboutUsData } from "@/Data/aboutUsData";
export default function WhatWeDoAboutUs() {
  return (
    <div className="custom-container flex flex-col gap-6 md:gap-12">
      <h1 className="text-left md:text-center text-2xl md:text-4xl font-bold">
        {WhatWeDoAboutUsData.heading}
      </h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="flex flex-col gap-4 md:gap-6 justify-center">
          <div className="flex flex-col gap-4">
            {WhatWeDoAboutUsData.data.map((obj, id) => (
              <div className="flex flex-col gap-2" key={obj.heading}>
                <h1 className="text-lg font-bold flex gap-2 flex-row items-center">
                  <span className="border px-[4px] text-sm rounded-full h-fit text-black">{`0${
                    id + 1
                  }`}</span>
                  <span className="drop-shadow-[1px_1px_1px_black] bg-gradient-to-r from-orange-300 to-pink-300 w-fit text-transparent bg-clip-text ">
                    {obj.heading}
                  </span>
                </h1>
                <p className="text-neutral-500">{obj.pera}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-r from-orange-600 to-pink-500 rounded-2xl">
          <Image
            src={"/grow-scaled-1.avif"}
            alt={"marketing png"}
            width={800}
            height={800}
            className="rounded-2xl shadow-[5px_5px_1px_black] -translate-y-[10px] -translate-x-[10px] border-2 border-white"
          />
        </div>
      </div>
    </div>
  );
}
