import WhyUs from "@/components/Home/WhyUs";
import "./globals.css";
import HomeAnimation from "./HomeAnimation";
import HeroSection from "@/components/Home/HeroSection";
import WhatWeDo from "@/components/Home/WhatWeDo";
import WhyWeAreBetter from "@/components/Home/WhyWeAreBetter";
import HowItWorks from "@/components/Home/HowItWorks";
export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-12 md:gap-24">
        <HeroSection />
        <HowItWorks/>
        <WhatWeDo/>
        <WhyWeAreBetter/>
        <WhyUs />
      </div>
      <HomeAnimation />
    </>
  );
}
