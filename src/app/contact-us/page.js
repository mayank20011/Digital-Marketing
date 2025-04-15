import  {contactUsData}  from "@/Data/contactUs.js";
import Image from "next/image";
export default function BlogsPage() {
  return (
  <div className="custom-container py-12">
   <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {contactUsData.map((obj)=>(
      <div key={obj.heading} className="flex flex-col items-center rounded-2xl border border-slate-100 hover:shadow-[5px_5px_10px_black] transition">
        <div className="flex flex-col gap-4 px-6 pb-4 bg-slate-100 rounded-2xl w-full grow">
          <Image src={obj.src} alt={obj.alt} className="mx-auto -translate-y-1/2" width={50} height={50}/>
          <h1 className="text-3xl font-bold text-center">{obj.heading}</h1>
          <p className="text-lg text-neutral-500 text-center">{obj.details}</p>
        </div>
        <p className="p-6">{obj.pera}</p>
      </div>
    ))}
   </div>
  </div>
  )
}
