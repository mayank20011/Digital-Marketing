import Image from "next/image";
import { aboutUsBannerData } from "@/Data/aboutUsData";
import Link from "next/link";
export default function AboutUsTopBanner() {
  return (
    <div className="w-full flex items-center justify-center relative h-[300px] md:h-[400px] lg:h-[500px]">
      <Image
        src="/AboutUsBannerbg.jpg"
        alt=""
        className="w-full aspect-auto h-full border"
        height={600}
        width={1500}
        priority
      />
      <div className="w-full h-full p-12 absolute text-center flex flex-col gap-6 bg-[rgba(255,255,255,0.4)] backdrop-blur-xs items-center justify-center">
        <div className="w-full md:w-4/5 xl:w-5/10 flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-12 aboutHero sm:overflow-y-hidden">
          <h1
            className="text-2xl md:text-4xl xl:text-5xl font-bold text-neutral-100 aboutHeroH relative opacity-0"
            style={{ filter: "drop-shadow(1px 1px 1px black)" }}
          >
            {aboutUsBannerData.heading}
          </h1>
          <p
            className="opacity-0 text-xs sm:text-sm md:text-md xl:text-xl font-bold text-neutral-100 aboutHeroP relative"
            style={{ filter: "drop-shadow(1px 1px 1px black)" }}
          >
            {aboutUsBannerData.pera}
          </p>
          <Link
            href={"/servives"}
            className="opacity-0 bg-white font-bold shadow-[2px_2px_5px_black] text-black w-fit px-4 py-2 rounded-md mx-auto hover:shadow-[5px_5px_1px_black] hover:scale-90 transition text-xs sm:text-sm aboutHeroLink relative"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  );
}
