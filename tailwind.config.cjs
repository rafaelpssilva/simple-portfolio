/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primaryColor: "#010208",
                secondColor: "#E3E4E6",
                tertiaryColor: "#BC3CD8",
                neutral: "rgba(227, 228, 230, 0.55)",
                html: "#E34F26",
                css3: "#234BDF",
                javascript: "#F5DD1B",
                react: "#00D5FE",
                nodejs: "#8DC64C",
                python: "#3B75A5",
            },
            fontFamily: {
                WorkSans: ["Work Sans", "sans-serif"],
            },
            height: {
                "2/10": "20vh",
                "8/10": "80vh",
            },
        },
    },
    plugins: [],
};
