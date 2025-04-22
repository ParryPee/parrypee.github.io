/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'serif': ['Merriweather', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        'mono': ['Roboto Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        'display': ['Poppins', 'sans-serif'],
        'body': ["Playwrite AU SA", 'cursive'],
      },
      colors: {
        primary: '#FF8282',        // Your main brand color
        secondary: '#BEE4D0',      // A variation for hover states, etc.
        dark: '#FF0B55',           // Dark background
        light: '#F1BA88',          // Light text/background
        accent: '#FF0B55',         // Accent color for highlights/CTAs
        // Add more colors as needed
      },
    },
  },
  plugins: [],
}