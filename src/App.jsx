import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <div className="w-full h-fit bg-[#202020] relative  ">
        <NavBar/>
        <MainPage/>
      </div>
    </>
  );
};

export default App;
