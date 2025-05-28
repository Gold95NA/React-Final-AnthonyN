import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "0.5rem 1rem",
        border: "none",
        borderRadius: "6px",
        backgroundColor: "#444",
        color: "white",
        cursor: "pointer",
      }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
  console.log("Current theme:", theme);
}

