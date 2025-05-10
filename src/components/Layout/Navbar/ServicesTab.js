"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
const ServicesTab = ({ data}) => {
  const pathname = usePathname();
  return (
    <Link
      href={data.link}
      className={`flex gap-4 hover:-translate-y-[2px] transition serviceNavLinks p-2  border-dashed rounded-2xl ${pathname == data.link ? ' bg-white text-black border border-black':''}`}
    >
      <Image
        src={data.src}
        alt={data.alt}
        height={50}
        width={50}
        className={"aspect-square h-[50px] w-[50px]"}
      />
      <div className="flex flex-col gap-1">
        <h1 className="font-bold">{data.heading}</h1>
        <p className="text-sm text-neutral-500">{data.pera}</p>
      </div>
    </Link>
  );
};

export default ServicesTab;
