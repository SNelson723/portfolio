import { useRef } from "react";
const className =
  "absolute top-0 left-0 h-full bg-[#303030] text-white z-50 data-[display=closed]:w-0 data-[display=open]:w-48 transition-all duration-300";
const Sidebar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

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
      </div>
    </>
  );
};

export default Sidebar;
