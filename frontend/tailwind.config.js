import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      shadows: {
        'red': 'rgba(255, 0, 0, 0.1)', //Red shadow (for testing puposes)
      }
    },
  },
  plugins: [
    daisyui
  ],
  
}

