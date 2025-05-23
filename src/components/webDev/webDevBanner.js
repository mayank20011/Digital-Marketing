import Image from "next/image";
import Link from "next/link";
export default function WebDevBanner() {
  return (
    <div className="flex gap-6 md:gap-12 flex-col lg:flex-row custom-container">
      <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-center order-2 md:order-1 webHeroText">
        <h1
          className="text-2xl md:text-3xl lg:text-5xl font-bold relative opacity-0"
          style={{ filter: "drop-shadow(2px 2px 1px white)" }}
        >
          <span className="">Web Development</span> Services
        </h1>
        <p className="md:text-lg text-neutral-500 relative opacity-0">
          We build high-performing, secure, and scalable web solutions designed
          to grow with your business. Whether you&apos;re starting fresh, revamping
          your site, or optimizing its performance—our front-end and back-end
          experts are here to bring your digital vision to life
        </p>
        <Link
          href="/contact-us"
          className="px-4 py-2 bg-gradient-to-tr from-orange-300 to-pink-500 w-fit rounded-2xl shadow-md hover:scale-90 transition relative opacity-0 hover:shadow-[3px_3px_1px_black]"
        >
          Get In Touch
        </Link>
      </div>
      <div className="w-full lg:w-1/2">
        <Image
          src={"/web-banner.webp"}
          alt={"web-banner"}
          className={"webDevHeroImg relative opacity-0"}
          height={650}
          width={900}
          priority
        />
      </div>
    </div>
  );
}
