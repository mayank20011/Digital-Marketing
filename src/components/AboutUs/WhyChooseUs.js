import Link from "next/link";
import { whyChooseUsData } from "@/Data/aboutUsData";
import Image from "next/image";
export default function WhyChooseUs() {
  return (
    <div className="w-full">
      <div className="custom-container flex items-center gap-0 md:gap-12 flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6">
          <span className="text-orange-300">{whyChooseUsData.span}</span>
          <h1 className="flex text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            {whyChooseUsData.heading}
          </h1>
          <p className="text-md sm:text-lg text-neutral-500">
            {whyChooseUsData.pera}
          </p>
          <Link
            href={"/contact-us"}
            className="bg-orange-400 text-white px-4 py-2 rounded-2xl hover:scale-95 transition hover:shadow-[2px_3px_2px_black] w-full text-center md:text-left md:w-fit"
          >
            Contact Us
          </Link>
        </div>
        <div
          className="w-full md:w-1/2 h-full md:h-[500px] overflow-y-auto flex flex-col gap-0 relative"
          style={{ scrollbarColor: "white white", scrollbarWidth: "thin" }}
        >
          <div className="hidden md:flex w-full min-h-[100px] sticky top-0 bg-gradient-to-b from-white via-white/70 to-white/0 pointer-events-none"></div>

          {whyChooseUsData.cards.map((obj, index) => (
            <div
              key={index}
              className="flex flex-col gap-0 w-full items-center"
            >
              <div className="border-1 h-[30px] border-orange-400"></div>
              <div className="p-4 py-3 border-1 border-orange-400 text-orange-400 rounded-full">{`0${
                index + 1
              }`}</div>
              <div className="border-1 h-[30px] border-orange-400"></div>
              <div className="flex flex-col rounded-2xl p-4 sm:p-6 bg-slate-100 w-full gap-2 sm:gap-4 lg:gap-8 2xl:gap-12 items-center sm:flex-row md:flex-col lg:flex-row border-[1px_3px_3px_1px] border-slate-100 hover:border-orange-400 transition duration-500">
                <Image src={obj.src} alt={obj.alt} height={70} width={70} />
                <div className="flex flex-col gap-2 md:gap-4 transition">
                  <h1 className="text-lg sm:text-xl md:text-2xl">{obj.h1}</h1>
                  <p className="text-sm md:text-base text-neutral-500">{obj.p}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="hidden md:flex w-full min-h-[100px] sticky bottom-0 bg-gradient-to-t from-white to-white/0 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}
