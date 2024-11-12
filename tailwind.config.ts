import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
        dmSans: ["var(--font-dm-sans)", ...fontFamily.sans],
      },
      colors: {
        "neutral-100": "#F1F1EF",   // Light background or neutral
        "neutral-300": "#A89BAA",   // Lighter grayish tone
        "primary-500": "#AB47BC",   // Primary color
        "accent-400": "#8A6188",    // Accent or support color
        "dark-900": "#2C2445",      // Dark background or text color
      },

      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),

      content: {
        evolvetext: "url('/assets/EvolveText.png')",
        abstractwaves: "url('/assets/AbstractWaves.png')",
        sparkles: "url('/assets/Sparkles.png')",
        circles: "url('/assets/Circles.png')",
      },
    },

    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
export default config;
