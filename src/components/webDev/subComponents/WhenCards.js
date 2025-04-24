import { whenCardData } from "@/Data/webDev";
import Image from "next/image";
export default function WhenCards() {
  return (
    <div className="grid gap-12 grid-cols-1 lg:grid-cols-3">
      {whenCardData.map((obj, index) => (
        <div key={obj.heading} className="flex flex-col gap-4">
          <div className="flex justify-center items-center gap-12 md:gap-36">
            <Image src={obj.img} alt={obj.alt} width={50} height={50} />
            <div className={`grow flex items-center justify-center ${index== whenCardData.length-1 ? "opacity-0" :""} `}>
              <div className="p-2 rounded-full bg-orange-300"></div>
              <div className="grow border-t-2 border-dashed"></div>
              <div className="p-2 rounded-full bg-orange-300"></div>
            </div>
          </div>
          <div className="gap-4">
            <h1 className="font-semibold">{obj.heading}</h1>
            <p className="text-neutral-500">{obj.pera}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
