"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WebDevelopmentAnimation = () => {
  useGSAP(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".webDevHeroImg",
        {
          autoAlpha: 0,
          y: "-500px",
        },
        { autoAlpha: 1, y: 0 }
      );
      tl.fromTo(
        [".webHeroText h1", ".webHeroText p", ".webHeroText a"],
        { autoAlpha: 0, x: -500 },
        { autoAlpha: 1, x: 0, stagger: 0.3 },
        0
      );

      // our approach
      const ourApproactTl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".ourApproach",
            scroller: "body",
            scrub: 2,
            start: "top 80%",
            end: "top 60%",
          },
        })
        .fromTo(
          ".ourApproachHeading",
          { y: -200, autoAlpha: 0 },
          { y: 1, autoAlpha: 1 }
        );

      const approachCards = document.querySelectorAll(".cardParent");

      approachCards.forEach((card, id) => {
        gsap.fromTo(
          card.querySelector(".ourApproachCards"),
          {
            autoAlpha: 0,
            x: `${id == 0 ? "100%" : id == 1 ? 0 : "-100%"}`,
            y: `${id == 1 ? "100%" : 0}`,
          },
          {
            x: 0,
            y: 0,
            autoAlpha: 1,
            scrollTrigger: {
              start: "top 80%",
              end: "top 40%",
              scrub: true,
              scroller: "body",
              trigger: card,
            },
          }
        );
      });

      // our tech stack
      const techStackTl = gsap.timeline({
        scrollTrigger: {
          scroller: "body",
          trigger: ".ourTechStack",
          scrub: 2,
          start: "top 80%",
          end: ()=>{return window.innerWidth < 500 ? "top -20%" : window.innerWidth < 768 ? "top 0":"top 20%"},
        },
      });
      techStackTl.fromTo([
        ".ourTechStack h1",
        ".ourTechStack p",
        ".ourTechStack div",
      ],{autoAlpha:0, y:200},{autoAlpha:1, y:0, stagger:0.3});
    });
    
    return () => {
      context.revert();
    };
  }, []);

  return null;
};

export default WebDevelopmentAnimation;
