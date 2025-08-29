/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["bg-blend-darken"],
  theme: {
    roundedOut: {
      sm: "0125rem",
    },
    extend: {
      boxShadow: {
        bottom: '0 4px 6px -2px rgba(0, 0, 0, 0.3)',
      },
      keyframes: {
        appear: {
          "0%": {
            opacity: "0",
            display: "none",
          },
          "100%": {
            opacity: "1",
            display: "block",
          },
        },
        dissapear: {
          "0%": {
            opacity: "1",
            display: "block",
          },
          "100%": {
            opacity: "0",
            display: "none",
          },
        },
        slidein: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "90%": [{ transform: "translateX(5%)" }],
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideout: {
          "0%": { transform: "translateX(0)", opacity: 1 },
          "10%": { transform: "translateX(5%)" },
          "100%": { transform: "translateX(-200%)", opacity: 0 },
        },
        windowIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        windowOut: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        menuIn: {
          "0%": {
            display: "hidden",
            opacity: "0",
          },
          "100%": {
            display: "block",
            opacity: "1",
          },
        },
        enterLeft: {
          "0%": { transform: "translateX(-30%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        enterRight: {
          "0%": { transform: "translateX(30%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        exitLeft: {
          "0%": { transform: "translateX(0)", opacity: 1 },
          "100%": { transform: "translateX(-30%)", opacity: 0 },
        },
        exitRight: {
          "0%": { transform: "translateX(0)", opacity: 1 },
          "100%": { transform: "translateX(30%)", opacity: 0 },
        },
        enter: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        exit: {
          "0%": { opacity: 1 },
          "80%": { opacity: 0 },
        },
        fillLeft: {
          "0%": { width: "0%", opacity: 0 },
          "100%": { width: "100%", opacity: 1 },
        },
      },

      animation: {
        "spin-slower": "spin 35s ease infinite",
        "spin-slow": "spin 25s ease-in-out infinite reverse",
        appear: "appear .3s ease-in-out forwards",
        dissapear: "dissapear .3s ease-in-out forwards",
        dissapearDelay: "dissapear .3s ease-in-out 0.3s forwards",
        slidein: "slidein 0.5s ease-in-out forwards",
        slideout: "slideout 0.5s ease-in-out forwards",
        windowIn: "windowIn 0.3s ease-in-out forwards",
        menuIn: "menuIn .5s ease-in-out forwards",
        "enter-left": "enter 0.3s ease-in-out forwards",
        "enter-right": "enter 0.3s ease-in-out forwards",
        "exit-left": "exit 0.1s ease-in-out forwards",
        "exit-right": "exit 0.1s ease-in-out forwards",
        fillLeft: "fillLeft 0.5s ease-in-out forwards",
      },
      textShadow: {
        custom: "1px 1px 4px var(--tw-shadow-color)",
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
    },
  },

  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-rounded-out"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
  safelist: [
    "animate-enter-left",
    "animate-enter-right",
    "animate-exit-left",
    "animate-exit-right",
  ],
};
