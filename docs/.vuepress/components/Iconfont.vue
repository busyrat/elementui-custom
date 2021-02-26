<template>
  <div>
    <el-form inline :model="form" label-position="left" style="width: 500px;" >
      <el-form-item prop="iconfontKey" label="Iconfont Key">
        <el-input style="width: 220px;" v-model.trim="form.iconfontKey" />
      </el-form-item>
      <el-form-item prop="fontClass" label="FontClass/Symbol 前缀">
        <el-input v-model.trim="form.fontClass" />
      </el-form-item>
      <el-form-item prop="fontFamily" label="Font Family">
        <el-input v-model.trim="form.fontFamily" />
      </el-form-item>
      <el-form-item>
        <el-button @click="updateIcon">更新图标</el-button>
      </el-form-item>
    </el-form>

    <ul class="icon-list zicon">
      <li v-for="name in icons" :key="name">
        <span>
          <z-icon :class="name" :name="name" size="36px" :font-family="form.fontFamily" />
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {},

  data() {
    return {
      form: {
        fontClass: 'icon-', // zicon
        fontFamily: 'iconfont', // zicon
        iconfontKey: 'font_1319159_kembldgeud' // font_1317823_o1fgf5lq9yq
      },
      icons: []
    }
  },

  created() {
    this.updateIcon()
  },

  methods: {
    updateIcon() {
      this.insertCSS(`https://at.alicdn.com/t/${this.form.iconfontKey}.css`)
        .then(() => {
          this.icons = this.getIcons(this.form.fontClass)
          this.$nextTick(() => {
            this.iconLists = [...this.$el.getElementsByClassName('icon-list')]
            this.iconLists.forEach(item => item.addEventListener('click', this.iconListClick, false))
          })
        })
        .catch(() => {
          this.icons = []
        })
      this.insertJS(`https://at.alicdn.com/t/${this.form.iconfontKey}.js`).catch(() => {
        this.icons = []
      })
    },
    insertCSS(href) {
      if (this.iconfontCSS) {
        document.head.removeChild(this.iconfontCSS)
      }
      return new Promise((resolve, reject) => {
        this.iconfontCSS = document.createElement('link')
        this.iconfontCSS.setAttribute('rel', 'styleSheet')
        this.iconfontCSS.setAttribute('href', href)
        this.iconfontCSS.setAttribute('type', 'text/css')
        this.iconfontCSS.setAttribute('crossorigin', 'anonymous')
        document.head.append(this.iconfontCSS)
        this.iconfontCSS.onload = resolve
        this.iconfontCSS.onerror = reject
      })
    },
    insertJS(src) {
      if (this.iconfontJS) {
        document.head.removeChild(this.iconfontJS)
      }
      return new Promise((resolve, reject) => {
        this.iconfontJS = document.createElement('script')
        this.iconfontJS.setAttribute('src', src)

        document.head.append(this.iconfontJS)
        this.iconfontJS.onload = resolve
        this.iconfontJS.onerror = reject
      })
    },
    getIcons(key) {
      const reg = new RegExp(`^\.(${key})[\\w-]*?(?=:{1,2}before\\s*\\{\\s*content)`, 'g')
      // 过滤包含 .keyxxx:before{ content } 的 styleStyleSheets
      let styleStyleSheets = Object.values(document.styleSheets).filter(sheet => {
        let rules = []
        if (sheet.hasOwnProperty('rules')) {
          rules = sheets.rules
        } else {
          try {
            rules = sheet.cssRules
          } catch (e) {
            console.warn("Can't read the css rules of: " + sheet.href, e)
            return false
          }
          rules = sheet.cssRules
        }
        return [...rules].some(rule => reg.test(rule.cssText))
      })

      let iconClasses = []
      const rules = [...styleStyleSheets[0].cssRules]
      rules.forEach(rule => {
        const name = rule.cssText.match(reg)
        if (name) {
          iconClasses.push(name[0].slice(1))
        }
      })
      // 最后去个重
      return [...new Set(iconClasses)]
    },
    copyToClipboard(value) {
      const input = document.createElement('input')
      // 禁止键盘弹起
      input.setAttribute('readonly', 'readonly')
      input.setAttribute('value', value)
      input.style.position = 'fixed'
      document.body.appendChild(input)
      // input.select()
      input.focus()
      input.setSelectionRange(0, 9999)
      if (document.execCommand) {
        document.execCommand('copy')
      }
      document.body.removeChild(input)
    },
    iconListClick(e) {
      let className
      if (/use/.test(e.target.tagName)) {
        className = e.target.parentNode.className.baseVal
      } else if (/svg/.test(e.target.tagName)) {
        className = e.target.className.baseVal
      } else {
        className = e.target.className
      }
      this.copyToClipboard(className)
      if (this.$message) {
        this.$message(`copy: ${className}`)
      }
    }
  }
}
</script>
<style lang="stylus" scope>
.icon-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
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
  &.zicon {
    li {
      width: 60px;
      height: 60px;
      &:hover {
        > span {
          width: 120px;
          height: 120px;
          left: -30px;
          top: -30px;
          svg {
            width: 80px !important;
            height: 80px !important;
          }
        }
      }
    }
  }
}
</style>
