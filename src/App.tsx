import { Outlet } from "react-router";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import { useAppSelector } from "./hooks";
import TitleBar from "./components/TitleBar";
import { useRef, useEffect } from "react";

const useHeight = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (!ref.current) return;
      ref.current.style.height = `${window.innerHeight - 49}px`;
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { ref };
};

const App = () => {
  const app = useAppSelector((state) => state.app);
  const { ref } = useHeight();
  return (
    <div className="w-screen h-screen bg-bkg overflow-hidden">
      {!app.loggedIn ? (
        <Login />
      ) : (
        <div className="w-full flex flex-col items-center text-content">
          <TitleBar />
          <Sidebar />
          <div ref={ref} className="flex-1 absolute w-full bg-blue-200 top-12">
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
