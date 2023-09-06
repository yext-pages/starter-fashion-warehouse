import type { StudioTailwindConfig } from "@yext/studio";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    // fontFamily: {
    //   display: ["Oswald"],
    //   body: ["Open-Sans"],
    // },
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },
    extend: {
      // keyframes: {
      //   "accordion-down": {
      //     from: { height: 0 },
      //     to: { height: "var(--radix-accordion-content-height)" },
      //   },
      //   "accordion-up": {
      //     from: { height: "var(--radix-accordion-content-height)" },
      //     to: { height: 0 },
      //   },
      // },
      // animation: {
      //   "accordion-down": "accordion-down 0.2s ease-out",
      //   "accordion-up": "accordion-up 0.2s ease-out",
      // },
      colors: {
        primary: "#D83B18",
        secondary: "#871900",
        "neutral-light": "#F9FAFB",
        "neutral-middle": "#777777",
        "neutral-dark": "#333333",
      },
    },
  },
  // plugins: [require("tailwindcss-animate")],
} satisfies StudioTailwindConfig;
