import Image from "next/image";
import { WhatWeDoAboutUsData } from "@/Data/aboutUsData";
export default function WhatWeDoAboutUs() {
  return (
    <div className="w-full">
      <div className="custom-container grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="flex flex-col gap-12 justify-center">
          <h1 className="text-4xl font-bold">{WhatWeDoAboutUsData.heading}</h1>
          <div className="flex flex-col gap-2">
            {WhatWeDoAboutUsData.data.map((obj) => (
              <div className="flex flex-col gap-2" key={obj.heading}>
                <h1 className="text-lg font-bold">{obj.heading}</h1>
                <p className="text-neutral-500">{obj.pera}</p>
              </div>
            ))}
          </div>
        </div>
        <Image
          src={"/Marketing.png"}
          alt={""}
          width={800}
          height={800}
          className="drop-shadow-[3px_3px_2px_black]"
        />
      </div>
    </div>
  );
}
