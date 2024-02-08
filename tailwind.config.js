/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm_mobile: '300px',
      lg_mobile: '350px',
      xl_mobile: '420px',
      sm_tablet: '600px',
      md_tablet: '750px',
      lg_tablet: '992px',
      sm_desktop: '1206px',
      md_desktop: '1350px',
      xm_desktop: '1500px',
      lg_desktop: '1900px'
    },
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
        "Poppins-SemiBold": ['Poppins-SemiBold', 'sans-serif'],
        "Salsa-Regular": ['Salsa-Regular', 'Times New Roman']
      },
      boxShadow: {
        'myShadow': '20px -20px #55e6a5;',
      }
    },
  },
  plugins: [],
}