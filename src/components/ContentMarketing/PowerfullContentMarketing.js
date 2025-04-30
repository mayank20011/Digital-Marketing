import ImgTextSlider from "./ImgTextSlider";
import { contentMarketingImgSlides as data } from "@/Data/contentMarketing";
export default function PowerfullContentMarketing() {
  return (
    <div className="flex flex-col gap-6 md:gap-12">
      <div className="custom-container">
        <h1
          className="font-bold text-2xl md:text-3xl lg:text-5xl text-center text-transparent"
          style={{ filter: "drop-shadow(2px 1px 1px black)" }}
        >
          <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text">
            Elevate Your Brand
          </span>
          <span className="text-white"> with Powerful Content Marketing</span>
        </h1>
      </div>
      <div className="px-[5%] sm:px-[10%] md:pr-0">
        <ImgTextSlider data={data} />
      </div>
    </div>
  );
}
