import { OrbitControls, useTexture } from "@react-three/drei";
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

  // ------------------------------------------- FUNCTIONS
  const MESH = () => {
    const radius = 300;
    const total = 7;
    // const gspY = 300;
    const { size } = useThree();

    const vFov = (fov * Math.PI) / 180; // convert to radians
    const viewHeight = 2 * Math.tan(vFov / 2) * distance; // world units visible vertically
    const aspect = size.width / size.height;
    const viewWidth = viewHeight * aspect;

    // Now scale plane size relative to viewport
    const planeHeight = viewHeight * 0.4; // 40% of screen height
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

    // --------------------------------------------

    useEffect(() => {
      if (!meshRef.current) return;

      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".cont1",
          start: "top 100%",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
          // markers: true,
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
      tl1.to('.displayText',{
        y:'-70px',
        direction:0.01,
        ease:"power3.inOut",
      },"a1");

      // ----------------------------------------------- CONT2

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".cont2",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
            // markers: true,
          },
        })
        .to(meshRef.current.rotation, { y: -Math.PI / 2, ease: "linear" }, "b1") // rotate further
        .to(
          meshRef.current.position,
          { y: planeHeight * 2, ease: "linear" },
          "b1"
        )
        .to('.displayText',{
          y:'-140px',
          direction:0.01,
          ease:"power3.inOut",
        },"b1");

      // ----------------------------------------------- CONT3
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".cont3",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
            // markers: true,
          },
        })
        .to(
          meshRef.current.rotation,
          { y: -Math.PI * 1.5, ease: "linear" },
          "C1"
        ) // rotate further
        .to(
          meshRef.current.position,
          { y: planeHeight * 3, ease: "linear" },
          "C1"
        )
        .to('.displayText',{
          y:'-210px',
          direction:0.01,
          ease:"power3.inOut",
        },"C1"); // move further up

      // ----------------------------------------------- CONT4
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".cont4",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
            // markers: true,
          },
        })
        .to(
          meshRef.current.rotation,
          { y: -Math.PI * 2.5, ease: "linear" },
          "D1"
        ) // rotate further
        .to(
          meshRef.current.position,
          { y: planeHeight * 4, ease: "linear" },
          "D1"
        )
         .to('.displayText',{
          y:'-280px',
          direction:0.01,
          ease:"power3.inOut",
        },"D1"); // move further up

      // ----------------------------------------------- CONT5
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".cont5",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
            // markers: true,
          },
        })
        .to(
          meshRef.current.rotation,
          { y: -Math.PI * 3.5, ease: "linear" },
          "E1"
        ) // rotate further
        .to(
          meshRef.current.position,
          { y: planeHeight * 5, ease: "linear" },
          "E1"
        )
        .to('.displayText',{
          y:'-350px',
          direction:0.01,
          ease:"power3.inOut",
        },"E1"); // move further up

      // ----------------------------------------------- CONT6
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".cont6",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
            // markers: true,
          },
        })
        .to(
          meshRef.current.rotation,
          { y: -Math.PI * 4.5, ease: "linear" },
          "F1"
        ) // rotate further
        .to(
          meshRef.current.position,
          { y: planeHeight * 6, ease: "linear" },
          "F1"
        )
        .to('.displayText',{
          y:'-420px',
          direction:0.01,
          ease:"power3.inOut",
        },"F1");// move further up
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
                  uniforms={{
                    uTexture: { value: tex },
                  }}
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
            {/* <OrbitControls/> */}
          </Canvas>

          {/* Top-Text-Cont */}
          <div className="w-full h-screen absolute top-0 left-0 flex pointer-events-none justify-center items-center">
            
            {/* Content */}
            <div className="w-full h-fit flex text-center justify-center items-center pointer-events-none ">
              <div className="w-full h-fit flex justify-between pointer-events-none">

                {/* Inner-Div-1 */}
                <div></div>

                {/* Inner-Div-2 */}
                <div className="w-fit h-[68px] flex flex-col pointer-events-none text-[#f5f5f5] PNR_Font text-[70px] leading-[70px] overflow-hidden  tracking-tight ">
                  <span className="displayText">HILOWAVE</span>
                  <span className="displayText">BIGPICTURE COMPANY</span>
                  <span className="displayText">AL</span>
                  <span className="displayText">Luminous seoul</span>
                  <span className="displayText">EATH lIBRARY</span>
                  <span className="displayText">SOMC</span>
                  <span className="displayText">MATPLAZA</span>
                </div>

                {/* Inner-Div-3 */}
                <div></div>

              </div>
            </div>
          </div>
        </div>

        {/* This Div help to create a  animation */}
        <div className=" cont1 h-screen w-full bg-red-500 z-50"></div>
        <div className=" cont2 h-screen w-full bg-green-500"></div>
        <div className=" cont3 h-screen w-full bg-blue-500"></div>
        <div className=" cont4 h-screen w-full bg-pink-500"></div>
        <div className=" cont5 h-screen w-full bg-red-500"></div>
        <div className=" cont6 h-screen w-full bg-green-500"></div>
        <div className=" cont7 h-screen w-full bg-blue-500"></div>
      </div>
    </>
  );
};

export default MainPage;
