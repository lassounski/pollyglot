/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",   
    "./src/**/*.{js,jsx,ts,tsx,html}", // Adjust based on your project's structure
  ],
  theme: {
    extend: {
      fontFamily: {
        bigShoulders: ['"Big Shoulders Display"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

