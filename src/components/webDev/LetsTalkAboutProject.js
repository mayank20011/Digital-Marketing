import Link from "next/link";
import LetsTalkAboutProjectAnimation from "./Animation/LetsTalkAboutProjectAnimation";
export default function LetsTalkAboutProject() {
  return (
    <>
      <div className="flex flex-col gap-6 md:gap-12 custom-container text-center pt-12 letsTalkAboutProject">
        <h1 className="text-2xl lg:text-4xl xl:text-6xl font-bold relative">
          LET&apos;S TALK ABOUT PROJECT
        </h1>
        <p className="relative">
          Let&apos;s bring it to life together. Whether you&apos;re starting
          from scratch or need expert help scaling your existing product,
          we&apos;re here to understand your goals and turn them into a powerful
          digital solution—designed for impact, growth, and real results.
        </p>
        <Link
          href="/contact-us"
          className="text-white bg-gradient-to-tr w-fit  mx-auto px-4 py-2 rounded-full hover:bg-gradient-to-tl transition duration-300 from-orange-300 to-pink-600 hover:shadow-[3px_3px_1px_black] hover:-translate-y-[10px] border relative"
        >
          Contact Us
        </Link>
      </div>
      <LetsTalkAboutProjectAnimation/>
    </>
  );
}
