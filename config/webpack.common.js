const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
    swiper: "./src/swiper.js",
    swiperReview: "./src/swiper-review.js",
    modalReview: "./src/modal-review.js",
    modalSubscribe: "./src/modal-subscribe.js",
    modalBuyNow: "./src/modal-buy-now.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Simply Chocolate",
      template: path.resolve(__dirname, "../src/index.html"),
      filename: "index.html",
      inject: "head",
      scriptLoading: "defer", // Defer JS loading
      meta: {
        viewport: "width=device-width, initial-scale=1",
      },
      link: [
        {
          rel: "preload",
          href: "../src/assets/fonts/Montserrat-Bold.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "../src/assets/fonts/Montserrat-BoldItalic.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "../src/assets/fonts/Montserrat-Medium.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "../src/assets/fonts/Montserrat-SemiBold.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
      ],
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CompressionPlugin({
      test: /\.(woff2|css|js)$/i,
      algorithm: "brotliCompress",
      filename: "[path][base].br",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
      },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
};
