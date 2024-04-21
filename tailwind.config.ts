import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: "#1E1E1E",
            },
            fontFamily: {
                serif: ["Playfair Display", "serif"],
                serif2: ["EB Garamond", "serif"],
                // serif: ["Guyot-Text", "serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            fontSize: {
                sm: "0.75rem",
            },
        },
        screens: {
            xs: "480px",
            ss: "620px",
            sm: "768px",
            md: "1060px",
            lg: "1200px",
            xl: "1700px",
        },
    },
    plugins: [],
};
export default config;