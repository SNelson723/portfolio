import { useRef, useState, useEffect } from "react";
import { logout } from "../api/login";
import { useAppSelector, useAppDispatch } from "../hooks";
import {
  setLoggedIn,
  setUser,
  setToken,
  setCurrentPage,
} from "../features/appSlice";
import { NavLink } from "react-router";
import { navItems } from "../nav";
import { MenuIcon, LogoutIcon } from "../nav/icons";

const className =
  "absolute top-12 left-0 text-custom-white bg-stone-700 z-50 data-[display=closed]:w-0 data-[display=open]:w-48 transition-all duration-500 select-none cursor-pointer";

// const useClickOutside = () => {
//   const ref = useRef<HTMLDivElement>(null);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClickOutside = (event: MouseEvent) => {
//     if (ref.current && !ref.current.contains(event.target as Node)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return { ref, isOpen, setIsOpen };
// };

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const app = useAppSelector((state) => state.app);
  const ref = useRef<HTMLDivElement>(null);
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
        dispatch(setUser({ id: 0, email: "", username: "" }));
        dispatch(setLoggedIn(false));
      }
    });
  };

  return (
    <>
      <div className="absolute flex gap-[10px] text-custom-white py-1 left-0 pl-2 border-r border-gray-200 pr-24 select-none shadow-[-1px_3px_6px_1px_rgba(0,0,0,0.1)]">
        <div
          className="p-1 mt-0.5 rounded-full cursor-pointer hover:bg-stone-300"
          onClick={handleRef}
        >
          <MenuIcon fill="rgb(30, 41, 59)" />
        </div>
        <span className="py-2.5 font-medium text-sm text-content">
          {app.currentPage}
        </span>
      </div>
      <div
        className={className}
        ref={ref}
        style={{ height: "calc(100vh - 49px)" }}
        data-display="closed"
      >
        <div className="flex flex-col justify-between h-full">
          <div
            className={`max-h-full innerScroll transition-all duration-500${
              menuOpen
                ? "w-full opacity-100"
                : "w-0 overflow-hidden opacity-0 pointer-events-none"
            }`}
          >
            {navItems.map((nav, i) => (
              <div key={i}>
                <NavLink
                  to={nav.path}
                  onClick={() => {
                    dispatch(setCurrentPage(nav.label));
                    handleRef();
                  }}
                  className={({ isActive }) =>
                    `transition-all duration-300 flex gap-2 px-2 py-3 items-start rounded-r-lg hover:bg-stone-600 ${
                      menuOpen
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 overflow-hidden pointer-events-none"
                    } ${isActive ? "bg-stone-500" : ""}`
                  }
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
                {/* If the item has children, handle them here pl-8 now and py-2 */}
                {nav.children && nav.childOpen && <div>children</div>}
              </div>
            ))}
          </div>
          <div
            className={`flex gap-1 transition-all bottom-4 px-2 py-3 hover:bg-stone-600 ${
              menuOpen
                ? "w-full opacity-100 duration-300"
                : "w-0 opacity-0 duration-100"
            }`}
            onClick={handleLogout}
          >
            <LogoutIcon />
            Logout
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
