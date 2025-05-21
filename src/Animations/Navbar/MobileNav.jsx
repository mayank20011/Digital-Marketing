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
          autoAlpha: 0,
        },
        {
          x: "0",
          autoAlpha: "1",
          ease: "none",
          duration: "0.2",
        }
      );

      // timeline play and revert
      hamBurger.addEventListener("click", () => {
        tl.play();
      });
      closeMobileNav.addEventListener("click", () => {
        tl.reverse();
      });

      mobileNavLink.forEach((link) => {
        link.addEventListener("click", () => {
          tl.reverse();
        });
      });
    });

    return () => {
      context.revert();
    };
  }, []);

  return null;
};

export default MobileNavAnimation;
