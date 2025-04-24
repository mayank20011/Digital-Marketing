import LetsTalkAboutProject from "@/components/webDev/LetsTalkAboutProject";
import OurAproach from "@/components/webDev/OurAproach";
import TechStack from "@/components/webDev/TechStack";
import WebDevBanner from "@/components/webDev/webDevBanner";
import WhenWebDev from "@/components/webDev/WhenWebDev";

export default function WebDevelopmentPage() {
  return (
    <div className="flex flex-col gap-12 py-6 md:py-12">
      <WebDevBanner />
      <WhenWebDev />
      <OurAproach />
      <TechStack />
      <LetsTalkAboutProject/>
    </div>
  );
}
