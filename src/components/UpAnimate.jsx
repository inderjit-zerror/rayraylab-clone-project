import preImg from "/data/preImg.webp";
import video from "/data/video_m.mp4";
import bgPreImg from "/data/bgPreImg.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const UpAnimate = () => {
  const upperCont = useRef();
  const ACI = useRef();
  const ImgCont = useRef();

  useEffect(() => {
    const UpTL = gsap.timeline({
      scrollTrigger: {
        trigger: upperCont.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        // pin: true,
        // markers:true
      },
    });
    UpTL.to(ACI.current, {
      top: "0%",
      ease: "none",
    });
    UpTL.to(ImgCont.current, {
      top: "-100%",
      ease: "none",
    });
  }, []);

  return (
    <>
      <div
        ref={upperCont}
        className="w-full h-[400dvh] bg-[#111111] relative z-90 "
      >
        <div className="w-full h-screen sticky top-0 left-0  ">

          {/* Container-Part */}
          <div className="w-full h-full z-90 flex justify-center items-center z-90 relative">
            {/* Inner-Cont */}
            <div className="w-[350px] h-[62dvh] overflow-hidden flex relative z-90">
              {/* Image */}
              <div
                ref={ImgCont}
                className="w-full h-full absolute top-0 left-0 z-90 "
              >
                <img
                  src={preImg}
                  className="w-full h-full object-fill"
                  alt=""
                />
              </div>

              {/* video */}
              <div className="w-full h-full absolute top-0 left-0 z-80">
                <video
                  muted
                  autoPlay
                  loop
                  className="w-full h-full object-cover"
                  src={video}
                ></video>
              </div>
            </div>

            {/* Animate-Cont-Image */}
          <div
            ref={ACI}
            className="h-screen w-full absolute top-[100%] left-0 bg-purple-600 z-[70]"
          >
            <img src={bgPreImg} alt="" className="w-full h-full object-cover" />
          </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default UpAnimate;
