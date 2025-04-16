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
            "-translate-y-[120%]",
            "font-bold",
            "text-orange-300",
            "scale-110",
            "drop-shadow-[1px_1px_1px_black]"
          );
        } else {
          e.target.previousElementSibling.classList.add(
            "-translate-y-[120%]",
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
          "-translate-y-[100%]",
          "font-bold",
          "text-orange-300",
          "scale-110",
          "drop-shadow-[1px_1px_1px_black]"
        );
      } else {
        e.target.previousElementSibling.classList.add(
          "-translate-y-[100%]",
          "font-bold",
          "text-orange-300",
          "scale-110",
          "drop-shadow-[1px_1px_1px_black]"
        );
      }
    });
  }, []);
  return (
    <div className="flex flex-col gap-6 md:gap-12">
      <h1 className="custom-container text-4xl lg:text-center font-bold">
        Contact Us!!
      </h1>
      <div className="custom-container flex flex-col gap-6 lg:flex-row">
        <form className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-8 p-6 md:p-12 bg-slate-100 shadow-xl rounded-xl">
          <h1 className="text-3xl font-bold">Free Consultation</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="relative flex flex-col justify-center">
              <label className="px-4 absolute transition duration-300">
                Name *
              </label>
              <input
                type="text"
                name="name"
                className="bg-white rounded-md outline-none px-4 py-4 input"
              />
            </div>
            <div className="relative flex flex-col justify-center">
              <label className="px-4 absolute transition duration-300">
                Phone
              </label>
              <input
                type="text"
                name="name"
                className="bg-white rounded-md outline-none px-4 py-4 input"
              />
            </div>
            <div className="relative flex flex-col justify-center">
              <label className="px-4 absolute transition duration-300">
                Email *
              </label>
              <input
                type="text"
                name="name"
                className="bg-white rounded-md outline-none px-4 py-4 input"
              />
            </div>
            <div className="relative flex flex-col justify-center">
              <label className="px-4 absolute transition duration-300">
                Subject *
              </label>
              <input
                type="text"
                name="name"
                className="bg-white rounded-md outline-none px-4 py-4 input"
              />
            </div>
          </div>

          <div className="relative w-full grow resize-none flex">
            <label className="px-4 absolute pt-4 transition duration-300">
              Message
            </label>
            <textarea
              name=""
              placeholder=""
              className="w-full outline-none rounded-md bg-white min-h-[200px] h-full px-4 py-4 message resize-none"
            />
          </div>

          <button
            type="submit"
            className="self-start w-fit px-4 py-2 rounded-2xl bg-orange-300 text-white font-bold hover:scale-90 transition hover:shadow-[3px_3px_2px_black] cursor-pointer"
          >
            Send Message
          </button>
        </form>
        <div className="lg:flex w-full lg:w-1/2 justify-center flex py-6 md:py-12">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-orange-300 drop-shadow-[1px_1px_1px_black]">{formData.heading}</h2>
            <p className="text-neutral-500 text-lg">
              {formData.pera}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
