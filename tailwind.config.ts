import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  safelist: [
    "bg-amber-400",
    "bg-amber-500",
    "bg-amber-600",
    "bg-amber-700",
    "dark:bg-amber-400",
    "dark:bg-amber-500",
    "dark:bg-amber-600",
    "dark:bg-amber-700",
    "text-amber-400",
    "text-amber-500",
    "text-amber-600",
    "border-amber-400",
    "border-amber-500",
    "border-amber-600",
    "border-amber-700",
    "bg-green-400",
    "bg-green-500",
    "bg-green-600",
    "bg-green-700",
    "dark:bg-green-400",
    "dark:bg-green-500",
  ],
  plugins: [
    // Add aspect ratio plugin for the hero image
    function ({ addUtilities }: { addUtilities: Function }) {
      const newUtilities = {
        ".aspect-w-16": {
          "aspect-ratio": "16 / 9",
        },
        ".aspect-h-9": {
          "aspect-ratio": "16 / 9",
        },
      };
      addUtilities(newUtilities);
    },
  ],
} satisfies Config;
