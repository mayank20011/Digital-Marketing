import { bdExpertsCardsData as cards } from "@/Data/BusinessDevelopmentData";
import Image from "next/image";
export default function BusinessResearchExpert(){
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 custom-container businessResearchCardContainer">
      {cards.map((card,id)=>(
        <div key={id} className={`flex flex-col gap-4 px-4 py-6 shadow-[2px_2px_2px_white] rounded-2xl hover:shadow-[5px_5px_5px_white] transition duration-1000 hover:-translate-y-[10px] ${(id+1)%2==0 ? 'bg-black text-white ': 'bg-white text-black'} businessResearchCard${id+1}`}>
          <Image src={card.src} alt={card.alt} width={80} height={80} className="relative"/>
           <h6 className="text-lg sm:text-xl font-bold relative">{card.heading}</h6>
           <p className="relative">{card.pera}</p>
      </div>))}
    </div>
  );
}