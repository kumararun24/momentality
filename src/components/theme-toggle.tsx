"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const themeChangeEvent = "momentality-theme-change";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const syncTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    syncTheme();
    window.addEventListener(themeChangeEvent, syncTheme);
    window.addEventListener("storage", syncTheme);
    return () => {
      window.removeEventListener(themeChangeEvent, syncTheme);
      window.removeEventListener("storage", syncTheme);
    };
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextIsDark);
    localStorage.setItem("momentality-theme", nextIsDark ? "dark" : "light");
    window.dispatchEvent(new Event(themeChangeEvent));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="flex size-10 shrink-0 items-center justify-center rounded-full text-[#475569] transition-colors hover:bg-[#1E293B]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] focus-visible:ring-offset-2 dark:text-slate-200 dark:hover:bg-white/10 dark:focus-visible:ring-offset-slate-900"
    >
      {isDark ? (
        <Sun aria-hidden="true" className="size-5" />
      ) : (
        <Moon aria-hidden="true" className="size-5" />
      )}
    </button>
  );
}
