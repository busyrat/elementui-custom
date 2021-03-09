module.exports = {
  port: 7070,
  base: '/elementui-custom/',
  dest: './dist',
  title: 'elementui-custom',
  description: '基于 elementui 定制化的通用组件',
  themeConfig: {
    nav: [
      {
        text: 'iconfont',
        link: '/iconfont'
      }
    ]
  },
  plugins: [
    'vue-demo',
    ['elementui-docs', {
      include: ['button', 'form', 'icon']
    }],
    () => ({
      chainWebpack(config) {
        config.resolve.alias.set('elementui-custom', process.cwd())
      }
    })
  ]
}
