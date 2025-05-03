"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
export default function Arrowup() {
  const [click, setClick] = useState(0);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [click]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="fixed bottom-[30px] custom-container bg-transparent flex justify-end">
        <div
          className="cursor-pointer hover:scale-110 transition hover:shadow-black"
          onClick={() => {
            setClick(gsap.utils.random(1, 100000));
          }}
        >
          <Image
            className="-rotate-45 bg-slate-100 rounded-full shadow-lg"
            src={"/arrowUpRight.png"}
            alt={"Arrow icon"}
            width={35}
            height={35}
          />
        </div>
      </div>
    </div>
  );
}
