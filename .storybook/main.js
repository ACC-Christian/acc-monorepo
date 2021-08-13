const path = require("path");
const webpack = require("webpack");

module.exports = function({config}) {
  stories: [
    "../packages/stories/**/*.stories.mdx",
    "../packages/stories/**/*.stories.(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  externals: {
    "styled-components": {
      commonjs: "styled-components",
      commonjs2: "styled-components",
      amd: "styled-components",
    },
  },
  config.plugins.push(
      new webpack.DefinePlugin({
        SC_DISABLE_SPEEDY: true
      })
  );

  return config;
};


