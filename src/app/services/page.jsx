import FloatingBubbles from "@/components/Services/FloatingBubbles";
import HowWeCompleteProjects from "@/components/Services/HowWeCompleteProjects";
import ServiceBanner from "@/components/Services/ServiceBannner";
import ServiceCardsContainer from "@/components/Services/ServicesCardsContainer";

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-12">
      <ServiceBanner/>
      <FloatingBubbles/>
      <ServiceCardsContainer />
      <HowWeCompleteProjects/>
    </div>
  );
}
