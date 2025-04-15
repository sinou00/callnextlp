const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",   // Include all files in the pages directory
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {

      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(ellipse 65% 120% at top, #101625 49%, #000000 100%)',
        "gold-gradient":`
        
        url("data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%20%20%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%2210%22%20fill%3D%22%2523937E51%22%20fill-opacity%3D%220.08%22/%3E%0A%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%2220%22%20r%3D%2210%22%20fill%3D%22%2523937E51%22%20fill-opacity%3D%220.08%22/%3E%0A%20%20%3Ccircle%20cx%3D%2220%22%20cy%3D%2260%22%20r%3D%2210%22%20fill%3D%22%2523937E51%22%20fill-opacity%3D%220.08%22/%3E%0A%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%2210%22%20fill%3D%22%2523937E51%22%20fill-opacity%3D%220.08%22/%3E%0A%20%20%3Cline%20x1%3D%2220%22%20y1%3D%2210%22%20x2%3D%2220%22%20y2%3D%2230%22%20stroke%3D%22%2523937E51%22%20stroke-opacity%3D%220.1%22%20stroke-width%3D%221%22/%3E%0A%20%20%3Cline%20x1%3D%2210%22%20y1%3D%2220%22%20x2%3D%2230%22%20y2%3D%2220%22%20stroke%3D%22%2523937E51%22%20stroke-opacity%3D%220.1%22%20stroke-width%3D%221%22/%3E%0A%20%20%3Cline%20x1%3D%2260%22%20y1%3D%2210%22%20x2%3D%2260%22%20y2%3D%2230%22%20stroke%3D%22%2523937E51%22%20stroke-opacity%3D%220.1%22%20stroke-width%3D%221%22/%3E%0A%20%20%3Cline%20x1%3D%2250%22%20y1%3D%2220%22%20x2%3D%2270%22%20y2%3D%2220%22%20stroke%3D%22%2523937E51%22%20stroke-opacity%3D%220.1%22%20stroke-width%3D%221%22/%3E%0A%3C/svg%3E"),
        linear-gradient(to bottom, #937E51 0%, #F9D689 41%, #6C5B3C 100%)
        `
      },
       fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Add Poppins as a font family
      },
      animation: {
        shine: "shine var(--duration) infinite linear",
        "shimmer-slide":
          "shimmer-slide var(--speed) ease-in-out infinite alternate",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {

        shine: {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          }
        },

        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        "shimmer-slide": {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
}
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}


