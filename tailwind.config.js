/** @type {import('tailwindcss').Config} */
const { createThemes } = require('tw-colors');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsm: '480px',
      sm: '639px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      boxShadow: {
        "custom": '0 3px 0px 0px hsl(224, 28%, 35%)',
      },
    },
  },
  plugins: [
    createThemes({
      themeOne: {
        'bodybg': 'hsl(222, 26%, 31%)',
        'keybg': 'hsl(223, 31%, 20%)',
        'screenbg': 'hsl(224, 36%, 15%)',
        'specialkeysbg': 'hsl(225, 21%, 49%)',
        'specialkeysshadow': 'hsl(224, 28%, 35%)',
        'orangekeybg': 'hsl(6, 63%, 50%)',
        'orangekeyshadow': 'hsl(6, 70%, 34%)',
        'keysbg': 'hsl(30, 25%, 89%)',
        'keyshadow': 'hsl(28, 16%, 65%)',
        'num': 'hsl(221, 14%, 31%)',
        'whitebg': 'hsl(0, 0%, 100%)',
      },
      themeTwo: {
        'bodybg': 'hsl(0, 0%, 90%)',
        'keybg': 'hsl(0, 5%, 81%)',
        'screenbg': 'hsl(0, 0%, 93%)',
        'specialkeysbg': 'hsl(185, 42%, 37%)',
        'specialkeysshadow': 'hsl(185, 58%, 25%)',
        'orangekeybg': 'hsl(25, 98%, 40%)',
        'orangekeyshadow': 'hsl(25, 99%, 27%)',
        'keysbg': 'hsl(45, 7%, 89%)',
        'keyshadow': 'hsl(35, 11%, 61%)',
        'num': 'hsl(60, 10%, 19%)',
        'whitebg': 'hsl(60, 10%, 19%)',
      },
      themeThree: {
        'bodybg': 'hsl(268, 75%, 9%)',
        'keybg': 'hsl(268, 71%, 12%)',
        'screenbg': 'hsl(268, 71%, 12%)',
        'specialkeysbg': 'hsl(281, 89%, 26%)',
        'specialkeysshadow': 'hsl(285, 91%, 52%)',
        'orangekeybg': 'hsl(176, 100%, 44%)',
        'orangekeyshadow': 'hsl(177, 92%, 70%)',
        'keysbg': 'hsl(268, 47%, 21%)',
        'keyshadow': 'hsl(290, 70%, 36%)',
        'numeq': 'hsl(198, 20%, 13%)',
        'whitebg': 'hsl(52, 100%, 62%)',
        'num': 'hsl(52, 100%, 62%)',
      },
    }),
    require('tailwindcss'),
    require('autoprefixer'),],
}
