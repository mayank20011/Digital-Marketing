import BusinessDevelopmentAnimation from "@/Animations/BusinnessDevelopment/BusinessDevelopmentAnimation";
import BusinessDevelopmentHero from "@/components/BusinessDevelopment/BusinessDevelopmentHero";
import BusinessDevelopmentStrategies from "@/components/BusinessDevelopment/BusinessDevelopmentStrategies";
import BusinessResearchExpert from "@/components/BusinessDevelopment/BusinessResearchExpert";
import LetUsCreate from "@/components/BusinessDevelopment/LetUsCreate";
import LetsTalkAboutProject from "@/components/webDev/LetsTalkAboutProject";

export default function BusinessDevelopment() {
  return (
    <div className="flex flex-col gap-6 md:gap-12 pb-12">
      <BusinessDevelopmentHero/>
      <BusinessDevelopmentStrategies/>
      <LetUsCreate/>
      <BusinessResearchExpert/>
      <LetsTalkAboutProject/>
      <BusinessDevelopmentAnimation/>
    </div>
  );
}
