/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}'],
    daisyui: {
        themes: ['night'],
    },
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                inter: ['inter', 'serif'],
            },
        },
    },
    plugins: [require('daisyui'), require('@tailwindcss/typography')],
};
