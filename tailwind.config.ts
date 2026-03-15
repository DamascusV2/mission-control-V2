import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#05060a",
        surface: "#0a0c12",
        panel: "#101320",
        accent: "#38bdf8",
        accentMuted: "#1d4ed8"
      },
      boxShadow: {
        "panel": "0 10px 40px rgba(0,0,0,0.35)"
      }
    }
  },
  plugins: []
};

export default config;
