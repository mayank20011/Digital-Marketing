import Link from "next/link";
import ActiveLink from "./ActiveLink";
import MobileActiveLink from "./MobileActiveLink";
import { navbarServicesData } from "@/Data/homeData";
import ServicesTab from "./ServicesTab";
import NavbarDom from "./NavbarDom";
export default async function Navbar() {
  return (
    <>
      <nav className="overflow-hidden pt-2 relative bg-white">
        <div className="custom-container flex md:justify-between gap-2 overflow-hidden items-center">
          <div className="grow md:grow-0">
            <Link href="/">
              <img
                src="/vfLogo.png"
                alt="vardaan Farms Logo"
                className="hover:scale-115 transition w-[100px] logo"
              />
            </Link>
          </div>

          <div className="md:flex gap-2 items-center font-bold hidden overflow-hidden h-full px-2 py-2 rounded-full bg-slate-700 text-white">
            <ActiveLink href={"/"}>Home</ActiveLink>
            <ActiveLink href={"/about-us"}>About Us</ActiveLink>
            <ActiveLink href={"/contact-us"}>Contact Us</ActiveLink>
            <ActiveLink href={"/services"} className="servicesButton">
              <span className="servicesButton">Services</span>
            </ActiveLink>
          </div>

          <a
            href="https://www.google.com/maps/dir//Office+No.+19,+Vardaan+Farms,+Star+Tower,+Block+A,+Sector+30,+Gurugram,+Haryana+122001/@20.7572127,72.1080951,5z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d1900479e7709:0x4866e14afb28e0a6!2m2!1d77.0529858!2d28.4608128?entry=ttu&g_ep=EgoyMDI1MDQwMS4wIKXMDSoASAFQAw%3D%3D"
            className="bg-slate-700 text-white px-3 py-2 rounded-full h-fit self-center hover:scale-110 transition googleBtn text-sm"
            target="blank"
          >
            Locate Us
          </a>

          <img
            src="/navbarBars.png"
            alt=""
            className="w-[40px] h-[40px] self-center md:hidden openNav"
          />

          <div className="fixed max-w-[400px] w-4/5 sm:w-1/2 bg-white top-0 right-0 min-h-screen opacity-95 flex flex-col gap-2 md:hidden translate-x-full mobileNav z-50 overflow-x-hidden p-6">
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

        <div className="fixed hidden md:flex w-fit justify-center items-center transition duration-700 translate-y-[50px] left-1/2 -translate-x-1/2 serviceContainer h-[0px] overflow-hidden">
          <div className="w-[700px] bg-orange-300 text-white p-6 grid grid-cols-2 lg:grid-cols-3  gap-6 rounded-2xl">
            {navbarServicesData.map((data, id) => (
              <ServicesTab data={data} key={id} />
            ))}
          </div>
        </div>
      </nav>
      <NavbarDom />
    </>
  );
}
