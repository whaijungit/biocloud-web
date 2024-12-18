/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontSize: {
                md: 16
            },
            fontWeight: {
                400: 400,
                600: 600
            },
            textColor: {
                whiter: '#ffffff'
            },
            colors: {
                primary: '#0C6DFF'
            }
        },
    },
    plugins: [],
}

