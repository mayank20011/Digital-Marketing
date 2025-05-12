"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MobileNavAnimation = () => {
  useGSAP(() => {
    const context = gsap.context(() => {
      const hamBurger = document.querySelector(".hamBurger");
      const closeMobileNav = document.querySelector(".closeMobileNav");
      const mobileNav = document.querySelector(".mobileNav");
      const tl = gsap.timeline({ paused: true });
      const mobileNavLink = document.querySelectorAll(".mobileNavLinks");

      // timeline
      tl.fromTo(
        mobileNav,
        {
          x: "100%",
          opacity: 0,
        },
        {
          x: "0",
          opacity: "1",
          ease:"none",
          duration:"0.2"
        }
      );

      tl.fromTo(
        mobileNavLink,
        {
          opacity:0,
          x: 30,
          scale:0.8,
        },
        {
          x: 0,
          opacity:1,
          stagger: 0.1,
          ease:"none",
          scale:1,
        }
      );

      // timeline play and revert
      hamBurger.addEventListener("click", () => {
        tl.play();
      });
      closeMobileNav.addEventListener("click", () => {
        console.log("button clicked");
        tl.reverse();
      });

    });

    return () => {
      context.revert();
    };
  }, []);

  return null;
};

export default MobileNavAnimation;
