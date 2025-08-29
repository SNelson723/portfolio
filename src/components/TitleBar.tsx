import { useRef, useEffect } from "react";
import { useAppSelector } from "../hooks";

const useWidth = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (!ref.current) return;
      ref.current.style.width = `${window.innerWidth - 192}px`;
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { ref };
};
const TitleBar = () => {
  const { ref } = useWidth();
  const app = useAppSelector((state) => state.app);

  return (
    <div
      ref={ref}
      className="flex justify-between items-center pl-4 absolute top-0 left-48 w-full h-12 shadow-[1px_3px_6px_1px_rgba(0,0,0,0.1)]"
    >
      <div className="shadow-custom">Welcome {app.user?.username}</div>
      <div className="shadow-custom">title bar</div>
    </div>
  );
};

export default TitleBar;