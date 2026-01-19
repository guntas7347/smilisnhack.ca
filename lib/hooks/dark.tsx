import { useEffect, useState, useCallback } from "react";

type Mode = "dark" | "light";

const DEFAULT_MODE: Mode = "dark";

export function useDarkMode() {
  const [mode, setMode] = useState<Mode>(DEFAULT_MODE);

  useEffect(() => {
    const html = document.documentElement;
    if (mode === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [mode]);

  const toggle = useCallback(() => {
    setMode((m) => (m === "dark" ? "light" : "dark"));
  }, []);

  return { mode, toggle };
}
