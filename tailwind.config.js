/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        splash: "url('/public/HandyMan.jpg')",
        grid: "url('/public/GridBg.png')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#07241A",
          secondary: "#00C614",
          accent: "#9CF8A5",
          neutral: "#314334",
          "base-100": "#FFFFFF",
          "base-200": "#F4F7F4",
          "base-300": "#F4F7F4",
          info: "#2563eb",
          success: "#10b981",
          warning: "#FBBD23",
          error: "#E90000",
        },
      },
    ],
  },
};
