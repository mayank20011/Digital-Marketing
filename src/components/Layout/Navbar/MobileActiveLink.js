"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function MobileActiveLink({href, children}){
  const path=usePathname();
  return (
  <Link href={href} className={`p-2 text-lg font-bold border-dashed border hover:scale-90 transition hover:border-green-600 hover:text-green-600 closeNav relative mobileNavLinks scale-0 transalte-x-full  opacity-0 ${path == href ? "text-green-600 scale-90" :""}`}>
   {children}
  </Link>);
}