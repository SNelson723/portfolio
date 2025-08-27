import { createContext } from "react";
import { type ToastContextValue } from "./interfaces";

const ToastContext = createContext<ToastContextValue | null>(null);
export default ToastContext;
