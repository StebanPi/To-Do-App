import { useEffect, useState } from "react";

const useDark = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("dark-mode");
    return saved === "true";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("dark-mode", isDark.toString());
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  return {
    isDark,
    toggleDarkMode,
  };
};

export default useDark;
