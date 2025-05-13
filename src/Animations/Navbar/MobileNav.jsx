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
          ease:"none",
          duration:"0.2"
        }
      );

      tl.fromTo(
        mobileNavLink,
        {
          autoAlpha:0,
          x: "100%",
          scale:0,
        },
        {
          x: 0,
          autoAlpha:1,
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
