"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContentMarketingAnimation = () => {
  useGSAP(() => {
    const context = gsap.context(() => {
      // tl banner
      const heroTl = gsap.timeline();
      heroTl
        .fromTo(
          ".heroTextDiv",
          { autoAlpha: 0, x: "100%" },
          { autoAlpha: 1, x: 0 }
        )
        .fromTo(
          ".heroImg",
          { autoAlpha: 0, x: "-100%", scale: 0 },
          { autoAlpha: 1, x: 0, scale: 1 }
        )
        .fromTo(
          [".heroTextDiv h1", ".heroTextDiv p", ".heroTextDiv a"],
          { scale: 0, autoAlpha: 0, y: 100 },
          { scale: 1, autoAlpha: 1, y: 0, stagger: 0.1 }
        );

      // solutions tl
      const solutionTl = gsap.timeline({
        scrollTrigger: {
          scroller: "body",
          trigger: ".marketingContainer",
          scrub: 2,
          start: "top 80%",
          end: () => {
            return window.innerWidth > 1024
              ? "top 30%"
              : window.innerWidth > 768
              ? "top 0%"
              : "top -20%";
          },
          once: true,
        },
      });

      solutionTl.fromTo(
        ".marketingHeading",
        { x: "-100px", autoAlpha: 0 },
        { x: 0, autoAlpha: 1 }
      );

      solutionTl
        .fromTo(
          ".solutionCards-1",
          { autoAlpha: 0, x: "100%", y: "50%" },
          { autoAlpha: 1, x: 0, y: 0 },
          0
        )
        .fromTo(
          ".solutionCards-2",
          { autoAlpha: 0, y: "50%" },
          { autoAlpha: 1, y: 0 },
          0
        )
        .fromTo(
          ".solutionCards-3",
          { autoAlpha: 0, x: "-100%", y: "50%" },
          { autoAlpha: 1, x: 0, y: 0 },
          0
        )
        .fromTo(
          ".solutionCards-4",
          { autoAlpha: 0, y: "-50%", x: "100%" },
          { autoAlpha: 1, x: 0, y: 0 },
          0
        )
        .fromTo(
          ".solutionCards-5",
          { autoAlpha: 0, y: "-50%" },
          { autoAlpha: 1, y: 0 },
          0
        )
        .fromTo(
          ".solutionCards-6",
          { autoAlpha: 0, y: "-50%", x: "-100%" },
          { autoAlpha: 1, x: 0, y: 0 },
          0
        );

      // how we work tl

      const howWeWorkTl = gsap.timeline({
        scrollTrigger: {
          scroller: "body",
          trigger: ".ourProcess",
          scrub: 2,
          start: "top 80%",
          end: () => {
            return window.innerWidth > 1024
              ? "top 30%"
              : window.innerWidth > 768
              ? "top 0%"
              : "top -20%";
          },
          once: true,
        },
      });

      howWeWorkTl
        .fromTo(
          ".ourProcessImg ",
          { autoAlpha: 0, scale: 0, y: -200 },
          { autoAlpha: 1, y: 0, scale: 1 }
        )
        .fromTo(
          [".ourProcessData h4", ".ourProcessData p", ".ourProcessData h6"],
          { autoAlpha: 0, scale: 0, y: 200 },
          { autoAlpha: 1, scale: 1, y: 0, stagger: 0.1 },
          0
        );

      const qualtiContentTl = gsap.timeline({
        scrollTrigger: {
          scroller: "body",
          trigger: ".qualityContent",
          scrub: 2,
          start: "top 80%",
          end: "top 50%",
          once: true,
        },
      });

      qualtiContentTl.fromTo(
        [".qualityContent h1", ".qualityContent p", ".qualityContent a"],
        { opacity: 0, scale: 0, y: 100 },
        { scale: 1, y: 0, opacity: 1, stagger: 0.3 }
      );

      // powerfull content marketing
      const powerfullcmTl = gsap.timeline({
        scrollTrigger: {
          scroller: "body",
          trigger: ".powerfullContentMarketing",
          scrub: 2,
          start: "top 80%",
          end: "top 50%",
        },
      });

      powerfullcmTl
        .fromTo(
          ".powerfullContentMarketingh1",
          { scale: 0, autoAlpha: 0, y: 200, x: 200 },
          { scale: 1, autoAlpha: 1, y: 0, x: 0 }
        )
        .fromTo(".powerfullContentMarketingSlides", { x: "100%" }, { x: 0 });
    });

    return () => {
      context.revert();
    };
  }, []);

  return null;
};

export default ContentMarketingAnimation;
