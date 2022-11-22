/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}'],
    daisyui: {
        themes: [
            'forest',
            'synthwave',
            'dark',
            'night',
            'coffee',
            'halloween',
            'black',
            'business',
            'dracula',
        ],
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
