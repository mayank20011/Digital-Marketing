import { ServiceCards } from "@/Data/Services";
import Image from "next/image";
import Link from "next/link";
import InfiniteSlide from "./InfiniteSlide";
import ChangingNavDom from "./ChangingNavDom";
export default function ServiceCardsContainer() {
  return (
    <div className="w-full bg-transparent pt-12 flex flex-col gap-12">
      <div className="custom-container grid md:grid-cols-2 xl:grid-cols-3 gap-12">
        {ServiceCards.map((obj, id) => (
          <div className="servicePageCards" key={id}>
          <Link href={obj.href}
            className="servicePageCards flex flex-col gap-4 px-6 pb-4 rounded-2xl shadow-sm relative z-20 cursor-pointer hover:-translate-y-[10px] transition hover:shadow-xl duration-500 hover:animate-pulse"
            // key={id}
            style={{
              backgroundColor: "rgba(255,255,255,0.30)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="absolute w-full h-full flex -z-10 left-0 px-6 bg-white rounded-2xl">
              <div className="p-2 bg-neutral-100 absolute rounded-full top-20 animate-pulse delay-[100ms]"></div>
              <div className="p-6 bg-neutral-100 absolute rounded-full top-50 right-10 animate-ping delay-[1000ms] duration-[3000ms]"></div>
              <div className="p-4 bg-neutral-100 absolute rounded-full top-15 right-15 animate-ping delay-500 duration-[1000ms]"></div>
              <div className="p-2 bg-neutral-100 absolute rounded-full top-20 right-30 animate-ping duration-[1000ms]"></div>
              <div className="p-2 bg-neutral-100 absolute rounded-full top-50 left-15 animate-ping duration-[1000ms]"></div>
              <div className="p-8 bg-neutral-100 absolute rounded-full top-1/2 right-1/2 animate-ping delay-1000 duration-1000"></div>
            </div>
            <div className="w-fit rounded-full flex items-center justify-center -translate-y-3/10 relative">
              <div className="w-full h-full rounded-full absolute z-10 animate-[spin_3s_linear_infinite] border">
                <div className="p-2 w-fit rounded-full border bg-white -left-[0px]"></div>
              </div>
              <div className="bg-orange-300 w-full h-full rounded-full p-4 transition x-20">
                <Image
                  src={obj.img}
                  alt={obj.alt}
                  width={50}
                  height={50}
                  className=""
                />
              </div>
            </div>
            <h1 className="text-2xl">{obj.heading}</h1>
            <p className="text-neutral-500">{obj.pera}</p>
            <div className="flex gap-4 items-center">
              <div className="w-fit rounded-full">
                <Image
                  src="/arrowRightWhite.png"
                  alt={"aroow Right Logo"}
                  width={40}
                  height={40}
                  className="bg-orange-300 border rounded-full -rotate-45 p-2 transition"
                />
              </div>
              <p className="w-0 overflow-hidden hover:w-full transition duration-[2000ms] text-nowrap">
                Link Text
              </p>
            </div>
          </Link>
          </div>
        ))}
      </div>
      <InfiniteSlide />
      <ChangingNavDom/>
    </div>
  );
}
