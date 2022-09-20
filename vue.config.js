module.exports = {
  productionSourceMap: false,
  outputDir: "dist-web",
  chainWebpack: config => {
    config.module
      .rule("css")
      .test(/\.css$/)
      .use("url-loader")
      .loader("url-loader")
      .options({ esModule: false })
      .end();
  },
};
