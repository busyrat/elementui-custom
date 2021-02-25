module.exports = (options, context) => ({
  chainWebpack (config) {
    config.resolve.alias.set('elementui-custom', process.cwd())
  }
})
