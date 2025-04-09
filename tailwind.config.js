module.exports = {
  mode: 'jit', // Ensure JIT mode is enabled
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
