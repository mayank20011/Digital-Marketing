"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NumberCounting = ({ classToAnimate, parentDiv }) => {
  useGSAP(() => {
    const numbers = document.querySelectorAll(classToAnimate);
    numbers.forEach((number) => {
      console.log(number);
      const value = +number.getAttribute("data-val");
      console.log(value);
      gsap.fromTo(
        number,
        {
          textContent: 0,
        },
        {
          textContent: value,
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: parentDiv,
            scroller: "body",
            scrub:2,
            start:"top 80%",
            end:"top 78%",
          },
          onUpdate: function () {
            number.innerHTML = Math.ceil(this.targets()[0].textContent);
          },
        }
      );
    });
  }, []);

  return null;
};

export default NumberCounting;

