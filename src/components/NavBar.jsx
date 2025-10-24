import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IoMdArrowDropdown } from "react-icons/io";

gsap.registerPlugin(useGSAP);

const NavBar = () => {
  const [time, setTime] = useState("");
  const tl1 = gsap.timeline()

  //    ======================================================= FUNCTIONS
  const hoverUp = (item, yData) => {
    gsap.to(item, {
      y: yData,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const Prehover = (item) => {
    gsap.to(item, {
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    }); 
  };


  const HoverHider = () => {
    tl1.to(".innerDivHide", {
      width:'0px',
      duration: 1,
      ease: "power2.inOut",
    },'a1');
    tl1.to(".innerDivHide", {
      paddingLeft: "0px",
      paddingRight: "0px",
      duration: 0.5,
      ease: "power2.inOut",
    },'a1');
  };

  const PreHoverHider = () => {
    tl1.to(".innerDivHide", {
      width: "auto",
      paddingLeft: "7px",
      paddingRight: "7px",
      duration: 1,
      ease: "power2.inOut",
    },)
    
  };

  //    =======================================================
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
      const day = days[now.getDay()];
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTime(`${day} ${hours}:${minutes}:${seconds}`);
    };

    updateClock(); // initial call
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <>
      <div className="w-full h-fit fixed top-[14px] left-0 flex justify-between items-center px-[35px] text-[#e6e6e6] z-[100]">
        {/* TimeDiv */}
        <div
          onMouseEnter={() => hoverUp(".TimeTextNav", "-17px")}
          onMouseLeave={() => Prehover(".TimeTextNav")}
          className="AMR_Font w-fit h-[14px] flex flex-col overflow-hidden select-none cursor-pointer text-[14px] leading-[14px] tracking-tight"
        >
          <span className="TimeTextNav ">
            REC <span className="ml-[5px] leading-tight">{time}</span>
          </span>
          <span className="TimeTextNav ">
            BACK <span className="ml-[5px]">HOME</span>
          </span>
        </div>

        {/* @ Title Div */}
        <div
          onMouseEnter={() => HoverHider()}
          onMouseLeave={() => PreHoverHider()}
          className=" AMR_Font w-fit h-fit flex text-[15px] leading-[15px] select-none cursor-pointer"
        >
          <div className="OuterDivTitle flex">
            @RAYRAY{" "}
            <div className="w-fit h-fit innerDivHide flex whitespace-nowrap px-[7px] overflow-hidden ">
              CREATIVE WEB
            </div>{" "}
            LAB
          </div>
        </div>

        {/* Menu div */}
        <div className="w-fit h-fit flex gap-[20px]">
          {/* LAN- EN/KR */}
          <div
            onMouseEnter={() => hoverUp(".LanText", "-15px")}
            onMouseLeave={() => Prehover(".LanText")}
            className="AMR_Font w-fit fit flex flex-col overflow-hidden select-none cursor-pointer text-[15px] leading-[15px] tracking-tight"
          >
            <div className="flex mr-[5px]">
              LAN
              <div className="w-fit h-[15px] flex flex-col ml-[10px]">
                <p className="LanText">EN</p>
                <p className="LanText">KR</p>
              </div>
              <IoMdArrowDropdown />
            </div>
          </div>

          {/* Work */}
          <div
            onMouseEnter={() => hoverUp(".WorkText", "-15px")}
            onMouseLeave={() => Prehover(".WorkText")}
            className="AMR_Font w-fit h-[15px] flex flex-col overflow-hidden select-none cursor-pointer text-[15px] leading-[15px] tracking-tight"
          >
            <span className="WorkText">WORK</span>
            <span className="WorkText">WORK</span>
          </div>

          {/* CONTACT */}
          <div
            onMouseEnter={() => hoverUp(".ContactText", "-15px")}
            onMouseLeave={() => Prehover(".ContactText")}
            className="AMR_Font w-fit h-[15px] flex flex-col overflow-hidden select-none cursor-pointer text-[15px] leading-[15px] tracking-tight"
          >
            <span className="ContactText">CONTACT</span>
            <span className="ContactText">CONTACT</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
