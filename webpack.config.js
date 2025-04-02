const UnocssWebpackPlugin = require('unocss/webpack').default;

module.exports = {
  plugins: [
    new UnocssWebpackPlugin({
      // Add your unocss options here, for example:
      shortcuts: [
        ['btn', 'px-4 py-2 rounded bg-primary text-white hover:bg-primary-dark'],
      ],
      // You can also add rules and presets as needed.
    }),
  ],
};
