/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sidebarColor: {
          DEFAULT: "#252b36",
          hover: "#454b54",
          header: "#212731",
          headerIcon: "#303741",
        },
      },
    },
  },
  plugins: [],
};
