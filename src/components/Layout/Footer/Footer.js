import Link from "next/link";
import Image from "next/image";
import FooterLink from "./FooterLink";
import DomManipulationWithFooter from "./DomManipulationWithFooter";
export default function Footer() {
  return (
    <>
      <div className="bg-neutral-700 text-white">
        <div className="custom-container py-12 flex flex-col gap-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[2fr_1fr_1fr] 2xl:grid-cols-[2fr_1fr_1fr_1fr] gap-4 sm:gap-6 justify-between sm:grid-rows-[auto_auto_auto] xl:grid-rows-2 2xl:grid-rows-1 xl:grid-rows-auto">
            <div className="flex flex-col gap-2 md:gap-6 sm:col-span-2 xl:col-span-1 xl:pr-[40px] 2xl:pr-[60px] h-fit">
              <h1
                className="text-3xl font-bold"
                style={{
                  filter: "drop-shadow(2px 2px 2px oklch(.75 .183 55.934))",
                }}
              >
                VardaanFarms
              </h1>
              <p>
                We’d love to serve you with top-quality, customer-focused
                excellence.
              </p>
              <div className="border border-slate-100 border-b-0 opacity-30"></div>
              <div className="flex gap-2 items-center">
                <Image
                  src="/LocationLogo.png"
                  alt="Location Logo"
                  width={48}
                  height={48}
                />
                <p className="text-sm">
                  Ground Floor, Office No -19, VardaanFarms, Star Tower, Sec 30,
                  GuruGram
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-md">
              <div className="flex gap-2 items-center">
                <span className="w-[12px] h-[12px] bg-orange-400 rounded-full"></span>
                <h3 className="text-xl font-bold">Quicklinks</h3>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex gap-4 items-center">
                  <div className="border p-[3px] rotate-45 border-l-0 border-b-0 border-orange-400"></div>
                  <FooterLink href={"/"} className={"normalFooterNavLinks"}>
                    Home
                  </FooterLink>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="border p-[3px] rotate-45 border-l-0 border-b-0 border-orange-400"></div>
                  <FooterLink
                    href={"/about-us"}
                    className={"normalFooterNavLinks"}
                  >
                    About Us
                  </FooterLink>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="border p-[3px] rotate-45 border-l-0 border-b-0 border-orange-400"></div>
                  <FooterLink
                    href={"/contact-us"}
                    className={"normalFooterNavLinks"}
                  >
                    Contact Us
                  </FooterLink>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="border p-[3px] rotate-45 border-l-0 border-b-0 border-orange-400"></div>
                  <FooterLink
                    href={"/services"}
                    className={"normalFooterNavLinks"}
                  >
                    Services
                  </FooterLink>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="border p-[3px] rotate-45 border-l-0 border-b-0 border-orange-400"></div>
                  <FooterLink
                    href={"/privacy-policy"}
                    className={"normalFooterNavLinks"}
                  >
                    Privacy Policy
                  </FooterLink>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="border p-[3px] rotate-45 border-l-0 border-b-0 border-orange-400"></div>
                  <FooterLink
                    href={"/terms-and-conditions"}
                    className={"normalFooterNavLinks"}
                  >
                    Terms & Conditions
                  </FooterLink>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-md">
              <div className="flex gap-2 items-center">
                <span className="w-[12px] h-[12px] bg-orange-400 rounded-full"></span>
                <h3 className="text-xl font-bold">Our Services</h3>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex gap-4 items-center">
                  <div className="border p-[3px] rotate-45 border-l-0 border-b-0 border-orange-400"></div>
                  <FooterLink
                    href={"/business-development"}
                    className={"subServices"}
                  >
                    Business Development
                  </FooterLink>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="border p-[3px] rotate-45 border-l-0 border-b-0 border-orange-400"></div>
                  <FooterLink
                    href={"/digital-marketing"}
                    className={"subServices"}
                  >
                    Digital Marketing
                  </FooterLink>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="border p-[3px] rotate-45 border-l-0 border-b-0 border-orange-400"></div>
                  <FooterLink href={"/seo"} className={"subServices"}>
                    SEO
                  </FooterLink>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="border p-[3px] rotate-45 border-l-0 border-b-0 border-orange-400"></div>
                  <FooterLink
                    href={"/content-marketing"}
                    className={"subServices"}
                  >
                    Content Marketing
                  </FooterLink>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="border p-[3px] rotate-45 border-l-0 border-b-0 border-orange-400"></div>
                  <FooterLink
                    href={"/performance-marketing"}
                    className={"subServices"}
                  >
                    Performance Marketing
                  </FooterLink>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="border p-[3px] rotate-45 border-l-0 border-b-0 border-orange-400"></div>
                  <FooterLink
                    href={"/web-development"}
                    className={"subServices"}
                  >
                    Web Development
                  </FooterLink>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:col-span-2 gap-3 xl:col-span-3 2xl:col-span-1">
              <div className="flex flex-col gap-3">
                <h1 className="text-xl text-orange-400 font-bold">
                  Lets Connect !
                </h1>
                <p>
                  Stay connected with us! Follow us on social media for updates,
                  exclusive deals, and the latest trends. Let’s grow together!
                </p>
              </div>
              <div className="grid gap-4 grid-cols-2 w-fit">
                <a
                  href=""
                  className="px-4 p-2 border rounded-2xl flex gap-1 items-center border-orange-400 hover:border-orange-300 text-sm font-bold transition w-fit"
                >
                  <Image
                    src={"/facebookLogo.png"}
                    alt={"Face Book Logo"}
                    width={20}
                    height={20}
                    className=""
                  />
                  <span className="text-xs">Facebook</span>
                </a>
                <a
                  href=""
                  className="px-4 p-2 border rounded-2xl flex gap-1 items-center border-orange-400 hover:border-orange-300 text-sm font-bold transition w-fit"
                >
                  <Image
                    src={"/twitterLogo.png"}
                    alt={"Twitter Logo"}
                    width={20}
                    height={20}
                    className=""
                  />
                  <span className="text-xs">Twitter</span>
                </a>
                <a
                  href=""
                  className="px-4 p-2 border rounded-2xl flex gap-1 border-orange-400 hover:border-orange-300 text-sm font-bold transition w-fit items-center"
                >
                  <Image
                    src={"/igLogo.png"}
                    alt={""}
                    width={20}
                    height={20}
                    className=""
                  />
                  <span className="text-xs">Instagram</span>
                </a>
                <a
                  href=""
                  className="px-4 p-2 border rounded-2xl flex gap-1 border-orange-400 hover:border-orange-300 text-sm font-bold transition w-fit items-center"
                >
                  <Image
                    src={"/linkedinLogo.png"}
                    alt={""}
                    width={20}
                    height={20}
                    className=""
                  />
                  <span className="text-xs">Linkedin</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border border-b-0 opacity-50"></div>
          <p className="text-center">
            Copyright 2025 | All rights reserved |
            <Link href={"/privacy-policy"} className="hover:text-orange-600">
              {" PrivacyPolicy "}
            </Link>
            |
            <Link
              href={"/terms-and-conditions"}
              className="hover:text-orange-600"
            >
              {" Terms & Conditions"}
            </Link>
          </p>
        </div>
      </div>
      <DomManipulationWithFooter />
    </>
  );
}
