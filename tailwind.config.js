/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0f172a',   // Modern dark navy (very close to slate-900 but slightly bluer)
          // Alternative popular choices:
          // 900: '#001f3f',   // Classic deep navy
          // 900: '#0a1428',   // Super dark modern navy
        },
      },
    },
  },
  plugins: [],
}