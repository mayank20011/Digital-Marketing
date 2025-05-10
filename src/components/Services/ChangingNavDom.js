"use client";
import { useEffect } from "react";
const ChangingNavDom = () => {
  useEffect(() => {
    // cards on service pages
    const serviceCards = document.querySelectorAll(".servicePageCards");
    const desktopNav = document.querySelectorAll(".desktopNav");

    serviceCards.forEach((card) => {
      card.addEventListener("click", () => {
        desktopNav[3].style.backgroundColor = "white",
        desktopNav[3].style.color="black"
      });
    });

    desktopNav.forEach((nav, id) => {
      if (id < 3) {
        nav.addEventListener("click", () => {
          desktopNav[3].style.removeProperty("background-color")
          desktopNav[3].style.removeProperty("color");
        });
      }
    });
  }, []);

  return null;
};

export default ChangingNavDom;
