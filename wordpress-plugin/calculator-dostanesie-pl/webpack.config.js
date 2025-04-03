const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const { merge } = require("webpack-merge");

/**
 * @type {import('webpack').Configuration}
 */
const config = {
  output: {
    clean: true,
  },
};

module.exports = merge(defaultConfig, config);
