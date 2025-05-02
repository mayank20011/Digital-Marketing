import PerFormanceMarketingHeroSection from "@/components/performanceMarketing/PMHero";
import PMServices from "@/components/performanceMarketing/PMServices";
import WhyPerformanceMarketing from "@/components/performanceMarketing/WhyPerformanceMarketing";

export default function PerformanceMarketingPage(){
  return (<div className="flex flex-col gap-12 md:gap-12 py-6 md:py-12">
    <PerFormanceMarketingHeroSection/>
    <WhyPerformanceMarketing/>
    <PMServices/>
  </div>);
}