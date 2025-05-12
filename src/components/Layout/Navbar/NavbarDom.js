"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
const NavbarDom = () => {

  const pathName = usePathname();

  useEffect(() => {
    // for collecting desktop nav linke home about
    const desktopNav = document.querySelectorAll(".desktopNav");
    // for just service button
    const servicesButton = document.querySelector(".servicesButton");
    const body = document.querySelector("body");
    // the div which contain all the service links
    const servicesContainer = document.querySelector(".serviceContainer");
    // all service links
    const serviceLinks = document.querySelectorAll(".serviceNavLinks");

    if(pathName == "/business-development" || pathName == "/digital-marketing" || pathName == "/seo" || pathName == "/content-marketing" || pathName == "/performance-marketing" || pathName == "/web-development"){
      desktopNav[3].classList.add("bg-white", "text-black");
    }

    servicesButton.addEventListener("mouseenter", () => {
      servicesContainer.classList.add("h-fit");
      servicesContainer.classList.remove(
        "opacity-0",
        "translate-y-[50px]",
        "h-[0px]"
      );
    });
    body.addEventListener("click", () => {
      servicesContainer.classList.add(
        "opacity-0",
        "translate-y-[50px]",
        "h-[0px]"
      );
      servicesContainer.classList.remove("h-fit");
    });
    servicesContainer.addEventListener("mouseleave", () => {
      servicesContainer.classList.add(
        "opacity-0",
        "translate-y-[50px]",
        "h-[0px]"
      );
      servicesContainer.classList.remove("h-fit");
    });
    
    serviceLinks.forEach((link) => {
      link.addEventListener("click", () => {
        desktopNav[3].classList.add("bg-white", "text-black");
      });
    });

    desktopNav.forEach((link, index) => {
      if (index != 3) {
        link.addEventListener("click", () => {
          desktopNav[3].classList.remove("bg-white", "text-black");
        });
      }
    });

  }, []);
  return null;
};

export default NavbarDom;
