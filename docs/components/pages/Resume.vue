<template lang="pug">
.resume-page
  
  .main
    h2 王浩 
      el-button(type="text" @click="print" icon="el-icon-printer")
      .info.print-only {{ decode('JUU2JUI5JTk2JUU1JThDJTk3JUU3JTlDJTgxJUU2JUFEJUE2JUU2JUIxJTg5JUU1JUI4JTgyJTIwJTdDJTIwMTUyNzE4NzUzNDMlMjAlN0MlMjBtY21hZ25pQDE2My5jb21idXN5PXJhdA==') }}
    .target 求职目标：前端工程师 | 8年经验
    .content 
      .content-item 自我评价：
        ol.flex1
          li 熟练使用 HTML 和 CSS 进行页面的制作
          li 熟练使用 JavaScript 进行 BOM/DOM 操作以及事件处理，熟悉 ES6+ 语法
          li 熟练使用 react、vue 等前端流行框架
          li 会使用 webpack + babel 优化项目，并尝试开发过相关插件
          li 熟悉 git 命令, 熟悉各类提升开发效率的 Mac 工具软件，对持续集成和docker也有些了解
  
    h3
      r-icon(name="icon-jiaoyu1" size="40px" color="primary")
      .underline 教育背景
    .box
      .period
        .time 2012.09-2016.06
        .location 湖北工业大学
        .other 电子信息科学与技术
      .content 
        p 成绩：英语四级、计算机二级等
      
    h3
      r-icon(name="icon-Work" size="40px" color="primary")
      .underline 工作经验

    .box
      .period
        .time 2019.04-2021.04
        .location {{ decode('JUU2JUFEJUE2JUU2JUIxJTg5JUU1JThEJTkzJUU1JUIwJTk0JUU2JTk5JUJBJUU4JTgxJTk0JUU5JTlCJTg2JUU1JTlCJUEyYnVzeT1yYXQ=') }}
        .other 前端工程师
      .content 
        p 工作描述:
        ul
          li 开发搭建前端基础工程，包括脚手架、组件库（二次封装elementUI）、持续集成CI（基于gitlab）
          li 开发电子合同签署平台web端，技术栈：Vue（elementUI）、pdfjs
          li 开发用户中心中台项目，技术栈：Vue（elementUI）、Nuxt.js
    
    .box
      .period
        .time 2017.08-2019.04
        .location 聚光科技（杭州）股份有限公司
        .other 前端工程师
      .content 
        p 工作描述:
        ul
          li 开发大气网格化监管平台web端，技术栈：Vue（elementUI）、echart、ArcGIS（Leaflet重构）
          li 开发大气网格化监管平台移动客户端，技术栈：react-native、mobx
          li 地图气象插值服务，定时生成污染因子插值图，服务端技术栈：NodoJS、mongodb
    
    .box
      .period
        .time 2016.06-2017.07
        .location 圣才电子书（武汉）有限公司
        .other 前端工程师
      .content 
        p 工作描述:
        ul
          li 开发圣才PC端（www.100xuexi.com） ASP网页技术栈:IIS 环境、.net、js、jQuery
          li 维护圣才手机网页端（wx.100xuexi.com）SPA 网页技术栈:angular1.x1.x、ionic1.0
          li 开发 IOS 和 Android 移动客户端webview调用的网页:技术栈:vue、vux、vuex 

    h3
      r-icon(name="icon-geren" size="40px" color="primary")
      .underline 个人项目

    .box
      .period
        .time 2019.07-2019.07
        .location
          a(href="https://github.com/busyrat/vuepress-plugins") VuePress Plugins
        .other VuePress
      .content
        .content-item 主要工作：
          ol.flex1
            li vuepress 中使用类似 element-ui 官方文档的效果：在 markdown 中写 vue 组件 demo
            li 把 elementui 文档转成 vuepress 文档，并支持文档内容扩展
            li 基于 vuese 自动生成项目组件文档    
    
    .box
      .period
        .time 2019.07-2019.07
        .location
          a(href="https://github.com/busyrat/html-webpack-iconfont-plugin") html-webpack-iconfont-plugin
        .other webpack
      .content
        .content-item 主要工作：
          ol.flex1
            li 基于 html-webpack-plugins 快速引入 iconfont 图标库到 html 模板中
            li 支持 CDN 和本地两种模式
    
    .box
      .period
        .time 2017.07-2017.08
        .location
          a(href="https://github.com/wh-Coder/hupuIMI") 高仿虎扑体育APP
        .other react-native
      .content
        .content-item 主要工作：
          ol.flex1
            li 使用 Charles 工具抓取虎扑体育APP的接口，并从接口出发分析APP结构
            li 主体结构用 react-native + redux 框架编写；新闻帖子采用 vue 编写静态页通过 webview 嵌入
        .content-item 已经完成：
          p 新闻首页、论坛首页、、用户登录登出、帖子查看回复等
</template>

<script>
import { encode, decode } from 'elementui-custom/package/utils/base64'
export default {
  methods: {
    print: () => window.print(),
    encode: str => encode(str, 'busy=rat'),
    decode: str => decode(str, 'busy=rat')
  }
}
</script>

<style lang="stylus">
@media print {
  .print-ignore, .navbar  {
    display: none;
  }
  .print-only {
    display: inline-block!important;
  }
  .box {
    page-break-after: auto;
    page-break-inside: avoid;
  }
  .theme-default-content {
    padding: 0!important;
  }
  .resume-page, .theme-default-content {
    box-shadow: none!important;
    margin-top: 0!important;
  }
}
</style>

<style lang="stylus" scoped>
primary = rgb(50, 70, 100)

.print-only
  display none

.primary
  color primary
h1, h2, h3, h4, .target
  color: primary
ol, ul, p
  margin 0

.underline
  border-bottom 3px solid primary
  margin-left 50px
  margin-top -40px

.resume-page
  font-size 13px
  box-shadow: 0 0 8px 0 #eee, 0 2px 4px 0 #eee
  display flex
  .main
    padding 10px 30px
    .info
      float right
      font-size 14px
      padding-top 14px
    .period
      display flex
      justify-content space-between
      font-weight 500
      margin-bottom 4px
    .content
      margin-bottom 20px
      .content-item
        display flex
        align-items baseline
        .flex1
          flex 1
</style>
