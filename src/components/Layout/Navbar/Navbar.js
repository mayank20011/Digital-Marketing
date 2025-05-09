import Link from "next/link";
import ActiveLink from "./ActiveLink";
import MobileActiveLink from "./MobileActiveLink";
import NavbarAnimation from "./NavbarAnimation";
import { navbarServicesData } from "@/Data/homeData";
import Image from "next/image";
export default async function Navbar() {
  return (
    <>
      <nav className="bg-white overflow-hidden py-2 relative">
        
        <div className="custom-container flex md:justify-between gap-2 overflow-hidden items-center ">
          <div className="grow md:grow-0">
            <Link href="/">
              <img
                src="/vfLogo.png"
                alt="vardaan Farms Logo"
                className="hover:scale-115 transition w-[100px] logo scale-0"
              />
            </Link>
          </div>

          <div className="md:flex gap-6 items-center font-bold hidden overflow-hidden">
            <ActiveLink href={"/"}>Home</ActiveLink>
            <ActiveLink href={"/about-us"}>About Us</ActiveLink>
            <ActiveLink href={"/contact-us"}>Contact Us</ActiveLink>
            <ActiveLink href={"/services"} className="servicesButton"><span className="servicesButton">Services</span></ActiveLink>
          </div>

          <a
            href="https://www.google.com/maps/dir//Office+No.+19,+Vardaan+Farms,+Star+Tower,+Block+A,+Sector+30,+Gurugram,+Haryana+122001/@20.7572127,72.1080951,5z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d1900479e7709:0x4866e14afb28e0a6!2m2!1d77.0529858!2d28.4608128?entry=ttu&g_ep=EgoyMDI1MDQwMS4wIKXMDSoASAFQAw%3D%3D"
            className="bg-slate-700 text-white px-4 py-2 text-sm font-bold rounded-md h-fit self-center hover:scale-110 transition googleBtn translate-x-[30px] opacity-0"
            target="blank"
          >
            Locate Us
          </a>

          <img
            src="/navbarBars.png"
            alt=""
            className="w-[40px] h-[40px] self-center md:hidden openNav"
          />

          <div className="fixed max-w-[400px] w-4/5 sm:w-1/2 p-6 bg-white top-0 right-0 min-h-screen opacity-95 flex flex-col gap-6 md:hidden translate-x-full mobileNav z-50 overflow-x-hidden ">
            <img
              src="/close.png"
              alt="X Logo"
              width={40}
              height={40}
              className="self-end hover:scale-90 transition closeNav scale-0 opacity-0"
            />
            <MobileActiveLink href={"/"}>Home</MobileActiveLink>
            <MobileActiveLink href={"/about-us"}>About Us</MobileActiveLink>
            <MobileActiveLink href={"/contact-us"}>Contact Us</MobileActiveLink>
            <MobileActiveLink href={"/services"}>Services</MobileActiveLink>
          </div>
        </div>

        <div className="serviceContainer fixed md:flex w-fit justify-center items-center z-[1000] transition duration-700 translate-y-[50px] opacity-0 left-1/2 -translate-x-1/2">
          <div className="w-[700px] bg-orange-300 text-white p-6 grid grid-cols-2 lg:grid-cols-3  gap-6 rounded-2xl">
            {navbarServicesData.map((data, id) => (
              <Link href={data.link} key={id} className="flex gap-4 hover:-translate-y-[2px] transition">
                <Image
                  src={data.src}
                  alt={data.alt}
                  height={50}
                  width={50}
                  className={"aspect-square h-[50px] w-[50px]"}
                />
                <div className="flex flex-col gap-1">
                  <h1 className="font-bold">{data.heading}</h1>
                  <p className="text-sm text-neutral-500">{data.pera}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </nav>
      <NavbarAnimation />
    </>
  );
}
