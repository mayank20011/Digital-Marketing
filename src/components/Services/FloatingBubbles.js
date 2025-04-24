"use client";
import { generateFLoatingDotsdata } from "@/Data/Services";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState, useRef } from "react";

export default function FloatingBubbles() {
  const containerRef = useRef(null);
  const [dotsData, setDotsData] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDotsData(generateFLoatingDotsdata(50));
    }
  }, []);

  useGSAP(() => {
    if (dotsData.length > 0) {
      const dots = containerRef.current.querySelectorAll(".dot");
      dots.forEach((dot, index) => {
        const dotData = dotsData[index];
        gsap.set(dot, {
          x: dotData.x,
          y: dotsData.y,
        });

        gsap.to(dot, {
          x: gsap.utils.random(0, window.innerWidth),
          y: gsap.utils.random(0, window.innerHeight),
          duration: gsap.utils.random(10, 15),
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      });
    }
  }, [dotsData]);

  return (
    <div
      className="w-full h-full fixed min-h-screen bg-transparent -z-1"
      ref={containerRef}
    >
      {dotsData.map((obj) => (
        <span
          key={obj.id}
          className={`absolute z-[1000] p-[4px] rounded-full ${obj.color} dot animate-pulse`}
          style={{ transform: ` translate(${obj.x}px ,${obj.y}px)` }}
        ></span>
      ))}
    </div>
  );
}
