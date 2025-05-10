"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function ActiveLink({ href, children}) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`transition text-sm font-normal px-3 py-1 rounded-full hover:bg-white hover:text-black desktopNav ${
        pathname == href  ? "text-black bg-white" : ""
      }`}
    >
      {children}
    </Link>
  );
}
