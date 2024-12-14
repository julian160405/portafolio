import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#4ac7b6",
        darkbg: "#000000",
      },
      backgroundImage: {
        "gradient-cover": 
          "linear-gradient(90deg, #4ac7b6 0%, #2b6761 25%, #000000 100%);"
        
      },
    },
  },
  plugins: [],
} satisfies Config;
