module.exports = {
  productionSourceMap: false,
  outputDir: "dist-web",
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/scss/BIMData.scss";',
      },
    },
  },
  chainWebpack: config => {
    config.module
      .rule("css")
      .test(/\.css$/)
      .use("url-loader")
      .loader("url-loader")
      .options({
        esModule: false,
      })
      .end();
  },
};
