import Image from "next/image";
import { DmProofData } from "@/Data/digitalMarketing";
export default function DmProof() {
  return (
    <div>
      <div className="custom-container flex flex-col gap-12">
        <div className="flex gap-12 justify-center items-center mx-auto flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <Image
              src={DmProofData.src}
              alt={DmProofData.alt}
              width={540}
              height={612}
              className={""}
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h1 className="text-2xl md:text-4xl font-bold">{DmProofData.heading}</h1>
            <p className="text">{DmProofData.pera}</p>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <h1 className="text-center text-2xl sm:text-3xl md:text-5xl font-bold text-transparent bg-gradient-to-tr from-pink-300 to-orange-600 bg-clip-text">
            {DmProofData.promiseSection.heading}
          </h1>
          <div className="flex flex-col gap-6 sm:gap-12 lg:gap-24 items-center justify-center md:flex-row">
            {DmProofData.promiseSection.card.map((obj, id) => (
              <div key={id} className="flex flex-col">
                <h1 className="text-center text-[50px] md:text-[60px] lg:text-[80px] font-bold ">
                  {obj.no}%
                </h1>
                <p className="text-center">{obj.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
