import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        iron: {
          950: "#14110D",
          900: "#1E1A14",
          800: "#2A251D",
        },
        steel: {
          700: "#4A433A",
          500: "#6B6255",
          300: "#A79E8F",
        },
        bone: {
          100: "#F3EEE3",
          200: "#E7DFCE",
        },
        brass: {
          400: "#D6A13F",
          500: "#C08829",
          600: "#9C6C1E",
        },
        rust: {
          600: "#8B3A2B",
          700: "#722F23",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      maxWidth: {
        content: "1280px",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
export default config;
