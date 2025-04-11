import Image from "next/image";
export default function ImgText({ url, text, alt, pr }) {

  return (
    <div className={`relative flex gap-2 hover:scale-105 transition items-center imgtextdiv -translate-y-[70px] ${pr ? `pr-4 border-r-2` : ``}`}>
      <Image
        alt={alt}
        src={url}
        className="aspect-square"
        width={20}
        height={20}
        priority
      />
      <a
        href="mailto:hello@vardaanfarms.com"
        className="hover:text-green-600 transition"
      >
        {text}
      </a>
    </div>
  );
}
