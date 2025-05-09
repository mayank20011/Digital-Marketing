import CardsContainer from "@/components/ContactUs/CardsContainer";
import ContactUsForm from "@/components/ContactUs/ContactUsForm";
export default function BlogsPage() {
  return (
    <div className="flex flex-col gap-6 md:gap-12 pb-12">
      <CardsContainer/>
      <ContactUsForm/>
    </div>
  );
}
