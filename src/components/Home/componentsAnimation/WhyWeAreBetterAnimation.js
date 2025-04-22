"use client";
import { useGSAP } from "@gsap/react";

const WhyWeAreBetterAnimation = () => {
  useGSAP(() => {
    const divs = document.querySelectorAll(".whywebetter");
    divs.forEach((div) => {
      div.addEventListener("click", () => {
        const opendiv = document.querySelector(".opendiv");
        const openP = opendiv.querySelector("p");
        const openh1 = opendiv.querySelector("h1");
        openP.classList.remove("block");
        openP.classList.add("hidden");
        openh1.classList.remove("text-blue-500");
        openh1.classList.add("text-neutral-700");
        opendiv.classList.remove("bg-slate-100");
        opendiv.classList.add("closediv");
        opendiv.classList.remove("opendiv");
        const p = div.querySelector("p");
        const h1 = div.querySelector("h1");
        p.classList.remove("hidden");
        p.classList.add("block");
        h1.classList.remove("text-neutral-700");
        h1.classList.add("text-blue-500");
        div.classList.add("bg-slate-100");
        div.classList.add("opendiv");
        div.classList.remove("closediv");
      });
    });
  }, []);
  return null;
};

export default WhyWeAreBetterAnimation;
