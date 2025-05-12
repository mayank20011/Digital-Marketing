import { privacyPolicyData as PP } from "@/Data/privacyPolicy";
import Image from "next/image";
export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 justify-center items-center border h-[300px] sm:h-[350px]">
        <Image
          src={"/tAndCBg.webp"}
          alt={"background Image"}
          width={1280}
          height={331}
          className="w-full h-full"
          priority
        />
        <div className="custom-container flex flex-col gap-4 items-center absolute text-white text-center">
          <h1 className="text-2xl sm:text-4xl font-bold">Privacy Policy</h1>
          <p className="">{PP.PP.pera[0]}</p>
        </div>
      </div>
      <div className="custom-container flex flex-col gap-8 py-12">
        <div className="flex flex-col gap-4">
          <p className="text-neutral-500">{PP.PP.pera[1]}</p>
          <p className="text-neutral-500">{PP.PP.pera[2]}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl sm:text-4xl font-bold">{PP.intAndDef.heading}</h1>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl">{PP.intAndDef.interpretation.heading}</h2>
            <p className="text-neutral-500">
              {PP.intAndDef.interpretation.pera}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl">{PP.intAndDef.defination.heading}</h2>
            <p className="text-neutral-500">{PP.intAndDef.defination.pera}</p>
            <ul className="flex flex-col gap-4 list-inside list-disc">
              {PP.intAndDef.defination.ul.map((p, index) => (
                <li className="text-neutral-500" key={index}>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl sm:text-4xl font-bold">Use Of Personal Data</h1>
          <p>{PP.useOfYourPersonalData.pera}</p>
          <ul className="flex flex-col gap-4 list-inside list-disc">
            {PP.useOfYourPersonalData.ul.map((p,id)=>(<li className="text-neutral-500" key={id}>{p}</li>))}
          </ul>
          <p className="text-lg">{PP.useOfYourPersonalData.pera2}</p>
          <ul className="flex flex-col gap-4 list-inside list-disc">
            {PP.useOfYourPersonalData.ul2.map((p,id)=>(<li className="text-neutral-500" key={id}>{p}</li>))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl sm:text-4xl font-bold">{PP.RetOfPersonalData.heading}</h1>
          <p className="text-neutral-500">{PP.RetOfPersonalData.pera}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl sm:text-4xl font-bold">{PP.TransOfPersonalData.heading}</h1>
          <p className="text-neutral-500">{PP.TransOfPersonalData.pera}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl sm:text-4xl font-bold">{PP.DelYourPersonalData.heading}</h1>
          <p className="text-neutral-500">{PP.DelYourPersonalData.pera}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl sm:text-4xl font-bold">{PP.secuOfYourPersonalData.heading}</h1>
          <p className="text-neutral-500">{PP.secuOfYourPersonalData.pera}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl sm:text-4xl font-bold">{PP.childrensPrivacy.heading}</h1>
          <p className="text-neutral-500">{PP.childrensPrivacy.pera}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl sm:text-4xl font-bold">{PP.LinksTOW.heading}</h1>
          <p className="text-neutral-500">{PP.LinksTOW.pera}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl sm:text-4xl font-bold">{PP.changesTPP.heading}</h1>
          <p className="text-neutral-500">{PP.changesTPP.pera}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl sm:text-4xl font-bold">{PP.contactUs.heading}</h1>
          <p className="text-neutral-500">{PP.contactUs.pera}</p>
          <ul className="flex flex-col gap-4 list-disc list-inside">
            {PP.contactUs.ul.map((p,id)=>(<li key={id} className="text-neutral-500">{p}</li>))}
          </ul>
        </div>

      </div>
    </div>
  );
}
