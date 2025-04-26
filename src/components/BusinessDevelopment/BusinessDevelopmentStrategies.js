import Image from "next/image";
export default function BusinessDevelopmentStrategies() {
  return (
    <div className="custom-container flex flex-col gap-6 md:gap-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
        Strategic Steps to Elevate and Sustain Your Digital Brand Growth
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full md:w-9/10 lg:w-4/5 mx-auto">
        <div className="flex flex-col gap-4 text-white">
          <div className="p-6 rounded-2xl bg-black flex flex-col gap-6 hover:shadow-[3px_3px_3px_black] hover:bg-white hover:text-black transition duration-1000 grow">
            <span className="text-4xl font-bold bg-gradient-to-r from-orange-300 to-pink-600 bg-clip-text text-transparent">01</span>
            <h5 className="text-xl md:text-2xl lg:text-3xl">
              Define Clear Marketing Goals
            </h5>
            <p className="text-lg md:hidden">
              We start by understanding your vision and setting measurable goals
              that guide every marketing decision—no guesswork, just focused
              strategy.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-black flex flex-col gap-6 hover:shadow-[3px_3px_3px_black] hover:bg-white hover:text-black transition duration-1000 grow">
          <span className="text-4xl font-bold bg-gradient-to-r from-orange-300 to-pink-600 bg-clip-text text-transparent">02</span>
            <h5 className="text-xl md:text-2xl lg:text-3xl">
              Identify Your Target Audience
            </h5>
            <p className="text-lg md:hidden">
              Knowing who you serve is key. We dive deep into audience research
              to ensure your messaging connects with the right people at the
              right time.
            </p>
          </div>
        </div>
        <div className="bg-white flex flex-col gap-6 p-6 rounded-2xl text-black hover:shadow-[5px_5px_3px_white] hover:bg-black hover:text-white transition duration-1000">
          <div className="flex flex-col gap-12 grow">
          <span className="text-4xl font-bold bg-gradient-to-r from-orange-300 to-pink-600 bg-clip-text text-transparent">03</span>
            <h5 className="text-xl md:text-2xl lg:text-3xl">Build Online Presence</h5>
            <p className="text-lg md:hidden">
              From websites to social media, we create a consistent and
              professional presence that reflects your brand and builds lasting
              trust.
            </p>
          </div>
          <div className="grow">
            <Image
              src={"/bDsImg.webp"}
              alt={"Business Development Image"}
              className={"w-full"}
              width={300}
              height={200}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 text-white">
          <div className="p-6 rounded-2xl bg-black flex flex-col gap-6 grow hover:shadow-[3px_3px_3px_black] hover:bg-white hover:text-black transition duration-1000">
          <h6 className="text-4xl font-bold bg-gradient-to-r from-orange-300 to-pink-600 bg-clip-text text-transparent">04</h6>
            <h5 className="text-xl md:text-2xl lg:text-3xl">Execute Smart Campaigns</h5>
            <p className="text-lg md:hidden">
              We plan and run tailored campaigns using data-driven insights that
              drive real engagement, conversions, and long-term growth.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-black flex flex-col gap-6 grow hover:shadow-[3px_3px_3px_black] hover:bg-white hover:text-black transition duration-1000">
          <span className="text-4xl font-bold bg-gradient-to-r from-orange-300 to-pink-600 bg-clip-text text-transparent">05</span>
            <h5 className="text-xl md:text-2xl lg:text-3xl">Analyze & optimize Results</h5>
            <p className="text-lg md:hidden">
              Your growth doesn’t stop at launch. We monitor performance and
              refine strategies regularly to ensure you get the most from every
              effort.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
