import ContentmarketingBanner from "@/components/ContentMarketing/ContentmarketingBanner";
import MarketInsights from "@/components/ContentMarketing/MarketInsights";
import OurProcess from "@/components/ContentMarketing/OurProcess";
import PowerfullContentMarketing from "@/components/ContentMarketing/PowerfullContentMarketing";
import WhyContentMarketing from "@/components/ContentMarketing/WhyContentMarketing";
import LetsTalkAboutProject from "@/components/webDev/LetsTalkAboutProject";

export default function ContentMarketingPage(){
  return (<div className=" w-full min-h-screen pb-6 md:pb-12 flex flex-col gap-12 md:gap-24">
    <ContentmarketingBanner/>
    <MarketInsights/>
    <OurProcess/>
    <WhyContentMarketing/>
    <PowerfullContentMarketing/>
    <LetsTalkAboutProject/>
  </div>);
}