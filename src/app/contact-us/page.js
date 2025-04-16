import CardsContainer from "@/components/ContactUs/CardsContainer";
import ContactUsForm from "@/components/ContactUs/ContactUsForm";
export default function BlogsPage() {
  return (
    <div className="flex flex-col gap-12">
      <CardsContainer />
      <ContactUsForm/>
    </div>
  );
}
