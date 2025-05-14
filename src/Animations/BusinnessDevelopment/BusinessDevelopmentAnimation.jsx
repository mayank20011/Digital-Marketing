"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const BusinessDevelopmentAnimation = () => {
  useGSAP(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        [".businessdevelopmentHeroText h1", ".businessdevelopmentHeroText p"],
        { x: -100, autoAlpha: 0, scale: 0.5 },
        { autoAlpha: 1, scale: 1, x: 0, stagger: 0.3 }
      ).fromTo(
        ".bdHeroImg",
        { x: 300, autoAlpha: 0 },
        { x: 0, autoAlpha: 1 },
        0
      );

      const brandGrowth = gsap.timeline({
        scrollTrigger: {
          trigger: ".brandGrowth",
          scroller: "body",
          scrub: true,
          start: () => {
            return window.innerWidth > 768 ? "top 80%" : "top 90%";
          },
          end: () => {
            return window.innerWidth > 768 ? "top 40%" : "top -60%";
          },
        },
      });
      brandGrowth
        .fromTo(
          ".brandGrowthH",
          { y: 150, autoAlpha: 0 },
          { y: 0, autoAlpha: 1 }
        )
        .fromTo(".bgCard1", { y: 200, x: 100 }, { y: 0, x: 0 })
        .fromTo(".bgCard2", { y: -200, x: 100 }, { y: 0, x: 0 })
        .fromTo(".bgCard4", { y: 200, x: -100 }, { y: 0, x: 0 })
        .fromTo(".bgCard5", { y: -200, x: -100 }, { y: 0, x: 0 })
        .fromTo(
          ".bgCard3",
          { y: 80, autoAlpha: 0, scale: 0.5 },
          { y: 0, autoAlpha: 1, scale: 1 }
        );

      const letsCreate = gsap.timeline({
        scrollTrigger: {
          trigger: ".letsCreate",
          scroller: "body",
          scrub: true,
          start: "top 80%",
          end: () => {
            return window.innerWidth > 600 ? "top 30%" : "top 20%";
          },
        },
      });
      letsCreate
        .fromTo(
          ".letsCreateTextDiv",
          { x: 300, autoAlpha: 0, scale: 0.5 },
          { autoAlpha: 1, scale: 1, x: 0 }
        )
        .fromTo(
          ".letsCreate img",
          { autoAlpha: 0, x: -300, scale: 0.6 },
          { x: 0, scale: 1, autoAlpha: 1 },
          0
        )
        .fromTo(
          [".letsCreate h1", "letsCreate a"],
          { y: 100, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, stagger: 0.7 }
        );

      // business Research TImeline
      const businessResearch = gsap.timeline({
        scrollTrigger: {
          trigger: ".businessResearchCardContainer",
          scroller: "body",
          scrub: true,
          start: "top 80%",
          end: () => {
            return window.innerWidth > 600 ? "top 40%" : "top -50%";
          },
        },
      });

      businessResearch
        .fromTo(
          [
            ".businessResearchCard2",
            ".businessResearchCard4",
            ".businessResearchCard6",
          ],
          {y:200, autoAlpha:0 },
          {y:0,autoAlpha:1, stagger:0.3}
        )
        .fromTo(
          [
            ".businessResearchCard1",
            ".businessResearchCard3",
            ".businessResearchCard5",
          ],
          {y:-200, autoAlpha:0 },
          {y:0,autoAlpha:1, stagger:0.3},
          0
        );

      // context end here
    });

    return () => {
      context.revert();
    };
  }, []);
  return null;
};

export default BusinessDevelopmentAnimation;
