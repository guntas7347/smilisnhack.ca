import { useCallback } from "react";

type Mode = "dark" | "light";

function getMode(): Mode {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function toggle(): Mode {
  if (typeof document === "undefined") return "light";
  const html = document.documentElement;
  html.classList.toggle("dark");
  return html.classList.contains("dark") ? "dark" : "light";
}

export function useDarkMode() {
  const getModeFn = useCallback(() => getMode(), []);
  const toggleFn = useCallback(() => toggle(), []);

  return {
    getMode: getModeFn,
    toggle: toggleFn,
  };
}

export { getMode, toggle };
