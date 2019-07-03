const path = require("path");
const withTypescript = require("@zeit/next-typescript");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const { GenerateSW } = require("workbox-webpack-plugin");

module.exports = withTypescript({
  target: "serverless",
  webpack(config, options) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": path.resolve(__dirname, "./src")
    };

    if (options.isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
      config.plugins.push(new GenerateSW());
    }

    return config;
  }
});
