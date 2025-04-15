import Image from "next/image";
import { FounderMessageData } from "@/Data/homeData";
export default function FoundersMessage() {
  return (
    <div>
      <div className="custom-container flex-col flex gap-6 sm:gap-12">
        <h1 className="text-4xl font-bold">Founder Message</h1>
        <div className="flex flex-col gap-6 md:flex-row md:gap-12 items-center">
          <div className="w-full md:w-1/2 lg:w-4/10">
            <Image src={FounderMessageData.src} alt={FounderMessageData.alt} width={500} height={500} className="w-full border-2  rounded-4xl border-orange-300 border-t-black border-l-black shadow-2xl hover:border-black hover:border-t-orange-300 hover:border-l-orange-300 transition duration-700"/>
          </div>
          <div className="w-full md:w-1/2 lg:w-3/5 flex flex-col gap-6 md:gap-8 lg:pl-12 xl:pl-24">
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
