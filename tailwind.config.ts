import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    clipPath: {
        loader: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transformOrigin: {
        'top-center': 'top center',
        'bottom-center': 'bottom center',
      },
    },
  },
  plugins: [
    require('tailwind-clip-path')
  ],
};
export default config;
