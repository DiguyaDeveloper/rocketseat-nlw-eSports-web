/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    fontFamily: { sans: ["Inter", "sans-serif"] },
    extend: {
      backgroundImage: {
        "nlw-gradient":
          "linear-gradient(89.86deg, #9572fc 20.08%, #45e7ad 39.94%, #e1055e 75.57%)",
        "game-gradient":
          "linear-gradient(188deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.88%)",
        galaxy: "url('/background-galaxy.png')",
      },
    },
  },
  plugins: [],
};
