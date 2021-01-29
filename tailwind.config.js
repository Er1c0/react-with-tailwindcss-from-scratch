module.exports = {
  purge: {
    enabled: false,
    content: ["./src/**/*.html"],
    options: {
      whitelist: ["mode-dark"],
    },
  },
  darkMode: "media",
  theme: {
    extend: {
      //etc
    },
  },
  variants: {
    opacity: ["disabled"],
  },
  plugins: [],
};
