const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      s: (value) => ({
        width: value,
        height: value,
      }),
    },
    {
      values: theme("spacing"),
    }
  );
});
