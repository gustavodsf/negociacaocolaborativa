/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        colabBlue: "#051d40",
        colabGreen: "#cbd9ab",
        colabGray: "#e8e8e8",
        colabLightGreen: "#99ba99",
        colabPurple: "#561de5",
        colabDarkGreen: "#1c361a",
        colabYellow: "#F2F4BF",
      },
      backgroundImage: {
        'star': "url('/partial_bg.png')",
        'star-2': "url('/partial_bg_2.png')",
      },
      fontFamily: {
        // 👇 Add CSS variables
        dancing: ["var(--font-dancing)"],
        roboto: ["var(--font-Roboto)"],
        theGreat: ["var(--font-theGreat)"],
      },
    },
  },
  plugins: [],
};
