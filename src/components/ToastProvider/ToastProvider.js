import { createContext, useEffect, useState } from "react";

export const ToastContext = createContext();

export default function ToastProvider({ children }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setToasts([]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const [toasts, setToasts] = useState([]);

  const addToast = (variant, message) => {
    const id = crypto.randomUUID();

    const newToasts = [
      ...toasts,
      {
        id,
        variant,
        message,
      },
    ];
    setToasts(newToasts);
  };

  const dismissToast = (id) => {
    const newToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(newToasts);
  };

  return (
    <ToastContext.Provider value={{ addToast, dismissToast, toasts }}>
      {children}
    </ToastContext.Provider>
  );
}
