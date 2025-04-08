"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export default function HomeAnimation() {
  useGSAP(() => {
    const tl= gsap.timeline();
    const heroAnimation = document.querySelectorAll(".heroAnimation");
    tl.to(heroAnimation, {
      delay: 0.7,
      opacity: 1,
      duration: 0.7,
      y: 0,
      stagger: 0.3,
    });
    tl.to(".heroAnimationImg",{
      opacity:1,
      duration:0.3,
      x:0,
    })
  }, []);
  return null;
}
