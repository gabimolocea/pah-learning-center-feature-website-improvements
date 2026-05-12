import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "pah-light-gray": "#EBECED",
        "pah-light-blue": "#D6EEFF",
        "pah-teal": "#61CBC8",
        "pah-sky": "#4DB2FA",
        "pah-blue": "#0F6ABC",
        "pah-navy": "#163E6B",
      },
      fontFamily: {
        sans: ["'Source Sans 3'", "'Source Sans Pro'", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["'Inter'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
