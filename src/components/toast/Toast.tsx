import { ErrorIcon, WarningIcon, SuccessIcon, InfoIcon } from "./icons";
import type { ToastProps } from "./interfaces";
import { useEffect, useRef } from "react";

interface ToastCmpProps {
  toast: ToastProps;
  onClick: () => void;
}

const Toast = ({ toast, onClick }: ToastCmpProps) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const { messgae, type, options } = toast;
  const { useIcon = true, autoClose, duration } = options || {};

  useEffect(() => {
    let progress = 100;
    const amountToDecrease = 100 / (duration! / 100);
    if (progressRef.current) {
      const interval = setInterval(() => {
        if (progress > 0) {
          if (progressRef.current) {
            progress -= amountToDecrease;
            progressRef.current.style.width = `${progress}%`;
          } else {
            clearInterval(interval);
          }
        } else {
          clearInterval(interval);
        }
      }, 100);
    }
  }, []);

  const getIcon = () => {
    switch (type) {
      case "success":
        return <SuccessIcon />;
      case "error":
        return <ErrorIcon />;
      case "warning":
        return <WarningIcon />;
      case "info":
        return <InfoIcon />;
      default:
        return <ErrorIcon />;
    }
  };

  return (
    <div>
      <div></div>
    </div>
  );
};

export default Toast;
