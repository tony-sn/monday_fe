/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      monday: [
        "Figtree",
        "Roboto",
        "Noto Sans Hebrew",
        "Noto Kufi Arabic",
        "Noto Sans JP",
        "sans-serif",
      ],
      poppins: "Poppins, sans-serif",
    },
    extend: {
      gridTemplateColumns: {
        monday: "auto 40%",
        even: "1fr auto 1fr",
      },
      flexDirection: {
        unset: "unset",
      },
      colors: {
        "ui-border-color": "#C3C4D6",
        "primary-text-color": "#323338",
      },
      boxShadow: {
        monday:
          "0 0 0 3px hsla(209, 100%, 50%, 0.5), 0 0 0 1px var(--primary-hover-color)",
      },
    },
  },
  plugins: [import("prettier-plugin-tailwindcss"), import("@tailwindcss/forms")],
};
