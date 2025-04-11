import Image from "next/image";
export default function Logo({href, url, alt}){
  return <a href={href} target="blank"><Image src={url} alt={alt} className="aspect-square hover:scale-120 transition bannerLink -translate-y-[70px]" width={20} height={20} priority /></a>
}