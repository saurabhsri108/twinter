module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ["Comfortaa", "cursive"],
        rowdies: ["Rowdies", "cursive"],
      },
    },
  },
  plugins: [],
};
