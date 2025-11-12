import img1img from "/data/1img.webp";
import img2img from "/data/2img.webp";
import img3img from "/data/3img.webp";
import img4img from "/data/4img.webp";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const SlidDiv = () => {
  const arrData = [img1img, img2img, img3img, img4img];
  const SlideDiv = useRef();
  const HighlightBorder = useRef()
  const MainHighlightBorder = useRef()
  const wrapRef = useRef(null);
  const [wrapWidth, setWrapWidth] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  const lineArr = Array.from({ length: 40 });

  useEffect(() => {
    if (!wrapWidth || !windowSize.width) return;

    const totalScroll = wrapWidth - windowSize.width;

    const SlideTL = gsap.timeline({
      scrollTrigger: {
        trigger: SlideDiv.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
      },
    });

    SlideTL.to(wrapRef.current, {
      x: -totalScroll,
      ease: "linear",
    },'sl1');
    SlideTL.to(HighlightBorder.current, {
      width:'100%',
      ease: "linear",
    },'sl1');

    SlideTL.to(MainHighlightBorder.current, {
      rotateZ:'10deg',
      opacity:0,
      duration:0.02,
      ease: "linear",
    });


  }, [wrapWidth, windowSize.width]);

  // 🧠 Function to calculate width
  const updateWidth = () => {
    if (wrapRef.current) {
      const width = wrapRef.current.scrollWidth; // total scrollable width
      setWrapWidth(width);
      console.log("Wrap Width:", width);
    }
  };

  const updateWindowSize = () => {
    setWindowSize({
      width: window.innerWidth,
    });
    console.log("Window Size:", window.innerWidth);
  };

  // Resize check
  useEffect(() => {
    updateWidth(); // run initially
    updateWindowSize();

    window.addEventListener("resize", updateWidth); // update on resize
    window.addEventListener("resize", updateWindowSize); // update on resize
    return () => {
      window.removeEventListener("resize", updateWidth); // cleanup
      window.removeEventListener("resize", updateWindowSize); // cleanup
    };
  }, []);

  return (
    <div
      ref={SlideDiv}
      className="w-full h-[400dvh] bg-[#111111] z-90 relative "
    >
      {/* ☑️ FIxed Div */}
      <div className="w-full h-screen flex  sticky top-0 left-0 ">
        {/* ☑️ Wrap-Cont With Image DIV */}
        <div
          ref={wrapRef}
          className="w-fit h-screen flex justify-center items-center gap-[50px]"
        >
          {arrData.map((img, index) => {
            return (
              <>
                <div
                  key={index}
                  className={` w-[70dvw] h-fit ${
                    index === 0 ? "ml-[20vw]" : ""
                  }  
                  ${index === 3 ? "mr-[15vw]" : ""}
                  
                  `}
                >
                  <img src={img} alt="images" />
                </div>
              </>
            );
          })}
        </div>

        {/* Div Report Animate ShowCase */}
        <div ref={MainHighlightBorder} className="w-[240px] h-[17px] origin-left  absolute bottom-[5%] left-[50%] translate-x-[-50%] flex justify-between items-center">

            {/* Highlight-Border */}
            <div ref={HighlightBorder} className=" absolute top-0 left-0 w-[0%] h-full bg-[#111111] border border-white box-border"></div>

            {
                lineArr.map((num,index)=>{
                    return(
                        <>
                        <div className="h-full w-[2px] bg-[#a5a5a5]"></div>
                        </>
                    )
                })
            }
        </div>

      </div>
    </div>
  );
};

export default SlidDiv;
