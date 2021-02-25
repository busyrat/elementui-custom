module.exports = {
  port: 7070,
  base: '/elementui-custom/',
  dest: '../../dist/',
  title: 'elementui-custom',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://element.eleme.cn/2.10/element-ui.5e99aae.js' }]
  ],
  description: '基于 elementui 定制化的通用组件',
  cache: false,
  plugins: ['vue-demo', 'elementui-docs']
}
