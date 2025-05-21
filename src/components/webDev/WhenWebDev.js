import WebDevProcessCard from "./subComponents/webDevProcess";
import WhenCards from "./subComponents/WhenCards";

export default function WhenWebDev() {
  return (
    <div className="custom-container flex flex-col gap-24 whenWebDevContainer">
      <div className="flex flex-col gap-8 md:gap-12 whenWebDev">
        <div className="flex flex-col gap-2">
          <span className="whenHeading relative">WHEN</span>
          <h1 className="text-2xl sm:text-4xl xl:text-5xl font-bold whenHeading relative">
            Cases When a Company Need Web Devlopment Service
          </h1>
        </div>
        <WhenCards />
      </div>
      <div className="webDevProcessContainer">
        <div className="flex gap-12 flex-col lg:flex-row">
          <div className="flex flex-col gap-6 w-full lg:w-1/2 pt-12 webDevProcessText relative">
            <h1 className="text-2xl sm:text-4xl xl:text-5xl font-bold">
              Our Web Development Process
            </h1>
            <p className="sm:text-lg text-neutral-500">
              We build websites that do more than just look good—they perform,
              engage, and convert. Our process combines creativity, clean code,
              and client collaboration to deliver digital experiences that align
              perfectly with your brand and business goals.
            </p>
            <a href="" className="bg-gradient-to-tr text-white from-pink-600 to-orange-300 w-fit  px-4 py-2 rounded-2xl shadow-sm hover:scale-90 transition ">CONNECT WITH EXPERTS</a>
          </div>
          <WebDevProcessCard />
        </div>
      </div>
    </div>
  );
}
