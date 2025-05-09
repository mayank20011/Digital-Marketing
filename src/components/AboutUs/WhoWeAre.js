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
          <div className="border md:col-span-2 xl:col-span-2 xl:row-span-2 flex flex-col gap-4 md:flex-row xl:flex-col rounded-2xl justify-between transition p-4 bg-slate-100 md:items-center xl:items-start shadow-[5px_5px_1px_gray] hover:shadow-[7px_7px_1px_gray]">
            <div className="md:w-1/2 xl:w-full">
              <Image src="/drivenByPurpose.jpg" alt={"Digital Marketing Image"} width={500} height={300} className={"w-full aspect-[16/9] rounded-2xl "}/>
            </div>
            <div className="flex flex-col gap-2 md:gap-4 px-2 text-white md:w-1/2 xl:w-full">
              <Image
                src={whoWeAre.cards.card1.src}
                alt={"Growth Logo"}
                className="drop-shadow-[1px_1px_1px_black]"
                width={50}
                height={50}
              />
              <h1 className="text-base sm:text-lg drop-shadow-[1px_1px_1px_black]">
                {whoWeAre.cards.card1.heading}
              </h1>
              <p className="text-sm sm:text-base drop-shadow-[1px_1px_1px_black]">
                {whoWeAre.cards.card1.pera}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl p-6 bg-blue-400 hover:shadow-xl transition items-center sm:justify-center text-center">
            <Image
              src={whoWeAre.cards.card2.src}
              alt={"Cake Logo"}
              className="drop-shadow-[1px_1px_1px_black]"
              width={50}
              height={50}
            />
            <h1 className="text-base sm:text-lg md:text-xl drop-shadow-[1px_1px_1px_black]">
              {whoWeAre.cards.card2.heading}
            </h1>
            <p className="text-sm sm:text-base drop-shadow-[1px_1px_1px_black]">
              {whoWeAre.cards.card2.pera}
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl p-6 bg-orange-400 hover:shadow-xl transition items-center sm:justify-center text-center">
            <Image
              src={whoWeAre.cards.card3.src}
              alt={"Resume Logo"}
              className="drop-shadow-[1px_1px_1px_black]"
              width={50}
              height={50}
            />
            <h1 className="drop-shadow-[1px_1px_1px_black] text-base sm:text-lg">
              {whoWeAre.cards.card3.heading}
            </h1>
            <p className="text-sm sm:text-base drop-shadow-[1px_1px_1px_black]">
              {whoWeAre.cards.card3.pera}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
