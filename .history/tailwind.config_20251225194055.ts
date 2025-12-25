import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // 1. THIS IS THE ANIMATION FOR THE SPOTLIGHT
      animation: {
        gradient: "gradient 15s ease infinite",
      },
      // 2. THESE ARE THE KEYFRAMES
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds all Tailwind colors as CSS variables
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;