import { useRef, useState } from "react";
import { logout } from "../api/login";
import { useAppSelector, useAppDispatch } from "../hooks";
import { setLoggedIn, setUser, setToken } from "../features/appSlice";
import { NavLink } from "react-router";
import { baseClass, navItems } from "../nav";

const className =
  "absolute top-0 left-0 h-full bg-[#303030] text-white z-50 data-[display=closed]:w-0 data-[display=open]:w-48 transition-all duration-300 select-none cursor-pointer";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const app = useAppSelector((state) => state.app);
  const ref = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleRef = () => {
    if (!ref.current || !iconRef.current) return;
    ref.current.setAttribute(
      "data-display",
      ref.current.dataset.display === "open" ? "closed" : "open"
    );
    iconRef.current.setAttribute(
      "data-display",
      iconRef.current.dataset.display === "open" ? "closed" : "open"
    );
    setMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    logout(app.devUrl).then((resp) => {
      const j = resp.data;
      if (j.error === 0) {
        dispatch(setToken(""));
        dispatch(setUser(null));
        dispatch(setLoggedIn(false));
      }
    });
  };

  return (
    <>
      <div className={className} ref={ref} data-display="closed">
        <div
          ref={iconRef}
          onClick={handleRef}
          data-display="closed"
          className={`absolute top-4 data-[display=open]:left-48 data-[display=closed]:left-0 cursor-pointer bg-[#404040] border-l border-l-[#181818] px-3 py-1.5 rounded-r-full transition-all duration-300`}
        >
          Menu
        </div>
        <div className="flex flex-col justify-between h-screen">
          <div
            className={`transition-all duration-500${
              menuOpen
                ? "w-full opacity-100"
                : "w-0 overflow-hidden opacity-0 pointer-events-none"
            }`}
          >
            <div
              className={`py-3 text-center text-xl border-b font-medium ${
                menuOpen
                  ? "w-full opacity-100"
                  : "w-0 opacity-0 overflow-hidden pointer-events-none"
              }`}
            >
              Menu
            </div>
            {navItems.map((nav, i) => (
              <NavLink
                key={i}
                to={nav.path}
                // onClick={(e) => {}}
                className={`transition-all duration-300 flex gap-2 px-4 py-3 items-start border-b border-b-custom-white/50 hover:bg-stone-600 ${
                  menuOpen
                    ? "w-full opacity-100"
                    : "w-0 opacity-0 overflow-hidden pointer-events-none"
                }`}
              >
                <nav.icon />
                <span
                  className={`${
                    menuOpen ? "opacity-100 w-full" : "opacity-0 w-0"
                  } transition-all duration-300`}
                >
                  {nav.label}
                </span>
              </NavLink>
            ))}
          </div>
          <div
            className={`transition-all duration-300 bottom-4 px-4 py-3 hover:bg-stone-600 ${
              menuOpen ? "w-full opacity-100" : "w-0 opacity-0"
            }`}
            onClick={handleLogout}
          >
            Logout
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
