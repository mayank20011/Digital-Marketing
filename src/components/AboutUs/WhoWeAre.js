import { whoWeAre } from "@/Data/aboutUsData";
import Image from "next/image";
import "../../app/globals.css";
export default function WhoWeAre() {
  return (
    <div>
      <div className="custom-container flex flex-col gap-6 md:gap-12 md:items-center">
        <h1 className="text-2xl md:text-4xl font-bold text-left md:text-center">
          {whoWeAre.heading}
        </h1>
        <p className="text-md md:text-lg lg:text-xl text-left md:text-center">
          {whoWeAre.pera}
        </p>
        <div className="grid-cols-1 grid-rows-1 gap-6 grid md:grid-cols-2 md:grid-rows-2 xl:grid-cols-[1fr_2fr_2fr] xl:gap-[40px] xl:grid-rows-2 w-full text-white font-bold">
          <div className="bg-gradient-to-tr to-orange-300 from-blue-300 md:col-span-2 xl:col-span-2 xl:row-span-2 flex flex-col gap-6 rounded-2xl p-6 justify-end hover:shadow-xl transition">
            <Image src={whoWeAre.cards.card1.src} alt={"Growth Logo"} className="drop-shadow-[1px_1px_1px_black]" width={50} height={50}/>
            <h1 className="text-xl drop-shadow-[1px_1px_1px_black]">{whoWeAre.cards.card1.heading}</h1>
            <p className="drop-shadow-[1px_1px_1px_black]">{whoWeAre.cards.card1.pera}</p>
          </div>
          <div className="flex flex-col gap-6 rounded-2xl p-6 bg-blue-400 hover:shadow-xl transition">
          <Image src={whoWeAre.cards.card2.src} alt={"Cake Logo"} className="drop-shadow-[1px_1px_1px_black]" width={50} height={50}/>
            <h1 className="text-xl drop-shadow-[1px_1px_1px_black]">{whoWeAre.cards.card2.heading}</h1>
            <p className="drop-shadow-[1px_1px_1px_black]">{whoWeAre.cards.card2.pera}</p>
          </div>
          <div className="flex flex-col gap-6 rounded-2xl p-6 bg-orange-400 hover:shadow-xl transition">
          <Image src={whoWeAre.cards.card3.src} alt={"Resume Logo"} className="drop-shadow-[1px_1px_1px_black]" width={50} height={50}/>
            <h1 className="text-xl drop-shadow-[1px_1px_1px_black]">{whoWeAre.cards.card3.heading}</h1>
            <p className="drop-shadow-[1px_1px_1px_black]">{whoWeAre.cards.card3.pera}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
