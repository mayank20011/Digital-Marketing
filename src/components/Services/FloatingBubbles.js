"use client";
import { floatingDotsData } from "@/Data/Services";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function FloatingBubbles() {
  useGSAP(() => {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot)=>{
      gsap.to(dot,{
        x: gsap.utils.random(100,1000),
        y:gsap.utils.random(50,500),
        duration:gsap.utils.random(10,15),
        yoyo:true,
        repeat:-1,
        ease:"sine.inOut"
      })
    })
    console.log(dots);
  }, []);
  return (
    <div className="w-full h-full fixed min-h-screen bg-transparent -z-1">
      {floatingDotsData.map((obj) => (
        <span
          key={obj.id}
          className={`absolute z-[1000] p-[4px] rounded-full ${obj.color} dot animate-pulse`}
          style={{transform : ` translate(${obj.x}px ,${obj.y}px)`}}
        ></span>
      ))}
    </div>
  );
}
