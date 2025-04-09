import WhyUsSlide from "./SubComponents/WhyUsSlide";

export default function WhyUs(){
  return <>
  <div className="custom-container flex flex-col gap-12">
    <h5 className="text-center md:text-xl text-slate-600">Hundreds of companies have already built great products with Us</h5>
    <WhyUsSlide/>
    <div className="min-h-screen"></div>
  </div>
  </>
}