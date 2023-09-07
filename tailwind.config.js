/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        tastify: {
          primary: "#1db954",
          secondary: "#1ed760",
          accent: "#ffffff",
          neutral: "#1db954",
          "base-100": "#000000",
        },
      },
    ],
  },
};
