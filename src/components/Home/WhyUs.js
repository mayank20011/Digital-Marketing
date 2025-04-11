"use client";
import ReviewSwiper from "./ReviewSwiper";
import WhyUsSlide from "./SubComponents/WhyUsSlide";
import Link from "next/link";
export default function WhyUs() {
  return (
    <>
      <div className="custom-container flex flex-col gap-12">
        <div className="flex justify-center gap-12 flex-col items-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-center w-full lg:w-3/4">
            Success Stories How Feedback Drives Our Results
          </h1>

          <div className="flex flex-col lg:flex-row gap-6 md:gap-12 w-full items-center">
            <div className="flex flex-col gap-6 p-4 md:p-6 w-full xl:w-4/10 bg-black text-white rounded-2xl h-fit">
              <h1 className="text-xl text-center">
                What Our Client's Say About Us?
              </h1>
              <p className="text-center">
                We understand Your brand, deliver creative solutions, and truly
                care about results. Our expertise and responsiveness make Us
                a trusted partner in growing your business.
              </p>
              <Link
                href={"/"}
                className="bg-orange-300 text-lg w-fit px-4 py-2 rounded-lg mx-auto"
              >
                Contact us
              </Link>
            </div>
            <div className="w-full xl:w-6/10 overflow-hidden">
            <ReviewSwiper/>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:gap-12">
          <h5 className="text-center md:text-xl text-slate-600">
            Hundreds of companies have already built great products with Us
          </h5>
          <WhyUsSlide />
        </div>
      </div>
    </>
  );
}
