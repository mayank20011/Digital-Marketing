"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const LetsTalkAboutProjectAnimation = () => {
  useGSAP(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".letsTalkAboutProject",
          scroller: "body",
          scrub: 2,
          start: "top 70%",
          end: "top 50%",
        },
      });
      tl.fromTo(
        [
          ".letsTalkAboutProject h1",
          ".letsTalkAboutProject a",
          ".letsTalkAboutProject p",
        ],
        { y: 100, autoAlpha: 0, scale: 0 },
        { y: 0, autoAlpha: 1, scale: 1, stagger:0.2}
      );
    });

    return () => {
      context.revert();
    };
  }, []);

  return null;
};

export default LetsTalkAboutProjectAnimation;
