"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutUsAnimation = () => {
  useGSAP(() => {
    const context = gsap.context(() => {
      // hero section animation
      const heroAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: ".aboutHero",
          scroller: "body",
        },
      });
      heroAnimation.fromTo(
        [".aboutHeroH", ".aboutHeroP", ".aboutHeroLink"],
        { autoAlpha: 0, scale: 0.5, y: 700 },
        { autoAlpha: 1, scale: 1, y: 0, stagger: 0.3 }
      );

      // who we are animation
      const whoWeAre = gsap.timeline({
        scrollTrigger: {
          trigger: ".whoWeAre",
          scroller: "body",
          scrub: 3,
          start: () => {
            return window.innerWidth > 768 ? "top 70%" : "top 80%";
          },
          end: () => {
            return window.innerWidth > 768 ? "top 10%" : "top -50%";
          },
        },
      });
      whoWeAre
        .fromTo(".whoWeAreH", { autoAlpha: 0, y: 200 }, { autoAlpha: 1, y: 0 })
        .fromTo(
          ".whoWeAreP",
          { autoAlpha: 0, scale: 0, x: -200 },
          { autoAlpha: 1, scale: 1, x: 0 },
          0
        )
        .fromTo(
          ".whoWeAreCard1 img",
          { x: 300, autoAlpha: 0, scale: 0 },
          { autoAlpha: 1, scale: 1, x: 0 }
        )
        .fromTo(".whoWeAreCard1", { scale: 0 }, { scale: 1 }, 0)
        .fromTo(
          [
            ".whoWeAreCardsTextDiv img",
            ".whoWeAreCardsTextDiv h1",
            ".whoWeAreCardsTextDiv p",
          ],
          { autoAlpha: 0, y: 70 },
          { autoAlpha: 1, y: 0, stagger: 0.7 },
          0
        );

      // what we do animation
      const whatWeDo = gsap.timeline({
        scrollTrigger: {
          trigger: ".aboutWhatWeDo",
          scroller: "body",
          scrub: 3,
          start: "top 80%",
          end: () => {
            return window.innerWidth > 768 ? "top 40%" : "top 20%";
          },
        },
      });
      whatWeDo
        .fromTo(
          [".whatWeDoLeftDiv", ".whatWeDoRightDiv"],
          { scale: 0.3, autoAlpha: 0, x: -1000 },
          { autoAlpha: 1, scale: 1, x: 0 }
        )
        .fromTo(
          ".aboutWhatWeDo h1",
          { scale: 0.5, x: -100, autoAlpha: 0 },
          { scale: 1, x: 0, autoAlpha: 1, stagger: 0.3 }
        )
        .fromTo(
          ".aboutWhatWeDo p",
          { y: -100, autoAlpha: 0, scale: 0.7 },
          { y: 0, scale: 1, autoAlpha: 1, stagger: 0.3 }
        );

      // why choose us
      const whyChooseUs = gsap.timeline({
        scrollTrigger: {
          scroller: "body",
          trigger: ".aboutWhyChooseUs",
          scrub: 3,
          end: "top 50%",
        },
      });

      whyChooseUs
        .fromTo(
          ".aboutWhyChooseUs",
          { scale: 0.5, autoAlpha: 0 },
          { scale: 1, autoAlpha: 1 }
        )
        .fromTo(
          [
            ".aboutWhyChooseUs span",
            ".aboutWhyChooseUs h1",
            ".aboutWhyChooseUs p",
            ".aboutWhyChooseUs a",
          ],
          { scale: 0.5, autoAlpha: 0 },
          { scale: 1, autoAlpha: 1, stagger: 0.1 }
        );

      const whyChooseUsCards = gsap.timeline({
        scrollTrigger: {
          scroller: "body",
          trigger: ".whyChooseUsCards",
          scrub: 3,
          start: "top 80%",
          end: () => {
            return window.innerWidth > 768 ? "top 60%" : "top 20%";
          },
        },
      });
      whyChooseUsCards
        .fromTo(
          [".cardStringUp", ".cardNo", ".cardStringDown"],
          { autoAlpha: 0, y: -20 },
          { autoAlpha: 1, y: 0 }
        )
        .fromTo(
          ".aboutWhyChooseUsCardsData",
          { autoAlpha: 0, x: -70 },
          { autoAlpha: 1, x: 0, stagger: 0.1 }
        );

      const foundersMessage = gsap.timeline({
        scrollTrigger: {
          scroller: "body",
          trigger: ".foundersMessage",
          scrub: 3,
          start: () => {
            return window.innerWidth < 768 ? "top 95%" : "top 80%";
          },
          end: () => {
            return window.innerWidth < 768 ? "top -20%" : "top 30%";
          },
        },
      });
      foundersMessage
        .fromTo(
          ".foundersMessageH",
          { autoAlpha: 0, y: 200 },
          { autoAlpha: 1, y: 0 }
        )
        .fromTo(".foundersMessageImg", { x: 300 }, { x: 0 }, 0)
        .fromTo(".foundersMessage img", { x: -100 }, { x: 0 })
        .fromTo(".foundersText", { x: -300 }, { x: 0 }, 0)
        .fromTo(".foundersText h1", { y: 60 }, { y: 0, stagger: 0.3 })
        .fromTo(".foundersText p", { y: -60 }, { y: 0, stagger: 0.3 }, 0);

      // context end here
    });

    return () => {
      context.revert();
    };
  }, []);

  return null;
};

export default AboutUsAnimation;
