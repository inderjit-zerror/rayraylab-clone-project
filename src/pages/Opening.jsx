import { useEffect } from "react";
import oImg1 from "/data/oImg1.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SlidDiv from "../components/SlidDiv";
import UpAnimate from "../components/UpAnimate";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Opening = () => {
 

  // ----------------------------------------------------------

  const PreLoadingAinmation = () => {
    document.body.classList.add("scroll-lock");

    const TLP = gsap.timeline();

    TLP.to(".blline", {
      width: "100%",
      duration: 1.7,
      ease: "power3.inOut",
    });
    TLP.to(
      ".one1",
      {
        opacity: 1,
        stagger: 0.02,
        ease: "power3.inOut",
      },
      "preNew2"
    );
    TLP.to(
      ".blankdivinner1",
      {
        width: "40%",
        height: "8%",
        rotateZ: "12deg",
        top: "50%",
        duration: 2,
        ease: "power3.inOut",
      },
      "preNew2"
    );
    TLP.to(
      ".blankdivinner2",
      {
        width: "40%",
        height: "13%",
        rotateZ: "12deg",
        top: "50%",
        duration: 2,
        ease: "power3.inOut",
      },
      "preNew2"
    );
    TLP.to(
      ".blankdivinner2",
      {
        opacity: 0,
        ease: "power3.inOut",
      },
      "preNow3"
    );
    TLP.to(
      ".blankdivinner1",
      {
        opacity: 0,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.set(".fixedDivCenter ", {
            position: "fixed",
            top: "65%",
            left: "0%",
          });

          document.body.classList.remove("scroll-lock");
        },
      },
      "preNow3"
    );
  };

  const AfterLoadingScrolling = () => {
    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".bottomDIVblack",
        start: "top 52%",
        end: "top 51.5%",
        scrub: true,
        // markers: true,
      },
    });

    tl4.to(".fixedDivCenter", {
      opacity: 0,
    });
    tl4.to(".fixedDivCenterMain", {
      opacity: 1,
    });
  };

  const TextReveleAinmation = () => {
    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".ContText_Revele",
        start: "top 30%",
        end: "top 0%",
        scrub: true,
        // markers:true,
      },
    });

    tl5.to(
      ".delText1Line1",
      {
        width: "100%",
        duration: 2,
        ease: "power3.inOut",
      },
      "aa1"
    );
    tl5.to(
      ".delText1Line2",
      {
        width: "100%",
        duration: 2,
        ease: "power3.inOut",
      },
      "aa1"
    );
    tl5.to(
      ".delText1Line3",
      {
        width: "100%",
        duration: 2,
        ease: "power3.inOut",
      },
      "aa1"
    );
    tl5.to(
      ".delText1",
      {
        opacity: 1,
        duration: 2,
        ease: "none",
      },
      "aa2"
    );
    tl5.to(
      ".delText2",
      {
        opacity: 1,
        duration: 2,
        ease: "none",
      },
      "aa2"
    );
    tl5.to(
      ".delText3",
      {
        opacity: 1,
        duration: 2,
        ease: "none",
      },
      "aa2"
    );
  };


  // ----------------------------------------------------------
  useEffect(() => {
      PreLoadingAinmation();
      AfterLoadingScrolling();
      TextReveleAinmation()

  }, []);

  return (
    <>
      <div className="w-full min-h-screen flex flex-col relative ">
        {/* Fixed-BG-Here image */}
        <div className="w-full h-screen fixed top-0 left-0  z-10">
          <img className="w-full h-screen object-cover" src={oImg1} alt="" />
        </div>

        {/* Top-BG */}
        <div className="w-full h-[72dvh] bg-[#111111] z-20 flex flex-col justify-end items-start text-[#fff] px-7 pb-45">
          <div className="w-[0%] h-fit blline border-b-[1px] border-[#afafaf] whitespace-nowrap ">
            <h1 className="text-[4rem] pb-[10px] PNR_Font one1 opacity-0">
              HILOWAVE
            </h1>
          </div>
        </div>

        {/* TopTop */}
        <div className="w-full h-screen flex absolute top-0 left-0 z-22 text-white">
          <div className="w-full h-fit pt-[25px] fixedDivCenter  flex justify-between  absolute top-[65%] left-0  translate-y-[-65%] z-22 px-[20px]">
            <div className="w-fit h-fit flex justify-between ">
              <p className="text-[15px] leading-[16px] HNM_Font one1 opacity-0">
                HILOWAVE.CO.KR <br /> WEBSITE
              </p>
            </div>

            <div className="w-fit h-fit flex justify-between pb-32">
              <p className="text-[15px] leading-[16px] HNM_Font one1 opacity-0">
                {" "}
                NOVEMBER 2024 <br /> UXUI, WEB DEVELOPMENT
              </p>
            </div>

            <div className="w-fit h-fit flex justify-between pb-32">
              <p className="text-[15px] leading-[16px] HNM_Font one1 opacity-0">
                COSMETICS
              </p>
            </div>
          </div>
        </div>

        {/* BlankDiv */}
        <div className="w-full h-screen  z-20 relative z-20">
          <div className="w-full h-[14dvh] bg-[#111111] blankdivinner1 absolute top-0 left-0"></div>
          <div className="w-full h-[14dvh] bg-[#111111] blankdivinner2  absolute top-[14%] right-0"></div>
        </div>

        {/* Botttom-BG */}
        <div className="w-full h-fit bg-[#111111] z-20 bottomDIVblack">
          {/* Cont-1 */}
          <div className=" w-full h-fit flex flex-col justify-end items-end pt-10 ">
            <div className="w-full h-fit   fixedDivCenterMain text-white opacity-0  flex justify-between  z-22 px-[20px]">
              <div className="w-fit h-fit flex justify-between ">
                <p className="text-[15px] leading-[16px] HNM_Font one1 opacity-0">
                  HILOWAVE.CO.KR <br /> WEBSITE
                </p>
              </div>

              <div className="w-fit h-fit flex justify-between ">
                <p className="text-[15px] leading-[16px] HNM_Font one1 opacity-0">
                  {" "}
                  NOVEMBER 2024 <br /> UXUI, WEB DEVELOPMENT
                </p>
              </div>

              <div className="w-fit h-fit flex justify-between ">
                <p className="text-[15px] leading-[16px] HNM_Font one1 opacity-0">
                  COSMETICS
                </p>
              </div>
            </div>

            <div className="w-[50%] h-fit text-justify text-[#fff] text-[18px]  mt-10  pr-[40px] HNM_Font">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat tempora qui voluptatum ipsa sequi, omnis numquam
                ducimus nulla labore ad nobis facere aliquid deleniti error
                eaque libero aut similique amet.it amet consectetur adipisicing
                elit. Repellat tempora qui voluptatum ipsa sequi, omnis numquam
                ducimus nulla labore ad nobis facere aliquid deleniti error
                eaque libero aut similique amet
              </p>
            </div>
          </div>

          {/* Cont-2 */}
          <div className="ContText_Revele w-full h-screen flex justify-center items-center ">
            <div className="w-full h-fit flex gap-[100px] px-[40px] ">
              {/* 1 */}
              <div className="w-full h-fit  flex flex-col text-[#fff]">
                <h2 className="pb-[7px] HNM_Font  delText1 opacity-0">
                  MISSION
                </h2>
                {/* Border */}
                <div className="w-[0px] h-[1px] bg-[#afafaf] delText1Line1"></div>
                {/* --------------------------------------------------------- */}
                <div className="w-full h-fit flex flex-col pt-[14px]">
                  <p className="NH_Font text-[12px] text-[#969696] delText1 opacity-0">
                    MISSION. 1
                  </p>
                  <p className="NH_Font text-[18px] pt-[7px] text-[#eeeeee] text-justify delText1 opacity-0">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tenetur necessitatibus soluta eveniet temporibus. Nam
                    consequatur, quam temporibus unde in iste placeat magni illo
                    sapiente ab! Atque natus nemo expedita vero in officia saepe
                    cupiditate omnis.
                  </p>
                </div>
                <div className="w-full h-fit flex flex-col pt-[14px]">
                  <p className="NH_Font text-[12px] text-[#969696] delText1 opacity-0">
                    MISSION. 2
                  </p>
                  <p className="NH_Font text-[18px] pt-[7px] text-[#eeeeee] text-justify delText1 opacity-0">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tenetur necessitatibus soluta eveniet temporibus. Nam
                    consequatur, quam temporibus unde in iste placeat magni illo
                    sapiente ab! Atque natus nemo expedita vero in officia saepe
                    cupiditate omnis.
                  </p>
                </div>
              </div>

              {/* 2 */}
              <div className="w-full h-fit  flex flex-col text-[#fff]">
                <h2 className="pb-[7px] HNM_Font delText2 opacity-0">
                  DIRECTION
                </h2>
                {/* Border */}
                <div className="w-[0px] h-[1px] bg-[#afafaf] delText1Line2"></div>
                {/* --------------------------------------------------------- */}
                <div className="w-full h-fit flex flex-col pt-[14px]">
                  <p className="NH_Font text-[12px] text-[#969696] delText2 opacity-0">
                    DIRECTION. 1
                  </p>
                  <p className="NH_Font text-[18px] pt-[7px] text-[#eeeeee] text-justify delText2 opacity-0">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tenetur necessitatibus soluta eveniet temporibus. Nam
                    consequatur, quam temporibus unde in iste placeat magni illo
                    sapiente ab!.
                  </p>
                </div>
                <div className="w-full h-fit flex flex-col pt-[14px]">
                  <p className="NH_Font text-[12px] text-[#969696] delText2 opacity-0">
                    DIRECTION. 2
                  </p>
                  <p className="NH_Font text-[18px] pt-[7px] text-[#eeeeee] text-justify delText2 opacity-0">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tenetur necessitatibus soluta eveniet temporibus. Nam
                    consequatur.
                  </p>
                </div>
              </div>

              {/* 3 */}
              <div className="w-full h-fit  flex flex-col text-[#fff]">
                <h2 className="pb-[7px] HNM_Font delText3 opacity-0">
                  DEVELOPMENT
                </h2>
                {/* Border */}
                <div className="w-[0px] h-[1px] bg-[#afafaf] delText1Line2"></div>
                {/* --------------------------------------------------------- */}
                <div className="w-full h-fit flex flex-col pt-[14px]">
                  <p className="NH_Font text-[12px] text-[#969696] delText3 opacity-0">
                    Front-End
                  </p>
                  <p className="NH_Font text-[18px] pt-[7px] text-[#eeeeee] text-justify delText3 opacity-0">
                    NEXT JS, Three JS, GSAP, SASS
                  </p>
                </div>
                <div className="w-full h-fit flex flex-col pt-[14px]">
                  <p className="NH_Font text-[12px] text-[#969696] delText3 opacity-0">
                    Back-End
                  </p>
                  <p className="NH_Font text-[18px] pt-[7px] text-[#eeeeee] text-justify delText3 opacity-0">
                    Vercel, Prismic
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>        

        {/* Deep-Width Container */}
        <SlidDiv />

        {/* Blank_Div */}
        <div className="w-full h-[20dvh] bg-[#111111] z-90">

        </div>

        {/* Up-Image-Cont-Animation */}
        <UpAnimate />

      </div>
    </>
  );
};

export default Opening;
