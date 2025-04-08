"use client";
import React from "react";
import gsap from "gsap";
import { useRef, useEffect } from "react";

const Cursor = () => {
  const cursorBall = useRef(null);
  
  useEffect(()=>{
    const body = document.querySelector("#body");
    body.addEventListener("mousemove",(e)=>{
      gsap.to(cursorBall.current,{
        x:e.x,
        y:e.y,
        ease:"back.out"
      })
    })
  },[]);

  return (
    <div
      className="bg-white shadow-lg shadow-black w-[20px] h-[20px] rounded-full fixed translate-x-[20px] translate-y-[80px] z-10"
      ref={cursorBall}
    ></div>
  );
};

export default Cursor;
