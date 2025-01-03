/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pokemon: {
          yellow: {
            DEFAULT: "hsl(48, 100%, 51%)",
            hover: "hsl(48, 100%, 31%)",
          },
          blue: {
            DEFAULT: "hsl(212, 59%, 45%)",
            hover: "hsl(212, 59%, 55%)",
          },
        },
      },
    },
  },
};
