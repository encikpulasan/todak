import { JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import { createContext } from "preact";
import { signal } from "@preact/signals";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export const themeSignal = signal<Theme>("light");

export function ThemeProvider(
  { children }: { children: JSX.Element | JSX.Element[] },
) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Check if user has a preferred theme stored
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    // Check system preference if no stored preference
    if (!savedTheme) {
      const prefersDark =
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    } else {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Update the document with the current theme
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Store the theme preference
    localStorage.setItem("theme", theme);

    // Update the theme signal
    themeSignal.value = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => prev === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
