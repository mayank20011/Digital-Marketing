import Image from "next/image";
import Link from "next/link";

export default function ContentmarketingBanner() {
  return (
    <div>
      <div className="custom-container flex gap-6 items-center flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col gap-6 order-2 md:order-1">
          <h1
            style={{ filter: "drop-shadow(1px 1px 1px black)" }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white"
          >
            <span className="text-7xl">C</span>ontent{" "}
            <span className="bg-gradient-to-r from-orange-400 to-pink-600 text-transparent bg-clip-text">
              That Converts
            </span>{" "}
            Visitors
          </h1>
          <p
            className="text-white"
            style={{ filter: "drop-shadow(2px 2px 1px black)" }}
          >
            We create SEO-rich blogs, web pages, and digital assets tailored to
            your brand voice — designed to boost search rankings, build trust,
            and turn readers into customers.
          </p>
          <Link
            href={"/contact-us"}
            className="text-white text-center rounded-full border border-slate-200 md:text-xl hover:shadow-[5px_5px_2px_black] transition py-2 hover:-translate-y-[5px] bg-gradient-to-r from-orange-400 to-pink-600 w-fit px-4"
            style={{ filter: "drop-shadow(2px 2px 2px black)" }}
          >
            Get a Free Audit
          </Link>
        </div>
        <Image
          src={"/collateral-banner.webp"}
          alt={"smartphones image"}
          width={800}
          height={800}
          className="w-full md:w-1/2 order-1 md:order-2"
          style={{ filter: "drop-shadow(5px 5px 2px black)" }}
        />
      </div>
    </div>
  );
}
