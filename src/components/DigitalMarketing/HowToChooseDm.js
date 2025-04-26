import { digitalMarketingData } from "@/Data/digitalMarketing";
import Image from "next/image";

export default function HowToChooseDm(){
  return (
    <div className="flex flex-col gap-6">
      <div className="custom-container">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-left md:text-center font-bold py-12">{digitalMarketingData.heding}</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {digitalMarketingData.cards.map((obj,id)=>(<div key={obj.alt} className={`border rounded-2xl p-4 flex flex-col gap-3 hover:shadow-[5px_5px_5px_black] transition ${id==digitalMarketingData.cards.length-1 ? 'md:col-span-2': ''}`}>
              <Image src={obj.src} alt={obj.alt} width={48} height={48}/>
              <h1 className="text-2xl md:text-3xl font-bold">{obj.h1}</h1>
              <p className="text-lg text-neutra-500">{obj.p}</p>
            </div>))}
        </div>
      </div>
    </div>
  );
}