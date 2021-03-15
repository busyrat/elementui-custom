<template>
  <div>
    <el-form class="print-ignore" inline :model="form" label-position="left" style="width: 500px;">
      <el-form-item prop="iconfontKey" label="Iconfont Key">
        <el-input style="width: 220px;" placeholder="iconfontKey" v-model.trim="form.iconfontKey" />
        <el-button @click="updateIcon">更新图标</el-button>
        <el-button @click="print" icon="el-icon-printer"></el-button>
      </el-form-item>
      <el-collapse>
        <el-collapse-item title="更多参数">
          <el-form-item prop="fontClass" label="FontClass/Symbol 前缀">
            <el-input v-model.trim="form.fontClass" placeholder="fontClass" />
          </el-form-item>
          <el-form-item prop="fontFamily" label="Font Family">
            <el-input v-model.trim="form.fontFamily" placeholder="fontFamily" />
          </el-form-item>
        </el-collapse-item>
      </el-collapse>
    </el-form>

    <ul class="icon-list zicon">
      <li v-for="name in icons" :key="name">
        <span>
          <icon :class="name" :name="name" size="36px" :font-family="form.fontFamily" />
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
import { insertJS, insertCSS, copyToClipboard } from 'elementui-custom/package/utils/insert-element'

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
    this.form = { ...this.form, ...this.$route.query }
    if (typeof window !== 'undefined') {
      this.updateIcon()
    }
  },

  methods: {
    print() {
      window.print()
    },
    updateIcon() {
      insertCSS(`https://at.alicdn.com/t/${this.form.iconfontKey}.css`)
        .then(el => {
          this.icons = this.getIcons(this.form.fontClass)
          this.$nextTick(() => {
            this.iconLists = [...this.$el.getElementsByClassName('icon-list')]
            this.iconLists.forEach(item => item.addEventListener('click', this.iconListClick, false))
          })
        })
        .catch(() => {
          this.icons = []
        })
      insertJS(`https://at.alicdn.com/t/${this.form.iconfontKey}.js`).catch(() => {
        this.icons = []
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
        return [...rules].some(rule => reg.test(rule.cssText)) && sheet.href?.includes(this.form.iconfontKey)
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

    iconListClick(e) {
      let className
      if (/use/.test(e.target.tagName)) {
        className = e.target.parentNode.className.baseVal
      } else if (/svg/.test(e.target.tagName)) {
        className = e.target.className.baseVal
      } else {
        className = e.target.className
      }
      if (new RegExp(`^${this.form.fontClass}`).test(className)) {
        copyToClipboard(className)
        if (this.$message) {
          this.$message(`copy: ${className}`)
        }
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

@media print {
  .print-ignore, .navbar  {
    display: none;
  }
}
</style>
