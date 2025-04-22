import Image from "next/image";
import { HowWeCompleteProjectsData } from "@/Data/Services";
export default function HowWeCompleteProjects() {
  return (
    <div className="w-full">
      <div className="custom-container flex items-center justify-center flex-col md:flex-row">
        <div className="w-full aspect-square md:w-1/2">
          <Image
            src={HowWeCompleteProjectsData.src}
            alt={HowWeCompleteProjectsData.alt}
            width={700}
            height={700}
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-8 w-full md:w-1/2">
          {HowWeCompleteProjectsData.cards.map((card,index) => (
            <div className="flex gap-6 items-center">
              <div className="w-3/10 sm:w-1/5">
                <Image src={card.img} alt={card.alt} width={60} height={60} classname="w-full h-full"/>
              </div>
              <div className="flex flex-col gap-4">
                <div className={`text-sm md:text-lg p-2 px-3 rounded-full text-white w-fit -translate-x-[20px] ${index ==1 ? 'bg-blue-300 ':'bg-orange-300'}`}>{`0${index+1}`}</div>
                <h1 className="text-3xl lg:text-4xl xl:text-5xl">{card.heading}</h1>
                <p className="text-lg text-neutral-500">{card.pera}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
