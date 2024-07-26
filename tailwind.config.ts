/** @type {import('tailwindcss').Config} */
export default {
	content: './src/**/*.{js,ts,jsx,tsx}',
	theme: {
		extend: {
      colors: {
        primaryBlack: '#262322',
        lilac: '#9392C7',
        burntOrange: '#DC602E',
        offWhite: '#F5F1ED'
    },
	},
	fontFamily: {
    'playfair': ['"Playfair Display"', 'serif'],
    'source-sans': ['"Source Sans"', 'sans-serif'],
  },
	plugins: [],
}
};
