import Image from "next/image";
import { maximizeGrowthBp as bp } from "@/Data/seoData";
import { MaximizeGrowthHoverData as hoverData } from "@/Data/seoData";
export default function MaximizeGrowth() {
  return (
    <div>
      <div className="custom-container flex flex-col gap-6 lg:gap-0">
        <div className="flex gap-6 md:gap-12 lg:gap-24 flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h1 className="text-4xl font-bold">
              Grow Your Business with Smarter <span className="">SEO</span>
            </h1>
            <p>
              Discover how our expert SEO services can transform your online
              presence. We help businesses like yours climb higher in search
              rankings, attract more visitors, and build lasting brand authority
              — all through strategies that deliver real, sustainable growth.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {bp.map((points,id)=>(
                <div key={id} className="flex gap-3 items-center">
                  <div className="p-1 relative bg-gradient-to-tr from-orange-600 to-pink-300 rounded-full flex items-center justify-center">
                    <div className="p-1 border-2 border-white rounded-full"></div>
                  </div>
                  <p className="text-sm">{points}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Image src="" alt="" height={500} width={500} className="w-full" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-orange-600 to-pink-600 p-[2px] rounded-[50px] lg:w-4/5 xl:-translate-y-1/3">
          <div className="grid p-4 grid-cols-2 sm:grid-cols-3 bg-white rounded-[50px] gap-4 sm:gap-2">
             {hoverData.map((data,id)=>(
              <div key={id} className={`flex gap-2 sm:gap-4 justify-center items-center ${id == 2 ? 'col-span-2 sm:col-span-1' :''}`}>
                <Image src={data.src} alt={data.alt} width={60} height={60} className="bg-orange-300 p-1 rounded-full"/>
                <h5 className="sm:text-sm md:text-md lg:text-xl md:font-bold">{data.heading}</h5>
              </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
