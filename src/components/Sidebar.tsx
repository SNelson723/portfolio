import { useEffect, useRef, useState } from "react";
import { logout } from "../api/login";
import { useAppSelector, useAppDispatch } from "../hooks";
import { setLoggedIn, setUser, setToken } from "../features/appSlice";
import { NavLink } from "react-router";
import { baseClass, navItems } from "../nav";
import { MenuIcon } from "../nav/icons";

const className =
  "absolute top-12 left-0 text-custom-white bg-stone-700 rounded-tr-lg z-50 data-[display=closed]:w-0 data-[display=open]:w-48 transition-all duration-500 select-none cursor-pointer";

const useHeight = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (!ref.current) return;
      ref.current.style.height = `${window.innerHeight - 52}px`;
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { ref };
};

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const app = useAppSelector((state) => state.app);
  const { ref } = useHeight();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleRef = () => {
    if (!ref.current) return;
    ref.current.setAttribute(
      "data-display",
      ref.current.dataset.display === "open" ? "closed" : "open"
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
      <div className="absolute flex gap-4 text-custom-white top-2 left-2 select-none">
        <div
          className="p-1 rounded-full cursor-pointer hover:bg-stone-600"
          onClick={handleRef}
        >
          <MenuIcon />
        </div>
        <span className="py-1.5 font-medium text-sm">{app.user?.username}</span>
      </div>
      <div className={className} ref={ref} data-display="closed">
        <div className="flex flex-col justify-between h-full">
          <div
            className={`max-h-full innerScroll transition-all duration-500${
              menuOpen
                ? "w-full opacity-100"
                : "w-0 overflow-hidden opacity-0 pointer-events-none"
            }`}
          >
            {navItems.map((nav, i) => (
              <NavLink
                key={i}
                to={nav.path}
                // onClick={(e) => {}}
                className={`transition-all duration-300 flex gap-2 px-4 py-3 items-start rounded-r-lg hover:bg-stone-600 ${
                  menuOpen
                    ? "w-full opacity-100"
                    : "w-0 opacity-0 overflow-hidden pointer-events-none"
                }`}
              >
                <nav.icon />
                <span
                  className={`overflow-hidden ${
                    menuOpen ? "opacity-100 w-[80%]" : "opacity-0 w-0"
                  } transition-all duration-200`}
                >
                  {nav.label}
                </span>
              </NavLink>
            ))}
          </div>
          <div
            className={`transition-all bottom-4 px-4 py-3 hover:bg-stone-600 ${
              menuOpen
                ? "w-full opacity-100 duration-300"
                : "w-0 opacity-0 duration-100"
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
