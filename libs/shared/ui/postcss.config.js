const { join } = require('path');

module.exports = {
  plugins: {
    // tailwindcss: {},
    // tailwindcss: { config: './tailwind.config.js' },
    tailwindcss: { config: join(__dirname, 'tailwind.config.js') },
    autoprefixer: {},
  },
};
