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
    const rocketDiv= document.querySelector(".rocketDiv");
    const rocketTl= gsap.timeline({repeat:-1, yoyo:true});
    rocketTl.to(rocketDiv,{
      y:-50,
      duration:1.3,
      ease:"bounce.out"
    })
  })
  return null;
}

export default HowItWorksAnimation