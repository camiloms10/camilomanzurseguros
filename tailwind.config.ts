import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07111F",
        slate: "#5C6B7A",
        mist: "#EFF3F8",
        brand: {
          navy: "#0B1F3A",
          red: "#D62D32",
          sky: "#DCEBFF",
          steel: "#91A0B2",
        },
      },
      boxShadow: {
        soft: "0 24px 64px rgba(8, 18, 34, 0.12)",
        card: "0 18px 40px rgba(7, 17, 31, 0.08)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top left, rgba(220, 235, 255, 0.95), rgba(255, 255, 255, 0.92) 45%, rgba(239, 243, 248, 0.85))",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out both",
        float: "float 5s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
