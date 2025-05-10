"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const FooterLink = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`hover:text-orange-500 ${pathname == href ? "text-orange-600" : "text-white"}`}
    >
      {children}
    </Link>
  );
};

export default FooterLink;
