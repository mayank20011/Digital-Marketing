"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const PerformanceMarketingAnimation = () => {
  useGSAP(() => {
    const context = gsap.context(() => {
      // herotl
      const heroTl = gsap.timeline();
      heroTl
        .fromTo(
          ".performanceMarketingHeroText",
          { autoAlpha: 0, scale: 0, x: "100%" },
          { autoAlpha: 1, scale: 1, x: 0 }
        )
        .fromTo(
          ".performanceMarketingHeroCards",
          { autoAlpha: 0, scale: 0, x: "-100%" },
          { autoAlpha: 1, scale: 1, x: 0 },
          0
        )
        .fromTo(
          ".heroCardContainerLeft",
          { y: 300, autoAlpha: 0 },
          { y: 0, autoAlpha: 1 }
        )
        .fromTo(
          ".heroCardContainerRight",
          { y: -300, autoAlpha: 0 },
          { y: 0, autoAlpha: 1 }
        );

      // quote timeline
      const quoteTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".quote",
          scroller: "body",
          scrub: 2,
          start: "top 80%",
          end: "top 50%",
        },
      });
      quoteTl.fromTo(
        ".quote p",
        { y: 100, autoAlpha: 0 },
        { y: 1, autoAlpha: 1, stagger: 0.3 }
      );

      // whyPerformanceMarketing
      const wPM = gsap.timeline({
        scrollTrigger: {
          trigger: ".whyPerformanceMarketing",
          scroller: "body",
          scrub: 2,
          start: "top 80%",
          end: () => {
            return window.innerWidth > 768
              ? "top 50%"
              : window.innerWidth > 500
              ? "top 30%"
              : "top 20%";
          },
        },
      });
      wPM
        .fromTo(
          ".whyPerformanceMarketingHeading",
          { y: -200, autoAlpha: 0 },
          { y: 0, autoAlpha: 1 }
        )
        .fromTo(
          ".whyPerformanceMarketingCards",
          { autoAlpha: 0, y: 200 },
          { autoAlpha: 1, y: 0, stagger: 0.3 }
        );

      // timelines for performance marketing services

      gsap.fromTo(
        ".psimage",
        { scale: 0, x: "-100%" },
        {
          scale: 1,
          x: 0,
          scrollTrigger: {
            trigger: ".psImgContainer",
            scroller: "body",
            scrub: 2,
            start: "top 80%",
            end: "top 60%",
          },
        }
      );

      gsap.fromTo(
        [".psImgContainer h1", ".psImgContainer p", ".psImgContainer a"],
        { scale: 0, x: "-100%" },
        {
          scale: 1,
          x: 0,
          scrollTrigger: {
            trigger: ".psImgContainer",
            scroller: "body",
            scrub: 2,
            start: "top 10%",
            end: "top -10%",
            stagger: 0.3,
          },
        }
      );

      const pmCards = document.querySelectorAll(".pmCardContainer");
      pmCards.forEach((card, id) => {
        gsap.fromTo(
          card.querySelectorAll(".pmCard img, .pmCard div"),
          { autoAlpha: 0, x: `${id % 2 == 0 ? "-100%" : "100%"}` },
          {
            autoAlpha: 1,
            x: 0,
            scrollTrigger: {
              trigger: card,
              scroller: "body",
              start: "top 80%",
              end: "top 70%",
              scrub:2,
            },
          }
        );
      });

      // context end here
    });

    return () => {
      context.revert();
    };
  }, []);
  return null;
};

export default PerformanceMarketingAnimation;
