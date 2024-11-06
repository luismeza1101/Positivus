/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				'main': '#B9FF66',
				'secondary': '#191A23',
				'white-modify': '#F3F3F3'
			},
			colors: {
				'white-modify': '#F3F3F3',
				'main': '#B9FF66',
			},
			boxShadow: {
				'card-services': '0px 10px 4px 0px rgba(0,0,0,0.75)',
			},
			screens: {
				'desktop': '900px',
				'desktopX2': '1200px'
			}
		},
	},
	plugins: [],
}
