import { ourApproachData } from "@/Data/webDev";
import Image from "next/image";

export default function OurAproach() {
  return (
    <div className="custom-container flex flex-col gap-12">
      <h1 className="text-4xl font-bold text-center pt-12">Our Approach</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-12">
        {ourApproachData.map((obj, id) => (
          <div
            key={id}
            className={`p-4 sm:p-6 flex flex-col gap-4 rounded-2xl shadow-lg ${
              (id + 1) % 2 == 1
                ? "text-white bg-[#221E3799]"
                : " text-black bg-[#FED89F80]"
            } ${id==2 ? 'col-span-1 md:col-span-2 xl:col-span-1' :''}`}
          >
            <Image
              src={obj.src}
              alt={obj.alt}
              width={50}
              height={50}
              className=""
            />
            <h1 className="text-2xl">{obj.heading}</h1>
            <p className="text-lg">{obj.pera}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
