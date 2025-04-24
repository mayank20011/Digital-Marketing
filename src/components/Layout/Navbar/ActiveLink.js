"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function ActiveLink({ href, children }) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`hover:scale-110 transition hover:underline underline-offset-8 hover:text-green-600 pcNav opacity-0 translate-y-[10px] ${
        pathname == href ? "text-green-600 underline font-bold" : ""
      }`}
    >
      {children}
    </Link>
  );
}
