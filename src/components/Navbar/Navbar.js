import Link from "next/link";
import ActiveLink from "./ActiveLink";
import MobileActiveLink from "./MobileActiveLink";
import NavbarAnimation from "./NavbarAnimation";
export default async function Navbar() {
  return (
    <>
      <nav className="bg-white py-2">
        <div className="custom-container flex md:justify-between gap-2">
          
          <div className="grow md:grow-0">
            <Link href="/">
              <img
                src="/vfLogo.png"
                alt="vardaan Farms Logo"
                className="hover:scale-115 transition w-[100px] logo scale-0"
              />
            </Link>
          </div>

          <div className="md:flex gap-6 items-center font-bold hidden ">
            <ActiveLink href={"/"}>Home</ActiveLink>
            <ActiveLink href={"/about-us"}>About Us</ActiveLink>
            <ActiveLink href={"/contact-us"}>Contact Us</ActiveLink>
            <ActiveLink href={"/blogs"}>Blogs</ActiveLink>
            <ActiveLink href={"/services"}>Services</ActiveLink>
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

          <div className="absolute max-w-[400px] w-4/5 sm:w-1/2 p-6 bg-white top-0 right-0 min-h-screen opacity-95 flex flex-col gap-6 md:hidden translate-x-full mobileNav z-50">
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
            <MobileActiveLink href={"/blogs"} >Blogs</MobileActiveLink>
            <MobileActiveLink href={"/services"}>Services</MobileActiveLink>
          </div>

        </div>
      </nav>
      <NavbarAnimation/>
    </>
  );
}
