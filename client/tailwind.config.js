/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'mobile':'340px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1520px',
    }
  },
  plugins: [],
}

