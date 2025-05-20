"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SEOAnimation = () => {
  useGSAP(() => {
    const context = gsap.context(() => {
      const heroTl = gsap.timeline();
      heroTl
        .fromTo(
          [".seoHero h1", ".seoHero p", ".seoHero a"],
          { autoAlpha: 0, y: "200%" },
          { autoAlpha: 1, y: 0, stagger: 0.3 }
        )
        .fromTo(
          ".seoHero Img",
          { scale: 0, x: 500, autoAlpha: 0 },
          { scale: 1, x: 0, autoAlpha: 1 },
          0
        );

      const bbtl = gsap.timeline({
        scrollTrigger: {
          trigger: ".seobb",
          scroller: "body",
          start: "top 80%",
          end: () => {
            return window.innerWidth < 768
              ? "top -150%"
              : window.innerWidth < 1024
              ? "top -80%"
              : "top -10%";
          },
          scrub: true,
        },
      });
      bbtl
        .fromTo(
          [".seobbh", ".seobbp"],
          { y: 100, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, stagger: 0.7 }
        )
        .fromTo(
          ".seobbcards",
          { y: 100, autoAlpha: 0, scale: 0 },
          { y: 0, autoAlpha: 1, stagger: 0.5, scale: 1 },
          0
        );

      const ourServicestl = gsap.timeline({
        scrollTrigger: {
          trigger: ".ourServices",
          scroller: "body",
          start: "top 100%",
          end: () => {
            return window.innerWidth < 768
              ? "top 0%"
              : window.innerWidth < 1024
              ? "top 40%"
              : "top 50%";
          },
          scrub: 2,
        },
      });
      ourServicestl
        .fromTo(
          [
            ".ourServicesLeftDiv div",
            ".ourServicesLeftDiv h4",
            ".ourServicesLeftDiv a",
          ],
          { autoAlpha: 0, y: 200, scale: 0 },
          { autoAlpha: 1, scale: 1, y: 0, stagger: 0.3 }
        )
        .fromTo(
          ".ourServicesCard-1",
          { y: -500, autoAlpha: 0 },
          { y: 0, autoAlpha: 1 }
        )
        .fromTo(
          ".ourServicesCard-2",
          { x: -500, autoAlpha: 0 },
          { x: 0, autoAlpha: 1 }
        )
        .fromTo(
          ".ourServicesCard-3",
          { y: 500, autoAlpha: 0 },
          { y: 0, autoAlpha: 1 }
        );

      const growthTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".GrowYourBusinesswithSmartSeo",
          scroller: "body",
          start: "top 80%",
          end: () => {
            return window.innerWidth < 768
              ? "top 0%"
              : window.innerWidth < 1024
              ? "top 40%"
              : "top 50%";
          },
          scrub: 2,
        },
      });

      growthTimeline
        .fromTo(".growYourBusinessText", { x: 500 }, { x: 0 })
        .fromTo(
          [
            ".growYourBusinessText h1",
            ".growYourBusinessText p",
            ".growYourBusinessText",
            ".growYourBusinessText .bulletPoints",
          ],
          { y: 200, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, stagger: 0.2 }
        )
        .fromTo(
          ".growBusinessimgesDiv",
          { y: -500, autoAlpha: 0 },
          { y: 0, autoAlpha: 1 }
        )
        .fromTo(
          ".growBusinessImg",
          { x: -500, autoAlpha: 0 },
          { x: 0, autoAlpha: 1 },
          0
        );

      const seoToolsTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".seoTools",
          scroller: "body",
          start: "top 80%",
          end: () => {
            return "top 50%";
          },
          scrub: 2,
        },
      });

      seoToolsTl.fromTo(
        [".seoToolsH", ".seoToolsP"],
        { y: 200, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, stagger: 0.2 }
      );

      // timeline for seo tools

      const dataDivParent = document.querySelectorAll(".dataDivParent");

      dataDivParent.forEach((ddprnt) => {
        const seoToolsDivTl = gsap.timeline({
          scrollTrigger: {
            trigger: ddprnt,
            scroller: "body",
            start: "top 80%",
            end: "top 70%",
            scrub: 2,
          },
        });
        seoToolsDivTl.fromTo(
          ddprnt.querySelectorAll(".dataDiv img, .dataDiv h1, .dataDiv p"),
          { autoAlpha: 0, y: 300, scale: 0 },
          { autoAlpha: 1, y: 0, scale: 1, stagger:0.2 }
        );
      });
    });

    return () => {
      context.revert();
    };
  }, []);
  return null;
};

export default SEOAnimation;
