import Link from "next/link";
export default function DigitalMarketingTopBanner() {
  return (
    <div className="w-full relative py-8 md:py-24 lg:py-36">
      <div className="custom-container flex flex-col gap-6 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-black relative opacity-0 dmHeroH" style={{filter:"drop-shadow(3px 3px 1px white)"}}>Fueling Your Business Growth</h1>
        <p className="text-lg w-full md:w-3/4 lg:w-1/2 mx-auto text-neutral-500 relative opacity-0 dmHeroP">
          From lead generation to strategic partnerships, our business
          development solutions are tailored to help you scale faster, smarter,
          and with purpose.
        </p>
        <Link
          href={"/contact-us"}
          className="w-fit bg-gradient-to-tr from-orange-300 to-pink-300 mx-auto border px-4 py-2 rounded-full hover:-translate-y-[10px] transition shadow-[3px_3px_1px_black] relative opacity-0 dmHeroLink hover:scale-110"
        >
          Lets Scale Together
        </Link>
      </div>
    </div>
  );
}
