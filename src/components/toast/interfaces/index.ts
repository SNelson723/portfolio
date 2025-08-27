import { type ReactNode } from "react";

export type ToastAnimationtype =
  | "rotate"
  | "none"
  | "slide"
  | "fade"
  | "bounce"
  | "zoom"
  | "flip";

export type ToastType = "info" | "success" | "error" | "warning";

export interface ToastProviderProps {
  children: ReactNode;
  autoClose?: boolean;
  duration?: number;
}

export interface ToastOptions {
  useIcon?: boolean;
  autoClose?: boolean;
  duration?: number; // in milliseconds
  animation?: ToastAnimationtype;
}

export interface ToastProps {
  id: string;
  type: ToastType;
  messgae: string;
  options?: ToastOptions;
}

export interface ToastContextValue {
  addToast: (type: ToastType, message: string, options?: ToastOptions) => void;
  removeToast: (id: string) => void;
}

export interface ToastContainerProps {
  toasts: ToastProps[];
  removeToast: (id: string) => void;
}
