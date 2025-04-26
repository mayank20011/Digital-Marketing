import DmProof from "@/components/DigitalMarketing/DmProof";
import FocusedDigitalMarketingStrategy from "@/components/DigitalMarketing/FocusedDmStrategy";
import HowToChooseDm from "@/components/DigitalMarketing/HowToChooseDm";
import DigitalMarketingTopBanner from "@/components/DigitalMarketing/TopBanner";
import WhyUsDigitalMarketing from "@/components/DigitalMarketing/WhyUsDigitalMarketing";

export default function DigiTalMarketingPage() {
  return (
    <div className="flex flex-col gap-6 md:gap-12">
      <DigitalMarketingTopBanner />
      <WhyUsDigitalMarketing />
      <HowToChooseDm/>
      <FocusedDigitalMarketingStrategy/>
      <DmProof/>
    </div>
  );
}
