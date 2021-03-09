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
      if (/use/.test(e.target.tagName) ) {
        className = e.target.parentNode.className.baseVal
      } else if (/svg/.test(e.target.tagName) ) {
        className = e.target.className.baseVal
      } else {
        className = e.target.className
      }
      if (/^(el-icon)/.test(className)) {
        this.copyToClipboard(`<i class="${className}"/>`)
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
