const path = require('path')
console.log(__dirname, path.resolve('../pages'))
module.exports = {
  port: 7070,
  base: '/elementui-custom/',
  dest: './dist',
  title: 'elementui-custom',
  description: '基于 elementui 定制化的通用组件',
  // head: [['link', { rel: 'stylesheet', href: 'https://element.eleme.cn/2.10/docs.b8036e8.css' }]],
  head: [
    // ['script', { src: 'https://cdn.jsdelivr.net/npm/jquery@1.4.4/dist/jquery.min.js' }],
    // ['script', { src: 'https://cdn.jsdelivr.net/npm/jQuery.print@1.5.1/jQuery.print.min.js' }]
  ],
  themeConfig: {
    nav: [
      {
        text: 'About',
        link: '/resume'
      }
    ]
  },
  plugins: [
    'vue-demo',
    [
      'elementui-docs',
      {
        include: ['button', 'form', 'icon']
      }
    ],
    () => ({
      chainWebpack(config) {
        config.resolve.alias.set('elementui-custom', process.cwd())
      }
    }),
    '@snowdog/vuepress-plugin-pdf-export',
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, '../components')
      }
    ]
  ]
}
