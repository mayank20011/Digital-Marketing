import { contactUsData } from "@/Data/contactUs.js";
import Image from "next/image";
export default function CardsContainer() {
  return (
    <div className="custom-container py-12">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-12 xl:gap-6 contactUsCardContainer">
        {contactUsData.map((obj, index) => (
          <div
            key={obj.heading}
            className={`opacity-0 relative contactUsCards flex flex-col items-center rounded-2xl border border-slate-100 hover:shadow-[5px_5px_10px_black] transition ${index==2 ? 'md:col-span-2 xl:col-span-1':''}`}
          >
            <div className="flex flex-col gap-4 px-6 pb-4 bg-slate-100 rounded-2xl w-full grow">
              <div
                className={`p-6 w-fit mx-auto -translate-y-3/10 rounded-2xl transition duration-700 ${
                  index == parseInt(contactUsData.length / 2)
                    ? "bg-orange-300 hover:bg-neutral-500"
                    : " bg-neutral-700 hover:bg-orange-300"
                }`}
              >
                <Image
                  src={obj.src}
                  alt={obj.alt}
                  className=""
                  width={50}
                  height={50}
                  priority
                />
              </div>
              <h1 className="text-xl lg:text-3xl font-bold text-center">{obj.heading}</h1>
              <p className="text-neutral-500 text-center">
                {obj.details}
              </p>
            </div>
            <p className="p-6">{obj.pera}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
