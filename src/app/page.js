import WhyUs from "@/components/Home/WhyUs";
import "./globals.css";
import HeroSection from "@/components/Home/HeroSection";
import WhatWeDo from "@/components/Home/WhatWeDo";
import WhyWeAreBetter from "@/components/Home/WhyWeAreBetter";
import HowItWorks from "@/components/Home/HowItWorks";
import HomePageAnimation from "@/Animations/HomeAnimation/HomePageAnimation";
export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-12 md:gap-24">
        <HeroSection />
        <HowItWorks />
        <WhatWeDo />
        <WhyWeAreBetter />
        <WhyUs />
      </div>
      <HomePageAnimation/>
    </>
  );
}
