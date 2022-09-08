/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        link: "url('/src/images/bg-shorten-desktop.svg')",
        linkMobile: "url('/src/images/bg-shorten-mobile.svg')",
        boost: "url('/src/images/bg-boost-desktop.svg')",
        boostMobile: "url('/src/images/bg-boost-mobile.svg')",
      },
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        DarkViolet: "hsl(257, 27%, 26%)",
        Red: "hsl(0, 87%, 67%)",
        Gray: "hsl(0, 0%, 75%)",
        GrayishViolet: "hsl(257, 7%, 63%)",
        VeryDarkBlue: "hsl(255, 11%, 22%)",
        VeryDarkViolet: "hsl(260, 8%, 14%)",
      },
    },
  },
  plugins: [],
};
