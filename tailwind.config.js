/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue}", // Archivos dentro de src/
    "./components/**/*.{vue,astro}", // Si tienes componentes en otra carpeta
    "./layouts/**/*.{astro,vue}" // Si usas layouts en Astro
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#80c8c8', // Color primario claro
          DEFAULT: '#009191', // Color primario por defecto
          dark: '#004949', // Color primario oscuro
        },
        secondary: {
          light: '#dac48f', // Color secundario claro
          DEFAULT: '#CAAA5F', // Color secundario por defecto
          dark: '#655530', // Color secundario oscuro
        },
      }
    },
  },
  plugins: [],
}

