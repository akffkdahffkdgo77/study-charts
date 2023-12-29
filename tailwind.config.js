/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {}
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                '.text-gradient': {
                    background: 'linear-gradient(90deg, #FF6384, #FFCD56, #36A2EB)',
                    ' -webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent'
                },
                '.bg-gradient': {
                    background: 'linear-gradient(90deg, #FF6384, #FFCD56, #36A2EB)'
                }
            });
        })
    ]
};
