import Link from "next/link";
import { ourServicesData as Data } from "@/Data/seoData";
export default function TypesOfSeo(){
  return (<div className="py-24 bg-slate-100">
    <div className="custom-container flex gap-6 md:gap-12 flex-col md:flex-row">
      <div className="w-full md:w-3/10 flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <span>OUR SERVICES</span>
          <span className="w-2/5 border h-0"></span>
        </div>
        <h4 className="text-3xl font-bold">Types of SEO Services</h4>
        <p></p>
        <Link href={"/contact-us"} className="px-4 py-2 bg-gradient-to-r from-orange-300 to-pink-300 w-fit rounded-tr-3xl rounded-bl-3xl hover:-translate-y-[5px] hover:shadow-[3px_3px_1px_black] transition font-bold text-white">Contact Us</Link>
      </div>
      <div className="w-full md:w-7/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       {Data.map((obj,id)=>(
        <div className={`flex flex-col gap-4 p-4 bg-white shadow-2xl rounded-4xl rounded-tr-none rounded-bl-none hover:shadow-[3px_3px_2px_black] transition ${id==2 ? 'md:col-span-2 lg:col-span-1':''}`} key={id}>
          <h6 className="font-bold p-2 rounded-full bg-gradient-to-t from-orange-300 to-pink-300 w-fit px-3 border">0{id+1}</h6>
          <h5 className="text-xl font-bold">{obj.heading}</h5>
          <p className="text-neutral-700 text-sm">{obj.pera}</p>
        </div>
       ))}
      </div>
    </div>
  </div>);
}