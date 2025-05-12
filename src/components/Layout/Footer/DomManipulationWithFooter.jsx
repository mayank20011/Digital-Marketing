"use client";
import { useEffect } from "react";
const DomManipulationWithFooter = () => {
  useEffect(()=>{
    const subServicesFooterLink = document.querySelectorAll(".subServices");
    const normalNavLinks = document.querySelectorAll(".normalFooterNavLinks");
    const desktopNav = document.querySelectorAll(".desktopNav");
    subServicesFooterLink.forEach((link)=>{
      link.addEventListener("click",()=>{
        desktopNav[3].classList.add("bg-white","text-black");
      })
    },[])
     normalNavLinks.forEach((link)=>{
      link.addEventListener("click",()=>{
        desktopNav[3].classList.remove("bg-white","text-black");
      })
    },[])
  },[])
  return null;
};

export default DomManipulationWithFooter;
