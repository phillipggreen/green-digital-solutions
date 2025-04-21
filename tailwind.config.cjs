/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#22a39f',
				dark: '#222222',
				cream: '#f3efe0',
			},
			fontFamily: {
				sans: ['"Inter"', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
