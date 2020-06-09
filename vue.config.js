module.exports = {
  productionSourceMap: false,
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
