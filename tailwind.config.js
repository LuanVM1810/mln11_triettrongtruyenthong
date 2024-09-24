/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        harmoni: ['Harmoni'],
        vietnam: ['Be Vietnam Pro']
      },
      colors: {
        "triethoc-green": "#35544E",
        "triethoc-black": "#1b1b1b",
        "triethoc-brown": "#e1ae52",
        "triethoc-white": "#f8fae5",
      },
      fontSize: {
        13: "13px",
        14: "14px",
        16: "16px",
        20: "20px",
        26: "26px",
        24: "24px",
        32: "32px",
        36: "36px",
        48: "48px",
      },
    },
  },
  plugins: [],
}
