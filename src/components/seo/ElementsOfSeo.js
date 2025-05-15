import { ElementsOfSeoCards as cards } from "@/Data/seoData";
import Image from "next/image";
export default function ElementsOfSeo() {
  return (
    <div className="">
      <div className="custom-container flex flex-col gap-6 text-center seobb">
        <h1 className="text-4xl font-bold seobbh relative">
          The Building Blocks of a Successful SEO Strategy
        </h1>
        <p className=" relative seobbp text-md lg:text-lg text-neutral-500">
          Every business is different. We create a plan that fits you, not the
          other way around.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, id) => (
            <div
              className="bg-gradient-to-t from-orange-300 to-pink-300 p-[2px] rounded-lg transition duration-300 flex hover:scale-102 hover:-translate-y-[5px] seobbcards"
              key={id}
            >
              <div className="flex flex-col gap-6 text-left p-4 rounded-lg bg-white grow hover:border-0 hover:shadow[2px_2px_2px_black]">
                <Image
                  src={card.src}
                  alt={card.alt}
                  width={80}
                  height={80}
                  className=""
                />
                <h3 className="text-2xl font-bold">{card.heading}</h3>
                <p className="grow">{card.pera}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
