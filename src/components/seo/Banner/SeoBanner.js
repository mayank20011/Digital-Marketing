import Image from "next/image";
import { seoHero } from "@/Data/seoData";
import Link from "next/link";
export default function SEOBanner() {
  return (
    <div className="">
      <div className="custom-container flex flex-col gap-6 md:gap-12 lg:gap-24 md:flex-row md:items-center seoHero">
        <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 order-2 md:order-1">
           <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold xl:text-5xl relative opacity-0">Grow Your Business with <span className="bg-gradient-to-tr from-orange-600 to-pink-300 text-transparent bg-clip-text relative">SEO</span> That Works for You</h1>
           <p className="text-neutral-700 relative opacity-0">{seoHero.pera}</p>
           <Link href={"/contact-us"} className="px-4 py-2 rounded-2xl border w-fit text-white bg-black hover:-translate-y-[5px] transition hover:shadow-[5px_5px_2px_black] hover:text-black hover:bg-white hover:border-black text-sm relative opacity-0">Contact Us</Link>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <Image src={seoHero.src} alt={seoHero.alt} width={850} height={550} style={{filter:"drop-shadow(5px 5px 12px black)"}} className="w-full relative opacity-0" priority/>
        </div>
      </div>
    </div>
  );
}
