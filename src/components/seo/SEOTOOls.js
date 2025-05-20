import { seoToolsData as Data } from "@/Data/seoData";
import Image from "next/image";
export default function SEOTOOLS() {
  return (
    <div className="">
      <div className="custom-container md:text-center flex flex-col gap-6 md:gap-12 seoTools">
        <h1 className="text-3xl lg:text-4xl font-bold relative seoToolsH">
          {Data.heading}
        </h1>
        <p className="text-md md:text-xl relative seoToolsP">{Data.pera}</p>
        <div className="flex flex-col toolsParentContainer pt-4 md:pt-0">
          {Data.cards.map((obj, id) => (
            <div
              className={`flex justify-between w-1/2 border-dashed relative borderDiv ${
                (id + 1) % 2 == 0 ? "self-start border-r border-orange-300" : " border-l self-end border-pink-300"
              } `}
              key={id}
            >
              <div className="w-full flex flex-col dataDivParent">
                <div
                  className={`dataDiv flex flex-col gap-4 md:gap-6 p-4 rounded-4xl  sm:w-4/5 text-left ${
                    (id + 1) % 2 == 0 ? " rightDiv" : "self-end leftDiv"
                  }`}
                >
                  <span
                    className={`absolute border p-2 px-3 border-dashed  top-0 -translate-y-1/2 rounded-full text-white font-bold bg-gradient-to-r from-orange-300 to-pink-300 ${
                      id % 2 == 0
                        ? "left-0 -translate-x-1/2 "
                        : "right-0 translate-x-1/2 "
                    }`}
                  >
                    0{id + 1}
                  </span>
                  <Image
                    src={obj.src}
                    alt={obj.alt}
                    width={50}
                    height={50}
                    className="relative"
                  />
                  <h1 className="text-md md:text-2xl font-bold relative">{obj.heading}</h1>
                  <p className="text-xs md:text-lg relative">{obj.pera}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
