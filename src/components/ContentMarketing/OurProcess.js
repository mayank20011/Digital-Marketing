import Image from "next/image";
import { OurProcessData as data } from "@/Data/contentMarketing";
export default function OurProcess() {
  return (
    <div>
      <div className="custom-container flex gap-6 md:gap-8 flex-col lg:flex-row pt-4 lg:pt-0">
        <div className="w-full lg:w-1/2 border-4 border-orange-400 rounded-2xl h-fit">
          <Image src={"/ourProcessImg.jpg"} alt={""} width={500} height={500} className="brightness-50 rounded-2xl w-full -translate-x-[15px] -translate-y-[15px]" style={{filter:"drop-shadow(10px 10px 1px black)"}}/>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4 justify-center">
          <h4 className="text-xl md:text-2xl lg:text-3xl font-bold">{data.heading}</h4>
          <p className="text-neutral-700">{data.pera}</p>
          <div className="grid grid-cols-2 gap-4">
            {data.points.map((point, id)=>(
              <div key={id} className={`flex gap-2 ${id==4? 'col-span-2' : ''}`}>
                 <div className="p-1 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 h-fit w-fit mt-1">
                    <div className="p-1 rounded-full bg-white"></div>
                 </div>
                 <div className="flex flex-col gap-2">
                  <h6 className="font-semibold">{point.heading}</h6>
                  <p className="text-xs text-neutral-700">{point.pera}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
