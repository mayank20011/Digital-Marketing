"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ContactUsAnimation = () => {
  useGSAP(() => {
    const context = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": () => {
          gsap.fromTo(
            ".contactUsCards",
            { y: 500, autoAlpha: 0, scale: 0.5 },
            {
              y: 0,
              autoAlpha: 1,
              scale: 1,
              ease: "power2.out",
              stagger: 0.2,
              duration: 1.2,
            }
          );
        },

        "(max-width: 767px)": () => {
          gsap.fromTo(
            ".contactUsCards",
            { y: 500, autoAlpha: 0, scale: 0.5 },
            {
              y: 0,
              autoAlpha: 1,
              scale: 1,
              ease: "power2.out",
              stagger: 0.2,
              duration: 1.2,
              scrollTrigger: {
                trigger: ".contactUsCardContainer",
                start: "top 80%",
                end: "top -50%",
                scrub: 1,
              },
            }
          );
        },
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".letsConnect",
          start: "top 70%",
          end: ()=>{ return window.innerWidth > 1024 ? "top 20%" : window.innerWidth > 768 ? "top -70% " : "top -80%"},
          scrub:5,
        },
      });
      tl2
        .fromTo(
          ".letsConnectH",
          { y: 300, autoAlpha: 0 },
          { y: 0, autoAlpha: 1 }
        )
        .fromTo(
          ".contactUsForm",
          { x: -300, autoAlpha: 0, scale: 0 },
          { x: 0, autoAlpha: 1, scale: 1 }
        )
        .fromTo(
          ".getInTouchH",
          { y: 150, autoAlpha: 0 },
          { y: 0, autoAlpha: 1 },
          0
        )
        .fromTo(
          ".getInTouchP",
          { y: 150, autoAlpha: 0 },
          { y: 0, autoAlpha: 1 },
          0
        )
        .fromTo(".getInTouchIframe", { scale: 0 }, { scale: 1 }, 0);
    });

    return () => context.revert();
  }, []);

  return null;
};

export default ContactUsAnimation;
