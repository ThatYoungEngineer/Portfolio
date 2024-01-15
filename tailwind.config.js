/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#55E6A5',
        'secondary': '#ABB8C3'
      },
      fontFamily: {
        "Poppins-Black": ['Poppins-Black', 'sans-serif'],
        "Poppins-Bold": ['Poppins-Bold', 'sans-serif'],
        "Poppins-Medium": ['Poppins-Medium', 'sans-serif'],
        "Poppins-Regular": ['Poppins-Regular', 'sans-serif'],
        "Poppins-SemiBold": ['Poppins-SemiBold', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/images/background.jpg')"
      }
    },
  },
  plugins: [],
}