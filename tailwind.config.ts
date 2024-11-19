module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}', // Adjust this path to match your project
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        amazon: {
          primary: '#FF9900', // Amazon orange for buttons, links, etc.
          secondary: '#146EB4', // Blue for secondary actions
          accent: '#FF9900', // Use same orange for emphasis
          neutral: '#333333', // Dark gray for text and neutral elements
          'base-100': '#FFFFFF', // White background
          'base-200': '#F3F3F3', // Light gray for secondary backgrounds
          'base-300': '#E0E0E0', // Borders/dividers
          info: '#146EB4', // Blue for informational elements
          success: '#32CD32', // Green for success messages
          warning: '#FF9900', // Orange for warnings
          error: '#D61C4E', // Red for errors
        },
      },
    ],
  },
};
