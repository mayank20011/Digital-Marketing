import Image from "next/image";

export default function WhyUsDigitalMarketing() {
  return (
    <div className="bg-white w-full">
      <div className="custom-container flex flex-col lg:flex-row whyVf">
        <div className="w-full lg:w-1/2 bg-gradient-to-r from-white to-orange-300 rounded-tr-[50px] p-12 pr-16 flex flex-col gap-6 md:gap-12 items-center justify-center relative whyVfText">
          <h1 className="text-3xl md:text-4xl font-bold text-black relative">
            Why Vardaan Farms As Your Digital Marketing Team
          </h1>
          <p className="relative">
            At Vardaan Farms, we go beyond buzzwords and vanity metrics. We
            focus on strategies that drive real results—whether it&apos;s
            building your brand, generating leads, or boosting conversions. Our
            team treats your goals like our own, blending creativity with data
            to help your business grow with purpose and impact.
          </p>
        </div>
        <div className="w-full lg:w-1/2 h-full lg:pt-[50px] pb-[20px] lg:-translate-x-[50px] -translate-y-[30px] lg:-translate-y-0 relative whyVfImg">
          <div className="bg-white h-fit p-6 rounded-tl-[50px] shadow-2xl mx-2 sm:mx-4 md:mx-6 lg:mx-0 flex justify-center items-center">
            <Image
              src={"/dmbg.avif"}
              alt={"Digital Marketing"}
              width={400}
              height={500}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
