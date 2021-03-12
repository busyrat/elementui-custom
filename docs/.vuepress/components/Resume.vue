<template lang="pug">
.resume-page
  
  .main
    h2 王浩 
      el-button(type="text" @click="print" icon="el-icon-printer")
    h4.print-only 5年工作经验 | 28岁 | 湖北省武汉市 | 15271875343 | mcmagni@163.com
    .target 求职目标：前端工程师
    .target 职业技能：<b>JavaScript、HTML、CSS</b> | <b>Vue</b>、react、angular1.x | react-native | NodeJS | <b>webpack、git</b>、docker

    h3
      r-icon(name="icon-jiaoyu1" size="40px" color="primary")
      .underline 教育背景
    .box
      .period
        .time 2012.09-2016.06
        .location 湖北工业大学
        .other 电子信息科学与技术
      .content 
        p 成绩：英语四级、计算机二级、湖北省物理实验创新设计大赛一等奖等
      
    h3
      r-icon(name="icon-Work" size="40px" color="primary")
      .underline 工作经验

    .box
      .period
        .time 2019.04-至今
        .location 智联集团
        .other 前端工程师
      .content 
        p 工作描述:
        ul
          li 开发搭建前端基础工程，包括脚手架、组件库（二次封装elementUI）、持续集成CI（基于gitlab）
          li 开发电子合同签署平台web端，技术栈：Vue（elementUI）、pdfjs
          li 开发用户中心中台项目，技术栈：Vue（elementUI）、Nuxt.js
          li 开发仅供内部学习使用的远程屏幕共享桌面客户端，技术栈：Electron + react
    
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
          li 维护圣才手机网页端（wx.100xuexi.com）SPA 网页技术栈:angular1.x、ionic1.0
          li 开发 IOS 和 Android 移动客户端webview调用的网页:技术栈:vue、vux、vuex 

    h3
      r-icon(name="icon-xiangmu" size="40px" color="primary")
      .underline 项目经历

    .box
      .period
        .time 2020.04-至今
        .location 无纸化电子签章系统
        .other web前端开发
      .content
        .content-item 项目介绍：
          .flex1 整个项目基于 二次封装的element + pdfjs 编写，实现一套线上管理合同、合同签署的系统
        .content-item 主要工作：
          ol.flex1
            li web端和H5端项目基础搭建
            li pdf相关功能：展示、下载、添加可编辑区域，添加印章预览等功能
    .box
      .period
        .time 2020.01-2020.04
        .location 远程屏幕共享桌面客户端（内部学习）
        .other web前端开发
      .content
        .content-item 项目介绍：
          .flex1 整个项目基于 electron + react 编写的p2p服务，实现可以远程屏幕共享的桌面客户端
        .content-item 主要工作：
          ol.flex1
            li 项目搭建，WebRTC相关技术调研和分享
            li 实现一对一的屏幕共享，远程操控基础功能
    .box
      .period
        .time 2019.07-2019.10
        .location 前端组PC端公共组件库
        .other web前端开发
      .content
        .content-item 项目介绍：
          .flex1 整个项目基于 vuepress + elementUI 编写，仅使用 markdown 语法就可以展示各项目中通用的组件
        .content-item 主要工作：
          ol.flex1
            li 整个项目的创意和基础搭建，编写UI定制化的组件和文档（包括 Icon、Message-box等几十个组件）
            li 开发了 vue-demo 插件，类似 element-ui 官方文档的效果：在 markdown 中写 vue 组件 demo
            li 开发了 elementui-doc 插件，可以把 elementui 文档转成 vuepress 文档，并支持文档内容扩展
    .box
      .period
        .time 2018.10-2019.04
        .location 大气网格化监管平台APP
        .other 客户端开发
      .content
        .content-item 项目介绍：
          .flex1 整个项目基于 react-native@0.44 + mobx 框架编写，是一个监管大气污染，环保工作人员管理APP
        .content-item 主要工作：
          ol.flex1
            li 整个项目的基础搭建，gitlab ci + 蒲公英 完成APP自动更新迭代
            li 搭建工具库 （react-styled），封装基础组件
            li APP的地图模块和各种数据图形化展示模块都是基于 webview 完成
    .box
      .period
        .time 2017.08-2018.10
        .location 大气网格化监管平台web端
        .other web前端开发
      .content
        .content-item 项目介绍：
          .flex1 整个项目基于 vue + elementUI 框架编写，是一个实时监控大气污染的 web 平台
        .content-item 主要工作：
          ol.flex1
            li 整个项目的基础搭建 webpack + gitlab ci 工作流；搭建项目模板，使用 vue-cli + stylus + pug
            li 平台首页地图模块功能的开发，前期使用 ArcGis for js 3.x，后期使用 leaflet 重构
            li 平台短基础组件的封装，包括各种数据图形化展示
    .box
      .period
        .time 2016.06-2017.07
        .location 圣才电子书微信端
        .other H5前端开发
      .content
        .content-item 项目介绍：
          .flex1 整个项目基于angular1.x + ionic框架编写，是圣才电子书纸质书的拓展服务，实现在线阅读和在线做题两大主要功能。（wx.100xuexi.com）
        .content-item 主要工作：
          ol.flex1
            li 负责整个项目的UI改版
            li 负责开发电子书详情页的送礼功能（webSocket）
            li 部分会被客户端调用的页面，用vue重构
    .box
      .period
        .time 2016.06-2017.07
        .location 
          a(href="https://e.100xuexi.com/MyEbook") 圣才电子书PC端【我要出书】
        .other web前端开发
      .content
        .content-item 项目介绍：
          .flex1 实现一个在线编辑书封面的网页工具，类似一个H5编辑器，以及简单的图片编辑功能
        .content-item 主要工作：
          ol.flex1 
            li 负责开发『封面编辑』模块，文字编辑、模块拖动旋转、放大缩小
            li 相关技术：jQuery、rangyJS（控制光标）、html2Canvas、alloyImageJS（图片滤镜）

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
export default {
  methods: {
    print() {
      window.print()
    }
  }
}
</script>

<style lang="stylus" scoped>
primary = rgb(50, 70, 100)

.print-only
  display none
@media print {
  .print-ignore, .navbar  {
    display: none;
  }
  .print-only {
    display: inline-block
  }
  .box {
    page-break-after: auto;
    page-break-inside: avoid;
  }
  .theme-default-content:not(.custom) > *:first-child {
    margin 0
  }
  .resume-page, .theme-default-content {
    box-shadow: none!important;
    margin: 0!important;
  }
}


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
