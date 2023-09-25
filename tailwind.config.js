import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        "./node_modules/flowbite/**/*.js",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
                mono: ['Poppins'],
            },
            colors: {
                darkGreen: '#64B66F',
                clearGreen: '#A0C058'
            }
        },
    },

    plugins: [forms, typography, require('flowbite/plugin')],
};
