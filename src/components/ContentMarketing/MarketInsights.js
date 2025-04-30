import { cmServices as data } from "@/Data/contentMarketing";
import Image from "next/image";
export default function MarketInsights(){
  return (<div>
    <div className="custom-container flex flex-col gap-6 md:gap-12">
       <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">{data.heading}</h1>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.cards.map((card,id)=>(
          <div key={id} className={`flex flex-col gap-2 p-4 border rounded-xl ${card.bg == "#ffffff" ? 'text-black' : 'text-white'}`} style={{backgroundColor:`${card.bg}`}}>
            <Image src={card.src} alt={card.alt} width={50} height={50}/>
          <h1 className="text-xl md:text-2xl font-bold">{card.heading}</h1>
          <p>{card.pera}</p>
        </div>
        ))}
       </div>
    </div>
  </div>);
}