import { whyPerformanceMarketingCards as cards } from "@/Data/performanceMarketingData";
import Image from "next/image";
export default function WhyPerformanceMarketing() {
  return (
    <div className="">
      <div className="custom-container flex flex-col gap-6 whyPerformanceMarketing">
        <h1 className="text-2xl md:text-3xl lg:text-4xl whyPerformanceMarketingHeading relative">
          Why Choose Performance Marketing?
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card, id) => (
            <div
              key={id}
              className={`whyPerformanceMarketingCards relative flex flex-col gap-4 p-6 rounded-5xl rounded-4xl shadow-2xl rounded-tr-none rounded-bl-none border border-slate-100 bg-slate-50 hover:scale-102 transition hover:-translate-y-[10px] ${id == 2 ? "sm:col-span-2 md:col-span-1":""}`}
            > 
              <Image src={card.img} alt={card.alt} width={50} height={50}/>
              <h1 className="text-2xl text-transparent w-fit bg-gradient-to-tr from-orange-400 to-pink-400 bg-clip-text drop-shadow-[1px_1px_1px_black]">
                {card.heading}
              </h1>
              <p className="text-neutral-700">{card.pera}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
