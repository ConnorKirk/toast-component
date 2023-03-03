import { createContext, useState } from "react";
import { useEscapeKey } from "../../hooks/useKeyDown/useKeyDown";

export const ToastContext = createContext();

export default function ToastProvider({ children }) {
  useEscapeKey(() => setToasts([]));

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
