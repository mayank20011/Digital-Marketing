"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function BannerAnimation() {
  useEffect(() => {
    requestAnimationFrame(() => {
      const tl = gsap.timeline();
      const imgTextDiv = document.querySelectorAll(".imgtextdiv");
      const bannerLink = document.querySelectorAll(".bannerLink");
      tl.to(imgTextDiv, {
        y: 0,
        duration: 0.2,
        stagger: 0.1,
      });
      tl.to(bannerLink,{
        y:0,
        duration:0.2,
        stagger:0.1,
      })
    });
  }, []);
  return null;
}
