import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  fontSize: {
    sm: "0.750rem",
    base: "1rem",
    xl: "1.333rem",
    "2xl": "1.777rem",
    "3xl": "2.369rem",
    "4xl": "3.158rem",
    "5xl": "4.210rem",
  },
  fontFamily: {
    heading: "Martian Mono",
    body: "Antic",
  },
  fontWeight: {
    normal: "400",
    bold: "700",
  },
};
export default config;
