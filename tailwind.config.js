module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "lmds-blue": "#009ace",
        "lmds-pink": "#dd0863",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
