import { bannerData } from "@/Data/homeData";
import ImgText from "./ImgText.js";
import Logo from "./Logo.js";
import BannerAnimation from "./BannerAnimation.js";
export default function Bannner() {
  return (
    <>
      <div className="bg-slate-700 hidden md:block overflow-y-hidden">
        <div className="custom-container py-4 text-white flex justify-between text-xs">
          <div className="flex gap-4">
            <ImgText
              url={"/mailLogo.png"}
              text={bannerData.email}
              alt={`Email Logo`}
            />
            <ImgText
              url={"/phoneLogo.png"}
              text={bannerData.phone}
              alt={`Phone Icon`}
            />
          </div>
          <div className="flex">
            <ImgText
              url={"/bannerClock.png"}
              text={bannerData.time}
              alt={`Clock Logo`}
              pr={true}
            />
            <div className="flex gap-4 pl-4">
              <Logo
                href={bannerData.fbUrl}
                url={"/fbLogo.png"}
                alt={"Facebook Logo"}
              />
              <Logo
                href={bannerData.igUrl}
                url={"/igLogo.png"}
                alt={"Instagram Logo"}
              />
              <Logo
                href={bannerData.ytUrl}
                url={"/ytLogo.png"}
                alt={"Youtube Logo"}
              />
            </div>
          </div>
        </div>
      </div>
      <BannerAnimation />
    </>
  );
}
