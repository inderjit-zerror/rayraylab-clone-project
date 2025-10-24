import { useEffect, useState } from "react";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";

const App = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check window width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // check on first load
    window.addEventListener("resize", handleResize); // check on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <>
     {isMobile ? (
        <div className="w-full h-screen flex items-center justify-center bg-[#202020] text-white text-2xl px-[40px]">
          Not Responsive Yet 🙄.
          Please Open This Link In Your PC/Laptop.
        </div>
      ) : (
        <div className="w-full h-fit bg-[#202020] relative">
          <NavBar />
          <MainPage />
        </div>
      )}
    </>
  );
};

export default App;
