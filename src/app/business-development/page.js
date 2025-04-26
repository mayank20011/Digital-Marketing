import BusinessDevelopmentHero from "@/components/BusinessDevelopment/BusinessDevelopmentHero";
import BusinessDevelopmentStrategies from "@/components/BusinessDevelopment/BusinessDevelopmentStrategies";

export default function BusinessDevelopment() {
  return (
    <div className="flex flex-col gap-6 md:gap-12  bg-gradient-to-tr from-orange-100 to-pink-100 pb-12">
      <BusinessDevelopmentHero/>
      <BusinessDevelopmentStrategies/>
    </div>
  );
}
