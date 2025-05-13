"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function MobileActiveLink({ href, children, className }) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`${className} rounded-lg p-2 border hover:scale-98 transition hover:bg-white hover:text-black closeNav relative mobileNavLinks border-black opacity-0 ${
        path == href
          ? "scale-98 rounded-tr-none rounded-bl-none"
          : "bg-slate-700 text-white rounded-tl-none rounded-br-none"
      }`}
    >
      {children}
    </Link>
  );
}
