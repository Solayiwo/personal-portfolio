/** @type {import('tailwindcss').Config} */
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
    },
  },
  plugins: [
     function ({ addUtilities }) {
      addUtilities({
        '.stroke-white': {
          '-webkit-text-stroke': '2px white',
        },
        '.stroke-black': {
          '-webkit-text-stroke': '2px black',
        },
      });
    },
  ],
};
