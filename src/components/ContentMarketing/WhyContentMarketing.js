import Link from "next/link";

export default function WhyContentMarketing() {
  return (
    <div>
      <div className="custom-container text-center flex flex-col gap-6 md:gap-12">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
          style={{ filter: "drop-shadow(2px 1px 1px black)" }}
        >
          The Impact of{" "}
          <span className="bg-gradient-to-r from-orange-400 to-pink-600 text-transparent bg-clip-text">
            Quality Content
          </span>
        </h1>
        <p className="text-md md:text-lg">
          Strategic content not only improves your search engine rankings but
          also increases website traffic, enhances user engagement, and builds
          lasting credibility with your audience. It helps guide potential
          customers through the buyer journey, answers their questions, and
          positions your brand as a trusted expert in your industry. It’s not
          about publishing more—it’s about publishing smarter, with purpose and
          precision
        </p>
        <Link
          href={"/contact-us"}
          className="border w-fit mx-auto px-4 py-2 rounded-xl hover:-translate-y-[5px] hover:shadow-[5px_5px_1px_black] transition hover:bg-gradient-to-t  from-orange-400 to-pink-400 hover:text-white font-bold text-sm md:text-md"
        >
          Lets Connect
        </Link>
      </div>
    </div>
  );
}
