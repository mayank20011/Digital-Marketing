"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomePageAnimation = () => {
  useGSAP(() => {
    const context = gsap.context(() => {
      // hero timeline
      const homeHeroText = document.querySelectorAll(".homeHeroText");
      const homeHeroImg = document.querySelector(".homeHeroImg");
      const heroTl = gsap.timeline();
      heroTl.fromTo(
        homeHeroImg,
        {
          autoAlpha: 0,
          scale: 0.7,
          x: -200,
        },
        { autoAlpha: 1, scale: 1, duration: 0.5, ease: "none", x: 0 }
      );
      heroTl.fromTo(
        homeHeroText,
        {
          autoAlpha: 0,
          y: 50,
        },
        { autoAlpha: 1, y: 0, stagger: 0.3, ease: "none" }
      );
    });

    // how it works timeline 1
    const hIWtl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".hiwDiv",
        scroller: "body",
        start: "top 80%",
        end: "top 20%",
        scrub: 3,
      },
    });
    const hiwh = document.querySelector(".hiwHeading");
    const hiwp = document.querySelector(".hiwPera");
    const hiwcards = document.querySelectorAll(".hiwCards");

    hIWtl1
      .fromTo(hiwh, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
      .fromTo(hiwp, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
      .fromTo(
        hiwcards,
        { autoAlpha: 0, y: 100 },
        { autoAlpha: 1, y: 0, stagger: 0.3, ease: "power2.out" }
      );

    // howitworks tl2
    const hIWtl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".hiwDiv2",
        scroller: "body",
        start: "top 80%",
        end: "top 10%",
        scrub: 3,
      },
    });

    hIWtl2.fromTo(".hiwGrowthImg",{ autoAlpha: 0, x: -250, scale: 0 },{ autoAlpha: 1, x: 0, scale: 1 });
    hIWtl2.fromTo(".hiw2txt h1",{ autoAlpha:0, y:50},{autoAlpha:1, y:0})
    hIWtl2.fromTo(".hiw2txt p",{ scale:0.7, autoAlpha:0, y:50},{scale:1, y:0, autoAlpha:1})
    hIWtl2.fromTo(".hiw2txtlink",{ scale:0.5, autoAlpha:0, y:70},{scale:1, y:0, autoAlpha:1})
    
    const hIWtl3 = gsap.timeline({
      scrollTrigger:{
        trigger: ".hiwDiv2",
        scroller: "body",
        start: "top 80%",
        end: "top 10%",
        scrub: 3,
        markers: true,
      }
    });

    hIWtl3.fromTo(".rocketh",{autoAlpha:0, y:-20},{autoAlpha:1, y:0})
    .fromTo(".rocketp",{autoAlpha:0, scale:0},{ autoAlpha:1, scale:1})
    // .fromTo(".rocketpoints",{},{})
    // .fromTo(".rocketButton",{},{})



    return () => {
      context.revert();
    };
  }, []);
  return null;
};

export default HomePageAnimation;
