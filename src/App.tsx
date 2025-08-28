import { Outlet } from "react-router";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import { useAppSelector } from "./hooks";

const App = () => {
  const app = useAppSelector((state) => state.app);
  return (
    <div className="w-screen h-screen bg-bkg">
      {!app.loggedIn ? (
        <Login />
      ) : (
        <div className="w-full flex flex-col items-center">
          <Sidebar />
          <div className="flex-1 h-full">
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
