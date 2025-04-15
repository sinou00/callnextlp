import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'custom1-radial': 'radial-gradient(ellipse at center, #101695 49%, #000000 100%)',
        'custom2-radial': 'gradient(#101695 49%, #000000 100%)',
      },
      fontFamily: {
        poppins: ["Poppins", "Helvetica", "sans-serif"], // Add Poppins as a font family
      },
    },
  },
  plugins: [],
} satisfies Config;
