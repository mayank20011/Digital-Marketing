import { FocusedDigitalMarketingStrategyData as FDMD } from "@/Data/digitalMarketing";
import Image from "next/image";
export default function FocusedDigitalMarketingStrategy() {
  return (
    <div className="py-12">
      <div className="custom-container flex flex-col gap-12 md:flex-row items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-6 order-2 md:order-1">
          <h1 className="text-2xl md:text-4xl font-bold">{FDMD.heading}</h1>
          {FDMD.pera.map((p, id) => (
            <p className="text-lg  text-neutral-500" key={id}>{p}</p>
          ))}
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2">
          <Image
            src={FDMD.src}
            alt={FDMD.alt}
            width={500}
            height={304}
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </div>
  );
}
