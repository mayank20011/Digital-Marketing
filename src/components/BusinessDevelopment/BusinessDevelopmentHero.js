import Image from "next/image";
export default function BusinessDevelopmentHero() {
  return (
    <div className="flex w-full justify-center items-center flex-col gap-6 pt-12 md:pt-0 md:py-12 lg:py-0">
      <div className="flex relative w-full flex-row-reverse order-2">
        <div className="w-3/4 md:w-1/2 flex flex-row-reverse">
          <Image
            src={"/businessDevelopmentBanner.webp"}
            alt={"Business Development Banner"}
            width={600}
            height={480}
            className="w-full lg:w-9/10 bdHeroImg opacity-0 relative"
            style={{filter:'drop-shadow(2px 2px 2px black)'}}
            priority
          />
        </div>
      </div>
      <div className="order-1 md:order-2 md:absolute custom-container businessdevelopmentHeroText">
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl md:text-3xl lg:text-5xl font-bold relative opacity-0">
            Building Your Business, One Strategy at a Time
          </h1>
          <p className="text-md lg:text-lg text-neuutal-500 relative opacity-0">
            Unlock the next stage of your business growth with smart, targeted
            strategies. At Vardaan Farms, we connect ideas, innovation, and
            execution to help brands expand faster and stronger. Let’s create
            new opportunities and turn your vision into reality.
          </p>
        </div>
      </div>
    </div>
  );
}
