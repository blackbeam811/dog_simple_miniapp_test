/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        cs: "linear-gradient(135deg, #EDED69 2%, #F8D672 6%, #F7B288 14%, #F3A199 18%, #F690BA 26%, #C992D4 34%, #AA94E6 47%, #8396FD 61%, #61FF88 100%)",
        power:
          "linear-gradient(92.44deg, rgba(255, 255, 255, 0.3) -12.74%, #FFFFFF 45.34%, rgba(255, 255, 255, 0.3) 115.22%)",
      },
    },
  },
  plugins: [],
};
