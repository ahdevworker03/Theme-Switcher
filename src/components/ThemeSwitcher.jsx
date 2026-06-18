import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`theme-switcher ${theme}`}>
      <h1>Theme Switcher</h1>
      <p>
        Current Theme:{" "}
        <strong>{theme.charAt(0).toUpperCase() + theme.slice(1)}</strong>
      </p>
      <button onClick={toggleTheme} className="toggle-btn">
        {theme === "light" ? "🌙 Switch to Dark" : "☀️ Switch to Light"}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
