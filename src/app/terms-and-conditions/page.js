import { TermsandConditions as Tc } from "@/Data/termsAndConditions";
import Image from "next/image";
export default function TermsandConditionss() {
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
          <h1 className="text-2xl sm:text-4xl font-bold">{Tc.tAndC.heading}</h1>
          <p className="">{Tc.tAndC.pera[0]}</p>
          <p className="">{Tc.tAndC.pera[1]}</p>
        </div>
      </div>
      <div className="custom-container flex flex-col gap-8 py-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl sm:text-3xl font-semibold">
            {Tc.intAndDef.heading}
          </h1>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg sm:text-2xl">
              {Tc.intAndDef.interpretation.heading}
            </h1>
            <p>{Tc.intAndDef.interpretation.pera}</p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg sm:text-2xl">Definition</h1>
            <p>{Tc.intAndDef.defination.pera}</p>
            <ul className="flex flex-col gap-4 list-disc list-inside">
              {Tc.intAndDef.defination.ul.map((li, index) => (
                <li className="text-neutral-500" key={index}>
                  {li}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-xl sm:text-3xl font-semibold">Acknowledgement</h1>
          {Tc.ackNowledgment.pera.map((p, id) => (
            <p key={id} className="text-neutral-500">
              {p}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-xl sm:text-3xl font-semibold">
            Links To Other Websites
          </h1>
          {Tc.linkToOtherWebsite.pera.map((p, id) => (
            <p key={id} className="text-neutral-500">
              {p}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-xl sm:text-3xl font-semibold">Termination</h1>
          <p className="text-neutral-500">{Tc.termination.pera[0]}</p>
          <p className="text-neutral-500">{Tc.termination.pera[1]}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-xl sm:text-3xl font-semibold">
            Limitation Of Liability
          </h1>
          {Tc.lAndl.pera.map((p, id) => (
            <p key={id} className="text-neutral-500">
              {p}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-xl sm:text-3xl font-semibold">{`"AS IS" and "AS AVAILABLE" Disclaimer`}</h1>
          {Tc.asIsAsAvailable.pera.map((p, id) => (
            <p key={id} className="text-neutral-500">
              {p}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-xl sm:text-3xl font-semibold">Governing Law</h1>
          <p className="text-neutral-500">{Tc.gl.pera}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-xl sm:text-3xl font-semibold">
            Disputes Resolutions
          </h1>
          <p className="text-neutral-500">{Tc.disputes.pera}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-xl sm:text-3xl font-semibold">
            {Tc.ueUser.heading}
          </h1>
          <p className="text-neutral-500">{Tc.ueUser.pera}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-xl sm:text-3xl font-semibold">
            {Tc.usLc.heading}
          </h1>
          <p className="text-neutral-500">{Tc.usLc.pera}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-xl sm:text-3xl font-semibold">
            {Tc.sAndW.heading}
          </h1>
          {Tc.sAndW.list.map((obj, id) => (
            <div key={id} className="flex flex-col gap-4">
              <h1 className="text-lg sm:text-2xl text-blue-800">
                {obj.heading}
              </h1>
              <p className="text-neutral-500">{obj.pera}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-xl sm:text-3xl font-semibold">Contact Us</h1>
          <p className="text-neutral-500">{Tc.contactUs.pera}</p>
          <ul className="list-disc text-neutral-500  flex flex-col gap-4">
            {Tc.contactUs.ul.map((li, id) => (
              <li className="list-inside" key={id}>
                {li}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
