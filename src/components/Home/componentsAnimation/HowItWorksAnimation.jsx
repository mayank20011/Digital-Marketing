"use client";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const HowItWorksAnimation = () => {
  useGSAP(()=>{
    const divs = document.querySelectorAll(".howItWorksCards");
    divs.forEach((div)=>{
      const img = div.querySelector("div img");
      div.addEventListener("mouseenter",()=>{
        gsap.to(img,{
          // rotateX:360,
          rotateY:360,
        })
      })
      div.addEventListener("mouseleave",()=>{
        gsap.to(img,{
          // rotateX:0,
          rotateY:0,
        })
      })
    })
  })
  return null;
}

export default HowItWorksAnimation