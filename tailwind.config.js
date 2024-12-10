/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'blue-50': '#EBF5FF',
				'blue-600': '#2563EB',
			},
		},
	},
	plugins: [],
};