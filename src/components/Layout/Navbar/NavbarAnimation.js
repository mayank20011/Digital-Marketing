"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NavbarAnimation = () => {
  useGSAP(() => {
    
    const servicesButton = document.querySelector(".servicesButton");
    const body = document.querySelector("body");
    const servicesContainer = document.querySelector(".serviceContainer");
    servicesButton.addEventListener("mouseenter", () => {
      servicesContainer.classList.add("md:flex");
      servicesContainer.classList.remove("opacity-0", "translate-y-[50px]");
    });
    body.addEventListener("click",()=>{
      servicesContainer.classList.add("opacity-0", "translate-y-[50px]");
    })
    servicesContainer.addEventListener("mouseleave",()=>{
      servicesContainer.classList.add("opacity-0", "translate-y-[50px]");
    })

    requestAnimationFrame(() => {
      const tl2 = gsap.timeline({ delay: 0.8 });
      const tl = gsap.timeline({ paused: true });
      const closeButton = document.querySelectorAll(".closeNav");
      const openNav = document.querySelector(".openNav");
      const mobileNavLinks = document.querySelectorAll(".mobileNavLinks");

      tl.to(".mobileNav", {
        x: 0,
        ease: "bounce.out",
        duration: 0.3,
      });

      tl.to(mobileNavLinks, {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.2,
        scale: 1,
        ease: "bounce.out",
      });

      tl.to(closeButton[0], {
        scale: 1,
        opacity: 1,
        duration: 0.1,
      });

      openNav.addEventListener("click", () => {
        console.log("click");
        tl.play();
      });

      closeButton.forEach((btn) => {
        btn.addEventListener("click", () => {
          tl.reverse();
        });
      });

      tl2.to(".logo", {
        scale: 1,
      });

      tl2.to(".pcNav", {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.2,
      });

      tl2.to(".googleBtn", {
        x: 0,
        opacity: 1,
        duration: 0.2,
      });
    });
  }, []);
  return null;
};

export default NavbarAnimation;
