/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/preline/preline.js',
	],
	theme: {
		extend: {
			fontFamily: {
				display: ["Orbitron", "sans-serif"],
				sans: ["Inter", "sans-serif"],
				mono: ["Fira Code", "monospace"],
			},
		},
	},
	plugins: [
		// require('@tailwindcss/forms'),
		require('preline/plugin'),
	],
}
