import Link from "next/link";
import Image from "next/image";
import { ourPerformanceMarketingServices as data } from "@/Data/performanceMarketingData";
export default function PMServices() {
  return (
    <div>
      <div className="custom-container flex flex-col md:flex-row gap-6 md:gap-12 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <Image
            src={"/pmServices.png"}
            alt={"graph Image"}
            width={500}
            height={500}
            className="w-full drop-shadow-[2px_2px_2px_black]"
          />
          <h1 className="text-4xl font-bold">{data.heading}</h1>
          <p>{data.pera}</p>
          <Link
            href={"/contact-us"}
            className="bg-gradient-to-r from-orange-400 to-pink-400 w-fit px-4 py-2 rounded-full border shadow-[3px_3px_1px_black] hover:-translate-y-[5px] transition hover:shadow-[5px_5px_3px_black]"
          >
            Contact Us
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          {data.cards.map((card, id) => (
            <div
              key={id}
              className={`flex flex-col gap-6 px-8 p-3 sm:p-4 md:p-6 border border-dashed  ${
                (id + 1) % 2 == 1
                  ? "border-r-0 border-b-0"
                  : "border-l-0 border-b-0"
              } ${id == data.cards.length - 1 ? "border-b-1" : ""} relative`}
            >
              <div
                className={`items-center flex gap-6 w-9/10 ${
                  (id + 1) % 2 == 1 ? "self-start" : "self-end"
                }`}
              >
                <Image src={card.src} alt={card.alt} height={80} width={80} />
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semi-bold">{card.heading}</h3>
                  <p className="text-sm text-neutral-700">{card.pera}</p>
                </div>
              </div>
              <Image
                src={"/playButton.png"}
                alt={"Play Button"}
                height={15}
                width={15}
                className={`absolute bottom-0 translate-y-1/2 right-1/2 ${
                  (id + 1) % 2 == 1 ? "" : "rotate-180"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
