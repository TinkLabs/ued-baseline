module.exports = function ({ config }) {
  config.module.rules.push(
    {
      test: /_story\.js?$/,
      loaders: [
        {
          loader: require.resolve('@storybook/addon-storysource/loader'),
          options: {
            prettierConfig: {
              printWidth: 100,
              tabWidth: 2,
              bracketSpacing: true,
              trailingComma: 'es5',
              singleQuote: true,
            },
            uglyCommentsRegex: [/^eslint-.*/, /^global.*/],
          },
        }
      ],
      enforce: 'pre',
    },
    {
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        },
        {
          loader: 'sass-loader'
        }
      ]
    }
  );

  return config;
};
