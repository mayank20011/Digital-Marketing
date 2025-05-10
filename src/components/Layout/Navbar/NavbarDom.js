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

    // requestAnimationFrame(() => {
    //   const tl2 = gsap.timeline({ delay: 0.8 });
    //   const tl = gsap.timeline({ paused: true });
    //   const closeButton = document.querySelectorAll(".closeNav");
    //   const openNav = document.querySelector(".openNav");
    //   const mobileNavLinks = document.querySelectorAll(".mobileNavLinks");

    //   tl.to(".mobileNav", {
    //     x: 0,
    //     ease: "bounce.out",
    //     duration: 0.3,
    //   });

    //   tl.to(mobileNavLinks, {
    //     x: 0,
    //     opacity: 1,
    //     stagger: 0.1,
    //     duration: 0.2,
    //     scale: 1,
    //     ease: "bounce.out",
    //   });

    //   tl.to(closeButton[0], {
    //     scale: 1,
    //     opacity: 1,
    //     duration: 0.1,
    //   });

    //   openNav.addEventListener("click", () => {
    //     console.log("click");
    //     tl.play();
    //   });

    //   closeButton.forEach((btn) => {
    //     btn.addEventListener("click", () => {
    //       tl.reverse();
    //     });
    //   });

    //   tl2.to(".logo", {
    //     scale: 1,
    //   });

    //   tl2.to(".pcNav", {
    //     y: 0,
    //     opacity: 1,
    //     stagger: 0.1,
    //     duration: 0.2,
    //   });

    //   tl2.to(".googleBtn", {
    //     x: 0,
    //     opacity: 1,
    //     duration: 0.2,
    //   });
    // });
  }, []);
  return null;
};

export default NavbarDom;
