import Image from "next/image";
export default function Arrowup() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="fixed bottom-[30px] custom-container bg-transparent flex justify-end">
        <div className="w-fit cursor-pointer hover:scale-110 transition hover:shadow-black">
          <Image
            className="-rotate-45 bg-slate-100 rounded-full shadow-lg"
            src={"/arrowUpRight.png"}
            alt={"Arrow icon"}
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
}
