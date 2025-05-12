"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FooterLink = ({ href, children, className }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`hover:text-orange-400 ${className} ${
        pathname == href ? "text-orange-400" : "text-white"
      }`}
    >
      {children}
    </Link>
  );
};

export default FooterLink;
