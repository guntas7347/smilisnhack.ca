import { useEffect, useState, useCallback } from "react";

type Mode = "dark" | "light";

function readMode(): Mode {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function useDarkMode() {
  const [mode, setMode] = useState<Mode>("light");

  useEffect(() => {
    setMode(readMode());
  }, []);

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
