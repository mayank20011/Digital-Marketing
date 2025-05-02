import { pmHeroData } from "@/Data/performanceMarketingData";
export default function PerFormanceMarketingHeroSection() {
  return (
    <div className="flex flex-col gap-6 md:gap-12">
      <div className="custom-container flex flex-col gap-6 md:gap-12 md:flex-row items-center justify-between">
        <div className="order-2 md:order-1 w-full md:1/2 lg:w-3/5 flex flex-col gap-4">
          <h1
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 w-fit bg-clip-text text-transparent drop-shadow-[1px_1px_1px_black]`}
          >
            {pmHeroData.heading}
          </h1>
          <p className="text-white drop-shadow-[2px_1px_1px_black]">
            {pmHeroData.pera}
          </p>
          <span className="text-white font-bold drop-shadow-[2px_1px_1px_black] underline underline-offset-8">
            {pmHeroData.span}
          </span>
        </div>
        <div className="order-1 md:order-2 w-full md:1/2 lg:w-2/5 grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4 mt-12">
            {pmHeroData.cards.map((card, id) =>
              (id + 1) % 2 == 0 ? (
                <div
                  key={id}
                  className={`p-[2px] bg-gradient-to-tr from-orange-400 to-pink-400 rounded-lg h-fit shadow-lg`}
                >
                  <div className="flex flex-col gap-2 bg-white text-black p-2 rounded-lg">
                    <h5
                      className="w-fit p-1 px-2 text-sm rounded-md"
                      style={{
                        color: `${card.color}`,
                        background: `${card.bg}`,
                      }}
                    >
                      {card.heading}
                    </h5>
                    <p className="text-xs">{card.pera}</p>
                  </div>
                </div>
              ) : null
            )}
          </div>
          <div className="flex flex-col gap-4">
            {pmHeroData.cards.map((card, id) =>
              (id + 1) % 2 != 0 ? (
                <div
                  key={id}
                  className={`p-[2px] bg-gradient-to-tr from-orange-400 to-pink-400 rounded-lg h-fit shadow-lg`}
                >
                  <div className="flex flex-col gap-2 bg-white text-black p-2 rounded-lg">
                    <h5
                      className="w-fit p-1 px-2 text-sm rounded-md"
                      style={{
                        color: `${card.color}`,
                        background: `${card.bg}`,
                      }}
                    >
                      {card.heading}
                    </h5>
                    <p className="text-xs">{card.pera}</p>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
      <div className="custom-container">
        <div className="flex gap-4 md:w-3/4 mx-auto">
          <p className="text-[60px] font-bold h-[60px] -mt-[30px] text-transparent bg-gradient-to-tr from-orange-300 to-pink-400 bg-clip-text">
            "
          </p>
          <div className="flex flex-col gap-4">
            <p className="text-2xl md:text-3xl">
              I don&apos;t believe in wasting ad spend. Every rupee should bring you
              closer to real business growth—that&apos;s the mindset we apply to
              every campaign we run.
            </p>
            <p className="text-xl md:text-2xl text-right text-transparent w-fit bg-gradient-to-tr from-orange-400 to-pink-400 font-bold bg-clip-text drop-shadow-[1px_1px_1px_black] self-end">-Ashish Bhadoria</p>
          </div>
        </div>
      </div>
    </div>
  );
}
