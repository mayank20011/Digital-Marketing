import Image from "next/image";
import { aboutUsBannerData } from "@/Data/aboutUsData";
import Link from "next/link";
export default function AboutUsTopBanner() {
  return (
    <div className="w-full flex items-center justify-center relative h-[500px]">
      <Image
        src="/AboutUsBannerbg.jpg"
        alt=""
        className="w-full aspect-auto h-full"
        height={600}
        width={1500}
      />
      <div className="w-full h-full p-12 absolute text-center flex flex-col gap-6 bg-[rgba(255,255,255,0.4)] backdrop-blur-xs items-center justify-center">
        <div className="md:w-4/5 xl:w-5/10 flex flex-col gap-6 lg:gap-8 xl:gap-12">
          <h1
            className="text-3xl md:text-4xl xl:text-5xl font-bold text-neutral-100"
            style={{ filter: "drop-shadow(5px 5px 5px black)" }}
          >
            {aboutUsBannerData.heading}
          </h1>
          <p
            className=" text-sm sm:text-md md:text-lg xl:text-xl font-bold text-neutral-100"
            style={{ filter: "drop-shadow(5px 5px 5px black)" }}
          >
            {aboutUsBannerData.pera}
          </p>
          <Link
            href={"/servives"}
            className="bg-white font-bold shadow-[2px_2px_5px_black] text-black w-fit px-4 py-2 rounded-md mx-auto hover:shadow-[2px_2px_5px_orange] hover:scale-90 transition"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  );
}
