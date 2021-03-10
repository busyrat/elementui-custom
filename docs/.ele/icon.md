<style lang="stylus">
.icon-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  &::before {
    content: "（tip: 点击图标就自动复制啦！）";
    width: 100%;
    color: #3eaf7c;
  }
  li {
    position: relative;
    width: 30px;
    height: 30px;
    &:hover {
      > span {
        width: 60px;
        height: 60px;
        left: -15px;
        top: -15px;
        &:before {
          content: '';
          display: inline-block;
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 1;
          background-color: #eee;
          opacity: 0.9;
          filter: blur(2px);                
        }
        svg, i {
          z-index: 2;
          font-size: 40px;
          cursor: copy;
        }
      }
    }
    > span {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: absolute;
      width: 100%;
      height: 100%;
      font-size: 24px;
      .icon-name {
        display: none;
      }
    }
  }
}
</style>

<script>
import { copyToClipboard } from 'elementui-custom/package/utils/insert-element'

export default {
  created() {  
    if (typeof window !== 'undefined') {
      this.$icon = this.getIcons('el-icon-').reverse()
    }
  },
  methods: {
    arrayUnique(arr) {
      return [...new Set(arr)]
    },
    getIcons(key) {
      const reg = new RegExp(`(?<=\.${key})[\\w-]*?(?=:{1,2}before\\s*\\{\\s*content)`, 'g')
      // 过滤包含 .keyxxx:before{ content } 的styleStyleSheets
      let styleStyleSheets = Object.values(document.styleSheets).filter(sheet => {
        let rules = []
        if (sheet.hasOwnProperty('rules')) {
          rules = sheets.rules
        } else {
          try {
            rules = sheet.cssRules
          } catch(e) {
            // console.warn("Can't read the css rules of: " + sheet.href, e)
            return false
          }
          rules = sheet.cssRules
        }
        
        return [...rules].some(rule => reg.test(rule.cssText))
      })

      let iconClasses = []
      let rules = [...styleStyleSheets[0].cssRules]
      rules.forEach(rule => {
        const name = rule.cssText.match(reg)
        if (name) {
          iconClasses.push(name[0])
        }
      })
      // 最后去个重
      return [...new Set(iconClasses)]
    },
    iconListClick(e) {
      let className
      if (/use/.test(e.target.tagName) ) {
        className = e.target.parentNode.className.baseVal
      } else if (/svg/.test(e.target.tagName) ) {
        className = e.target.className.baseVal
      } else {
        className = e.target.className
      }
      if (/^(el-icon)/.test(className)) {
        copyToClipboard(`<i class="${className}"/>`)
        if (this.$message) {
          this.$message(`copy: <i class="${className}"/>`)
        }
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.iconLists = [...this.$el.getElementsByClassName('icon-list')]
      this.iconLists.forEach(item => item.addEventListener('click', this.iconListClick, false))
    })
  },
  beforeDestroy() {
    this.iconLists.forEach(item => item.removeEventListener('click', this.iconListClick, false))
  }
}
</script>

<!-- ---------------------- 对原文档的补充 end ----------------------  -->

## Icon Extend

### 引入自定义图标

```js
const MyIcon = Icon.createFromIconfontCN({ key: 'font_8d5l8fzk5b87iudi' })
Vue.component('Icon', MyIcon)
```

tips: <a href="../iconfont.html?iconfontKey=font_8d5l8fzk5b87iudi">查看所有图标</a>

如果你使用 html-webpack-plugin 还提供一个插件[html-webpack-iconfont-plugin](https://github.com/busyrat/html-webpack-iconfont-plugin)，自动注入

::: demo

```html
<template>
  <div>
    <icon color="green" name="icon-biaoqing" size="36px" font-family="iconfont" />
    <icon name="icon-souren" size="36px" />
  </div>
</template>
```

:::

### Props

| Name        | Description                          | Type                | Required | Default    |
| ----------- | ------------------------------------ | ------------------- | -------- | ---------- |
| color       | 图标颜色，没有颜色即为使用 SVG 模式  | `String`            | `false`  | -          |
| size        | 图标大小                             | `String` / `Number` | `false`  | '20px'     |
| name        | 图标的名字，从 iconfont 仓库复制名字 | `String`            | `true`   | -          |
| font-family | iconfont 官网上可以配置              | `String`            | `false`  | 'iconfont' |
