import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        elderBlue: "#2c3e6f",
        elderTeal: "#3ab1a0",
        elderCream: "#f7f3ed"
      },
      fontFamily: {
        heading: ["'Montserrat'", "sans-serif"],
        body: ["'Inter'", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
