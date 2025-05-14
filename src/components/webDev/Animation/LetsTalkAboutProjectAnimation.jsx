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
          scrub: true,
          start:"top 70%",
          end:"top 50%"
        },
      });
      tl.fromTo(
        ".letsTalkAboutProject h1",
        { y: 200, autoAlpha: 0 },
        { y: 0, autoAlpha: 1 }
      )
        .fromTo(
          ".letsTalkAboutProject a",
          { y: -200, autoAlpha: 0 },
          { y: 0, autoAlpha: 1 },
          0
        )
        .fromTo(".letsTalkAboutProject p", { scale: 0.7 }, { scale: 1 });
    });

    return () => {
      context.revert();
    };
  }, []);

  return null;
};

export default LetsTalkAboutProjectAnimation;
