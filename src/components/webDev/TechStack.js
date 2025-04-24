import Image from "next/image";
export default function TechStack() {
  const imgArray = Array.from({ length: 14 }, (_, i) => ({
    src: `/tech-stack-${i + 1}.webp`,
  }));
  return (
    <div className="custom-container flex flex-col gap-6 pt-12">
      <h1 className="text-4xl text-center font-bold">Our Tech Stack</h1>
      <p className="w-full md:w-3/4 text-center mx-auto">
        We carefully choose the right tools and frameworks that align with your
        goals, ensuring seamless performance, flexibility, and long-term
        scalability. Our technology decisions are driven by your business needs,
        helping us deliver smooth, secure, and future-ready digital experiences
        tailored for growth and real-world impact.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 w-full md:w-4/5 mx-auto">
        {imgArray.map((obj, id) => (
          <div className="bg-slate-50 flex items-center justify-center py-2 border px-2">
          <Image
            key={id}
            src={obj.src}
            alt={"Tech Stack Logo"}
            width={150}
            height={50}
          />
          </div>
        ))}
      </div>
    </div>
  );
}
