import type { StudioTailwindConfig } from "@yext/studio";
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D83B18",
        secondary: "#871900",
        "neutral-light": "#F9FAFB",
        "neutral-middle": "#777777",
        "neutral-dark": "#333333",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
} satisfies StudioTailwindConfig;
