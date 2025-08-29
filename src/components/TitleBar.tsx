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
    <div ref={ref} className="flex justify-between items-center pl-4 absolute top-0 left-48 w-full h-12">
      <div>Welcome {app.user?.username}</div>
      <div>title bar</div>
    </div>
  )
};

export default TitleBar;