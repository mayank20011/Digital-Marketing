"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingAnimation = () => {
  useGSAP(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(".dmHeroH", { autoAlpha: 0, y: 500 }, { autoAlpha: 1, y: 0 })
        .fromTo(
          ".dmHeroP",
          { autoAlpha: 0, scale: 0, x: -500 },
          { autoAlpha: 1, scale: 1, x: 0 },
          0
        )
        .fromTo(
          ".dmHeroLink",
          { autoAlpha: 0, y: -300 },
          { autoAlpha: 1, y: 0 },
          0
        );

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".whyVf",
          scroller: "body",
          start: () => {
            return window.innerWidth > 1024
              ? "top 70%"
              : window.innerWidth > 768
              ? "top 80%"
              : "top 90%";
          },
          end: () => {
            return window.innerWidth > 1024
              ? "top 20%"
              : window.innerWidth > 768
              ? "top 20%"
              : "top 0%";
          },
        },
      });

      tl2
        .fromTo(".whyVfText", { autoAlpha: 0, x: 500 }, { autoAlpha: 1, x: 0 })
        .fromTo(
          ".whyVfImg img",
          { autoAlpha: 0, x: -500, scale: 0 },
          { autoAlpha: 1, x: 0, scale: 1 }
        )
        .fromTo(
          [".whyVfText h1", ".whyVfText p"],
          { autoAlpha: 0, y: 200, scale: 0.7 },
          { autoAlpha: 1, y: 0, stagger: 0.7, scale: 1 }
        );

      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".howToChoose",
          scroller: "body",
          start: () => {
            return "top 80%";
          },
          end: () => {
            return window.innerWidth < 500
              ? "top -140%"
              : window.innerWidth < 768
              ? "top -170%"
              : "top 10%";
          },
          scrub: true,
          once: true,
        },
      });

      tl3
        .fromTo(
          ".howToChooseH",
          { autoAlpha: 0, scale: 0 },
          { autoAlpha: 1, scale: 1 }
        )
        .fromTo(
          ".howToCHooseCard-1",
          { x: "100%", y: "50%", autoAlpha: 0 },
          { x: 0, y: 0, autoAlpha: 1 }
        )
        .fromTo(
          ".howToCHooseCard-2",
          { y: "50%", autoAlpha: 0 },
          { y: 0, autoAlpha: 1 }
        )
        .fromTo(
          ".howToCHooseCard-3",
          { x: "-100%", y: "50%", autoAlpha: 0 },
          { x: 0, y: 0, autoAlpha: 1 }
        )
        .fromTo(
          ".howToCHooseCard-4",
          { x: "100%", y: "-50%", autoAlpha: 0 },
          { x: 0, y: 0, autoAlpha: 1 }
        )
        .fromTo(
          ".howToCHooseCard-5",
          { x: "-100%", y: "-50%", autoAlpha: 0 },
          { x: 0, y: 0, autoAlpha: 1 }
        );

      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".focusDigitalMarketing",
          scroller: "body",
          scrub: true,
          end: () => {
            return window.innerWidth > 768 ? "top 20%" : "top -70%";
          },
        },
      });
      tl4
        .fromTo(
          ".focusDigitalMarketing h1",
          { y: 200, autoAlpha: 0 },
          { y: 0, autoAlpha: 1 }
        )
        .fromTo(
          ".focusDigitalMarketing img",
          { autoAlpha: 0, scale: 0, y: "300px" },
          { autoAlpha: 1, scale: 1, y: 0 },
          0
        )
        .fromTo(
          ".focusDigitalMarketing p",
          { autoAlpha: 0, scale: 0, y: "-200px" },
          { autoAlpha: 1, scale: 1, stagger: 0.5, y: 0 },
          0
        );

      const tl5 = gsap.timeline({
        scrollTrigger: {
          trigger: ".dmProofText",
          scroller: "body",
          scrub: true,
          markers: true,
          end: ()=>{return window.innerWidth > 768 ? "top 20%" :"top -20%"},
        },
      });

      tl5.fromTo(
        ".dmProofText div",
        { scale: 0.4, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1 }
      );
      // context end here
    });

    return () => {
      context.revert();
    };
  }, []);

  return null;
};

export default DigitalMarketingAnimation;
