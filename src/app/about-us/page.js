import AboutUsTopBanner from "@/components/AboutUs/TopBanner";
import WhoWeAre from "@/components/AboutUs/WhoWeAre";
import WhatWeDoAboutUs from "@/components/AboutUs/WhatWeDoAboutUs";
import WhyChooseUs from "@/components/AboutUs/WhyChooseUs";
import FoundersMessage from "@/components/AboutUs/FoundersMessage";
import OurImpact from "@/components/AboutUs/OurImpact";

export default function AboutUs(){
  return (
    <div className="flex flex-col gap-24 pb-12">
      <AboutUsTopBanner/>
      <WhoWeAre/>
      <WhatWeDoAboutUs/>
      <WhyChooseUs/>
      <FoundersMessage/>
      <OurImpact/>
    </div>
  );
}