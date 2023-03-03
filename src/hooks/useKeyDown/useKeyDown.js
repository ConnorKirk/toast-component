import { useEffect } from "react";

export const useKeyDown = (key, handler) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === key) {
        handler();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [key, handler]);
};

export const useEscapeKey = (handler) => {
  useKeyDown("Escape", handler);
};
