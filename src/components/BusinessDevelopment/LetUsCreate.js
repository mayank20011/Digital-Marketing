import Image from "next/image";
import Link from "next/link";
export default function LetUsCreate(){
  return (
    <div className="custom-container flex gap-12 items-center bg-black text-white p-4 sm:p-8 md:px-16  rounded-2xl flex-col md:flex-row">
    <div className="flex flex-col gap-6 md:gap-12 w-full md:w-1/2 order-2 md:order-1">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold lg:text-5xl">Let's Build Your Business Growth Strategy</h1>
      <Link href={"/contact-us"} className="px-4 py-2 border w-fit rounded-2xl transition hover:-translate-y-[10px] hover:text-black hover:bg-gradient-to-r from-orange-600 to-pink-300 font-bold hover:border-black hover:shadow-[3px_3px_2px_white]">Contact Us</Link>
    </div>
    <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
      <Image src={"/ux-contact.webp"} alt={"Lets connect Image"} width={400} height={400} style={{filter:"drop-shadow(3px 3px 3px white)"}}/>
    </div>
    </div>
  );
}