import { useTexture } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { DoubleSide } from "three";
import { PerspectiveCamera } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Vertex from "../shaders/Vertex.glsl";
import fragmen from "../shaders/fragmen.glsl";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const MainPage = () => {
  const meshRef = useRef();
  const img = [
    "/data/img1.webp",
    "/data/img3.webp",
    "/data/img4.webp",
    "/data/img5.webp",
    "/data/img6.webp",
    "/data/img7.webp",
    "/data/img2.webp",
  ];
  const distance = 600;
  const fov =
    2 * Math.atan(window.innerHeight / 2 / distance) * (180 / Math.PI);

  // ------------------------------------------- FUNCTIONS --------------------------------------------------
  const MESH = () => {
    const radius = 300;
    const total = 7;
    const { size } = useThree();

    const vFov = (fov * Math.PI) / 180; // convert to radians
    const viewHeight = 2 * Math.tan(vFov / 2) * distance; // world units visible vertically
    const aspect = size.width / size.height;
    const viewWidth = viewHeight * aspect;

    // Now scale plane size relative to viewport
    const planeHeight = viewHeight * 0.37; // 40% of screen height
    const planeWidth = planeHeight * 0.7; // maintain aspect ratio
    const gspY = planeHeight * 1;

    const CalculatePosition = useMemo(() => {
      const arr = [];

      for (let i = 0; i < total; i++) {
        const angle = i % 2 === 0 ? 0 : Math.PI;

        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = -i * gspY;

        arr.push([x, y, z]);
      }

      return arr;
    }, []);

    // -------------------------------------------- After Loadings ------------------------------------------

    // Pre ~ Animation Set
    useEffect(() => {
      document.body.classList.add("scroll-lock");

      // ✅ Set initial (pre) values
      gsap.set(meshRef.current.rotation, { y: -360 * (Math.PI / 180) * 2 });
      gsap.set(meshRef.current.position, { y: planeHeight * 9 });
      gsap.set(".midsection", { opacity: 0 });
      gsap.set(".numTextCont", { opacity: 0 });
      gsap.set(".mentionCont", { opacity: 0 });
      gsap.set(".bottomImgCont", { opacity: 0 });

      const FTL = gsap.timeline();
      FTL.to(
        meshRef.current.rotation,
        {
          y: Math.PI * 1.5,
          duration: 3,
          ease: "power2.inOut",
        },
        "pre1"
      );

      FTL.to(
        meshRef.current.position,
        {
          y: 0,
          duration: 3,
          ease: "power2.inOut",
        },
        "pre1"
      );

      FTL.to(
        ".midsection",
        {
          opacity: 1,
          duration: 1,
          ease: "power3.inOut",
        },
        "pre2"
      );
      FTL.to(
        ".mentionCont",
        {
          opacity: 1,
          duration: 1,
          ease: "power3.inOut",
        },
        "pre2"
      );
      FTL.to(
        ".bottomImgCont",
        {
          opacity: 1,
          duration: 1,
          ease: "power3.inOut",
        },
        "pre2"
      );

      FTL.to(
        ".numTextCont",
        {
          opacity: 1,
          duration: 1,
          ease: "power3.inOut",
          onComplete: () => {
            document.body.classList.remove("scroll-lock");
          },
        },
        "pre2"
      );
    }, []);

    // Animations
    useEffect(() => {
      if (!meshRef.current) return;

      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".cont1",
          start: "top 100%",
          end: "bottom top",
          scrub: true, // ✅ smoother transition
          invalidateOnRefresh: true,
        },
      });
      tl1.to(
        meshRef.current.rotation,
        {
          y: Math.PI / 2,
          ease: "linear",
        },
        "a1"
      );

      tl1.to(
        meshRef.current.position,
        {
          y: planeHeight * 1,
          ease: "linear",
        },
        "a1"
      );

      tl1.to(
        ".displayText",
        {
          y: "-70px",
          direction: 0.01,
          ease: "power3.inOut",
        },
        "a1"
      );

      tl1.to(
        ".numText",
        {
          y: "-16px",
          direction: 0.01,
          ease: "power3.inOut",
        },
        "a1"
      );

      tl1.to(
        ".mentionText",
        {
          y: "-16px",
          direction: 0.01,
          ease: "power3.inOut",
        },
        "a1"
      );

      tl1.to(
        ".highlightDiv",
        {
          x: "30px",
          direction: 0.01,
          ease: "power3.inOut",
        },
        "a1"
      );

      // ----------------------------------------------- CONT2

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".cont2",
            start: "top top",
            end: "bottom top",
            scrub: true, // ✅ smoother transition
            invalidateOnRefresh: true,
            // markers: true,
          },
        })
        .to(
          meshRef.current.rotation,
          {
            y: -Math.PI / 2,
            ease: "linear",
          },
          "b1"
        ) // rotate further
        .to(
          meshRef.current.position,
          {
            y: planeHeight * 2,
            ease: "linear",
          },
          "b1"
        )
        .to(
          ".displayText",
          {
            y: "-140px",
            direction: 0.01,
            ease: "power3.inOut",
          },
          "b1"
        )
        .to(
          ".numText",
          {
            y: "-32px",
            direction: 0.01,
            ease: "power3.inOut",
          },
          "b1"
        )
        .to(
          ".mentionText",
          {
            y: "-32px",
            direction: 0.01,
            ease: "power3.inOut",
          },
          "b1"
        )
        .to(
          ".highlightDiv",
          {
            x: "60px",
            direction: 0.01,
            ease: "power3.inOut",
          },
          "b1"
        );

      // ----------------------------------------------- CONT3
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".cont3",
            start: "top top",
            end: "bottom top",
            scrub: true, // ✅ smoother transition
            invalidateOnRefresh: true,
            // markers: true,
          },
        })
        .to(
          meshRef.current.rotation,
          {
            y: -Math.PI * 1.5,
            ease: "linear",
          },
          "C1"
        ) // rotate further
        .to(
          meshRef.current.position,
          {
            y: planeHeight * 3,
            ease: "linear",
          },
          "C1"
        )
        .to(
          ".displayText",
          {
            y: "-210px",
            direction: 0.01,
            ease: "power3.inOut",
          },
          "C1"
        ) // move further up
        .to(
          ".numText",
          {
            y: "-48px",
            direction: 0.01,
            ease: "power3.inOut",
          },
          "C1"
        ) // move further up
        .to(
          ".mentionText",
          {
            y: "-48px",
            direction: 0.01,
            ease: "power3.inOut",
          },
          "C1"
        ) // move further up
        .to(
          ".highlightDiv",
          {
            x: "90px",
            direction: 0.01,
            ease: "power3.inOut",
          },
          "C1"
        ); // move further up

      // ----------------------------------------------- CONT4
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".cont4",
            start: "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
            // markers: true,
          },
        })
        .to(
          meshRef.current.rotation,
          {
            y: -Math.PI * 2.5,
            ease: "linear",
          },
          "D1"
        ) // rotate further
        .to(
          meshRef.current.position,
          {
            y: planeHeight * 4,
            ease: "linear",
          },
          "D1"
        )
        .to(
          ".displayText",
          {
            y: "-280px",
            direction: 0.01,
            ease: "power3.inOut",
          },
          "D1"
        ) // move further up
        .to(
          ".numText",
          {
            y: "-64px",
            direction: 0.01,
            ease: "power3.inOut",
          },
          "D1"
        ) // move further up
        .to(
          ".mentionText",
          {
            y: "-64px",
            direction: 0.01,
            ease: "power3.inOut",
          },
          "D1"
        ) // move further up
        .to(
          ".highlightDiv",
          {
            x: "120px",
            direction: 0.01,
            ease: "power3.inOut",
          },
          "D1"
        ); // move further up

      // ----------------------------------------------- CONT5
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".cont5",
            start: "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
            // markers: true,
          },
        })
        .to(
          meshRef.current.rotation,
          {
            y: -Math.PI * 3.5,
            ease: "linear",
          },
          "E1"
        ) // rotate further
        .to(
          meshRef.current.position,
          {
            y: planeHeight * 5,
            ease: "linear",
          },
          "E1"
        )
        .to(
          ".displayText",
          {
            y: "-350px",
            direction: 0.01,
            ease: "power3.inOut",
          },
          "E1"
        ) // move further up
        .to(
          ".numText",
          {
            y: "-80px",
            direction: 0.01,
            ease: "power3.inOut",
          },
          "E1"
        ) // move further up
        .to(
          ".mentionText",
          {
            y: "-80px",
            direction: 0.01,
            ease: "power3.inOut",
          },
          "E1"
        ) // move further up
        .to(
          ".highlightDiv",
          {
            x: "150px",
            direction: 0.01,
            ease: "power3.inOut",
          },
          "E1"
        ); // move further up

      // ----------------------------------------------- CONT6
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".cont6",
            start: "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
            // markers: true,
          },
        })
        .to(
          meshRef.current.rotation,
          {
            y: -Math.PI * 4.5,
            ease: "linear",
          },
          "F1"
        ) // rotate further
        .to(
          meshRef.current.position,
          {
            y: planeHeight * 6,
            ease: "linear", // ✅ added
          },
          "F1"
        )
        .to(
          ".displayText",
          {
            y: "-420px",
            direction: 0.01,
            ease: "power3.inOut",
          },
          "F1"
        ) // move further up
        .to(
          ".numText",
          {
            y: "-96px",
            direction: 0.01,
            ease: "power3.inOut",
          },
          "F1"
        ) // move further up
        .to(
          ".mentionText",
          {
            y: "-96px",
            direction: 0.01,
            ease: "power3.inOut",
          },
          "F1"
        ) // move further up
        .to(
          ".highlightDiv",
          {
            x: "180px",
            direction: 0.01,
            ease: "power3.inOut",
          },
          "F1"
        );

    }, []);

    

    return (
      <>
        <group ref={meshRef} rotation={[0, Math.PI * 1.5, 0]}>
          {CalculatePosition.map((position, index) => {
            const tex = useTexture(img[index]);
            return (
              <mesh
                key={index}
                position={position}
                rotation={[0, (index % 2 === 0 ? 0 : Math.PI) + Math.PI / 2, 0]}
              >
                <planeGeometry args={[planeWidth, planeHeight, 50, 50]} />
                <shaderMaterial
                  vertexShader={Vertex}
                  fragmentShader={fragmen}
                  side={DoubleSide}
                  uniforms={{ uTexture: { value: tex } }}
                />
              </mesh>
            );
          })}
        </group>
      </>
    );
  };

  return (
    <>
      <div className="w-full min-h-screen relative">
        {/* Canvas Screen on TOP */}
        <div className="w-full h-screen sticky top-0 left-0">
          <Canvas className="w-full h-screen bg-[#121813]">
            <PerspectiveCamera
              makeDefault
              fov={fov}
              position={[0, 0, distance]}
            />
            <MESH />
          </Canvas>

          {/* Top-Text-Cont */}
          <div className="w-full h-screen absolute top-0 left-0 flex pointer-events-none justify-center items-center">
            {/* Content */}
            <div className="w-full h-fit flex text-center justify-center items-center pointer-events-none ">
              <div className="w-full h-fit relative flex justify-center pointer-events-none px-[20px]">
                {/* Inner-Center-Div */}
                <div className=" midsection  w-fit h-[68px] flex flex-col pointer-events-none text-[#f5f5f5] PNR_Font text-[70px] leading-[70px] overflow-hidden  opacity-0 tracking-tight ">
                  <span className="displayText">HILOWAVE</span>
                  <span className="displayText">BIGPICTURE</span>
                  <span className="displayText">AL</span>
                  <span className="displayText">Luminous seoul</span>
                  <span className="displayText">EATH lIBRARY</span>
                  <span className="displayText">SOMC</span>
                  <span className="displayText">MATPLAZA</span>
                </div>

                {/* right-abs */}
                <div className="text-[#f5f5f5] pointer-events-none numTextCont opacity-0  absolute top-[50%] transform-y-[-50%] right-0 text-[16px] flex justify-center items-center px-[20px]">
                  (0
                  <span className="w-fit h-[16px] flex flex-col leading-[16px] overflow-hidden ">
                    <span className="numText">1</span>
                    <span className="numText">2</span>
                    <span className="numText">3</span>
                    <span className="numText">4</span>
                    <span className="numText">5</span>
                    <span className="numText">6</span>
                    <span className="numText">7</span>
                  </span>
                  /07)
                </div>

                {/* Left-abs */}
                <div className="mentionCont pointer-events-none opacity-0 w-fit h-fit absolute px-[20px] top-[50%] translate-y-[-50%] left-0 flex flex-col justify-start text-start text-[16px] text-[#f5f5f5] leading-[16px] tracking-tight">
                  <span className="w-fit h-[16px] overflow-hidden flex flex-col">
                    <span className="mentionText">COSMETICS</span>
                    <span className="mentionText">OUTDOOR ADVERTISING</span>
                    <span className="mentionText">ADVERTISING AGENCY</span>
                    <span className="mentionText">VIDEO PRODUCTION</span>
                    <span className="mentionText">COSMETICS</span>
                    <span className="mentionText">ARCHITECTURAL DESIGN</span>
                    <span className="mentionText">ARCHITECTURAL MATERIALS</span>
                  </span>
                  <span className="w-fit h-[16px] overflow-hidden flex flex-col">
                    <span className="mentionText">NOVEMBER 2024</span>
                    <span className="mentionText">DECEMBER 2023</span>
                    <span className="mentionText">JANUARY 2023</span>
                    <span className="mentionText">JULY 2022</span>
                    <span className="mentionText">JUNE 2022</span>
                    <span className="mentionText">MAY 2022</span>
                    <span className="mentionText">OCTOBER 2024</span>
                  </span>
                  <span>UXUI, WEB DEVELOPMENT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Content */}
          <div className=" bottomImgCont absolute opacity-0 bottom-0 pointer-events-none left-0 w-full h-[70px] z-[100] flex justify-center items-center">
            <div className="w-fit h-fit flex relative bg-amber-700">
              {img.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-[30px] h-[40px]  overflow-hidden"
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={item}
                      alt=""
                    />
                  </div>
                );
              })}

              {/* HIGHLIGHT */}
              <div className="highlightDiv w-[40px] pointer-events-none h-[50px] absolute border-[2px] top-[50%] left-[-5px] translate-y-[-49%] bg-none border-white"></div>
            </div>
          </div>
        </div>

        {/* This Div help to create a  animation */}
        <div className=" cont1 h-screen w-full z-50"></div>
        <div className=" cont2 h-screen w-full "></div>
        <div className=" cont3 h-screen w-full "></div>
        <div className=" cont4 h-screen w-full "></div>
        <div className=" cont5 h-screen w-full "></div>
        <div className=" cont6 h-screen w-full "></div>
        <div className=" cont7 h-screen w-full "></div>
      </div>
    </>
  );
};

export default MainPage;
