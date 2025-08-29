import { Outlet } from "react-router";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import { useAppSelector } from "./hooks";
import TitleBar from "./components/TitleBar";

const App = () => {
  const app = useAppSelector((state) => state.app);
  return (
    <div className="w-screen h-screen bg-bkg/90 overflow-hidden no-scrollbar">
      {!app.loggedIn ? (
        <Login />
      ) : (
        <div className="w-full flex flex-col items-center text-content">
          <TitleBar />
          <Sidebar />
          <div
            className="flex-1 absolute w-full top-12"
            style={{ height: "calc(100vh - 49px)" }}
          >
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
