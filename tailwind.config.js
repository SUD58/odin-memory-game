/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				pokemon: {
					yellow: "hsl(48, 100%, 51%)",
					blue: "hsl(212, 59%, 45%)",
				},
			},
		},
	},
	plugins: ["prettier-plugin-tailwindcss"],
};
