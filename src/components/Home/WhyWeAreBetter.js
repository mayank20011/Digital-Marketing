import { WhyWeAreBetterData } from "@/Data/homeData";
import WhyWeAreBetterAnimation from "./componentsAnimation/WhyWeAreBetterAnimation";
export default function WhyWeAreBetter(){
  return (<>
  <div className="custom-container flex flex-col gap-12 relative whyWeAreBetter">
    <h1 className="text-center text-4xl font-bold relative whyWeAreBetterH">{WhyWeAreBetterData.heading}</h1>
    <p className="text-center text-neutral-700 text-xl relative whyWeAreBetterP">{WhyWeAreBetterData.pera}</p>
    <div className="flex flex-col  w-full md:w-7/10 xl:w-6/10 mx-auto ">
      {WhyWeAreBetterData.points.map((point, index)=>(
        <div key={point.heading} className={`flex flex-col gap-6 px-6 py-6 lg:py-12 rounded-lg cursor-pointer border-b-1 border-slate-100 whywebetter ${index == 0 ? 'bg-slate-100 opendiv':'closediv'} relative whyWeAreBetterDiv`}>
          <h1 className={`text-md sm:text-lg md:text-xl text-center font-bold  ${index == 0 ? 'text-blue-500' : 'text-neutral-700'}`}>{point.heading}</h1>
          <p className={`text-md sm:text-lg md:text-xl text-center text-neutral-500 pera ${index !== 0 ? 'hidden':'block'}`}>{point.pera}</p>
        </div>
      ))}
    </div>
  </div>
  <WhyWeAreBetterAnimation/>
  </>);
}