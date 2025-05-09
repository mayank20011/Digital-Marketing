"use client";
import { formData } from "@/Data/contactUs";
import { useEffect } from "react";

export default function ContactUsForm() {
  useEffect(() => {
    const inputs = document.querySelectorAll(".input");
    inputs.forEach((input) => {
      input.addEventListener("input", (e) => {
        if (e.target.value === "") {
          e.target.previousElementSibling.classList.remove(
            "-translate-y-[80%]",
            "font-bold",
            "text-orange-300",
            "scale-110",
            "drop-shadow-[1px_1px_1px_black]"
          );
        } else {
          e.target.previousElementSibling.classList.add(
            "-translate-y-[80%]",
            "font-bold",
            "text-orange-300",
            "scale-110",
            "drop-shadow-[1px_1px_1px_black]"
          );
        }
      });
    });
    const message = document.querySelector(".message");
    message.addEventListener("input", (e) => {
      if (e.target.value === "") {
        e.target.previousElementSibling.classList.remove(
          "-translate-y-[80%]",
          "font-bold",
          "text-orange-300",
          "scale-110",
          "drop-shadow-[1px_1px_1px_black]"
        );
      } else {
        e.target.previousElementSibling.classList.add(
          "-translate-y-[80%]",
          "font-bold",
          "text-orange-300",
          "scale-110",
          "drop-shadow-[1px_1px_1px_black]"
        );
      }
    });
  }, []);
  return (
    <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-12">
      <h1 className="custom-container text-xl sm:text-2xl md:text-3xl lg:text-4xl lg:text-center font-bold">
        Let&apos; Connect!!
      </h1>
      <div className="custom-container flex flex-col gap-6 lg:flex-row">
        <form className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-8 p-6 md:p-12 bg-slate-100 shadow-xl rounded-sm sm:rounded-xl order-2 lg:order-1">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
            Free Consultation
          </h1>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-4">
            <div className="relative flex flex-col justify-center">
              <label className="text-xs sm:text-sm md:text-base p-2 sm:p-3 md:p-4 absolute transition duration-300">
                Name *
              </label>
              <input
                type="text"
                name="name"
                className="text-xs sm:text-sm md:text-base bg-white rounded-md outline-none p-2 sm:p-3 md:p-4 input"
              />
            </div>
            <div className="relative flex flex-col justify-center">
              <label className="text-xs sm:text-sm md:text-base p-2 sm:p-3 md:p-4 absolute transition duration-300">
                Phone
              </label>
              <input
                type="text"
                name="name"
                className="text-xs sm:text-sm md:text-base bg-white rounded-md outline-none p-2 sm:p-3 md:p-4 input"
              />
            </div>
            <div className="relative flex flex-col justify-center">
              <label className="text-xs sm:text-sm md:text-base p-2 sm:p-3 md:p-4 absolute transition duration-300">
                Email *
              </label>
              <input
                type="text"
                name="name"
                className="text-xs sm:text-sm md:text-base bg-white rounded-md outline-none p-2 sm:p-3 md:p-4 input"
              />
            </div>
            <div className="relative flex flex-col justify-center">
              <label className="text-xs sm:text-sm md:text-base p-2 sm:p-3 md:p-4 absolute transition duration-300">
                Subject *
              </label>
              <input
                type="text"
                name="name"
                className="text-xs sm:text-sm md:text-base bg-white rounded-md outline-none p-2 sm:p-3 md:p-4 input"
              />
            </div>
          </div>

          <div className="relative w-full grow resize-none flex">
            <label className="text-xs sm:text-sm md:text-base p-2 sm:p-3 md:p-4 absolute transition duration-300">
              Message
            </label>
            <textarea
              name=""
              placeholder=""
              className="text-xs sm:text-sm md:text-base w-full outline-none rounded-md bg-white min-h-[200px] h-full p-2 sm:p-3 md:p-4 message resize-none"
            />
          </div>

          <button
            type="submit"
            className="self-start w-fit text-sm sm:text-base px-4 py-2 rounded-2xl bg-orange-300 text-white font-bold hover:scale-90 transition hover:shadow-[3px_3px_2px_black] cursor-pointer"
          >
            Send Message
          </button>
        </form>
        <div className="lg:flex w-full lg:w-1/2 justify-center flex order-1 lg:order-2">
          <div className="flex flex-col gap-4 md:gap-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-300 drop-shadow-[1px_1px_1px_black]">
              {formData.heading}
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base md:text-lg">{formData.pera}</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d876.9060069969569!2d77.0526666168336!3d28.46074795220142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1900479e7709%3A0x4866e14afb28e0a6!2sVardaan%20Farms!5e0!3m2!1sen!2sin!4v1746776109499!5m2!1sen!2sin"
              className="w-full h-full aspect-square lg:aspect-auto"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
