import { webDevProcessCardsData } from "@/Data/webDev";
export default function WebDevProcessCard() {
  return (
    <div
      className="w-full lg:w-1/2 flex flex-col gap-6 lg:items-center h-[500px] overflow-y-auto webDevProcessCards relative"
      style={{ scrollbarWidth: "thin", scrollbarColor: "white white" }}
    >
      {webDevProcessCardsData.map((obj, id) => (
        <div
          key={id}
          className={`relative flex flex-col gap-4 w-full lg:w-3/4  p-4 md:p-6 rounded-lg text-white bg-gradient-to-br ${
            (id + 1) % 2 == 0
              ? "from-pink-600 to-orange-300"
              : "from-orange-300 to-pink-600"
          }`}
        >
          <div className="flex w-full h-full absolute top-0 left-0">
            <div
              className={` border p-3 rounded-full bg-white/40 h-fit w-fit absolute bottom-[15px] backdrop-blur-5xl animate-ping ${
                (id + 1) % 2 == 0 ? "left-[15px]" : "right-[15px]"
              }`}
            ></div>
            <div
              className={`border p-1 rounded-full bg-white/40 h-fit w-fit absolute top-[15px] backdrop-blur-5xl animate-ping ${
                (id + 1) % 2 == 0 ? "right-[15px]" : "left-[15px]"
              }`}
            ></div>
            <div
              className={` border p-3 rounded-full bg-white/40 h-fit w-fit absolute bottom-[15px] backdrop-blur-5xl animate-ping ${
                (id + 1) % 2 == 0 ? "left-[15px]" : "right-[15px]"
              }`}
            ></div>
          </div>
          <h1
            className="text-5xl font-bold"
            style={{ filter: "drop-shadow(1px 1px 2px black)" }}
          >{`0${id + 1}`}</h1>
          <h1
            className="text-2xl font-bold drop-shadow-sm"
            style={{ filter: "drop-shadow(1px 1px 1px black)" }}
          >
            {obj.heading}
          </h1>
          <p>{obj.pera}</p>
        </div>
      ))}
    </div>
  );
}
