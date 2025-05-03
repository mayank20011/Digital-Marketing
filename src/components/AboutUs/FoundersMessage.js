import Image from "next/image";
import { FounderMessageData } from "@/Data/aboutUsData";
export default function FoundersMessage() {
  return (
    <div>
      <div className="custom-container flex-col flex gap-6 md:gap-12">
        <h1 className="text-4xl font-bold">Founder Message</h1>
        <div className="flex flex-col gap-6 md:flex-row md:gap-12 items-center">
          <div className="w-full md:w-1/2 lg:w-4/10 relative">
            <div className="absolute w-full h-full border-[5px] rounded-4xl border-orange-300 mt-[10px] ml-[10px] sm:mt-[22px] sm:ml-[22px] -z-1"></div>
            <Image src={FounderMessageData.src} alt={FounderMessageData.alt} width={500} height={500} className="w-full border-2  rounded-4xl transition duration-700 shadow-[5px_5px_1px_black] sm:shadow-[10px_10px_1px_black] brightness-70"/>
          </div>
          <div className="w-full md:w-1/2 lg:w-3/5 flex flex-col gap-4 xl:pl-24">
           <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold">{FounderMessageData.heading}</h1>
           <p className="text-neutral-500 lg:text-lg">{FounderMessageData.pera}</p>
           <h1 className="text-lg md:text-2xl font-bold">{FounderMessageData.name}</h1>
           <h1 className="text-lg xl:text-xl text-neutral-500">{FounderMessageData.additional}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
