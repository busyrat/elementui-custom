export default {
  methods: {
    jsx_inherit(defaultOption = {}) {
      const { ...restProps } = { ...this.$props, ...this.$attrs }

      return {
        attrs: {
          ...defaultOption.attrs,
          ...restProps,
        },
        on: {
          ...defaultOption.on,
          ...this.$listeners
        },
        scopedSlots: this.$scopedSlots
      }
    },

    // 等效：模板中的 :key.sync="variable"
    jsx_attrSync(key, variable) {
      return {
        attrs: {
          [key]: this[variable]
        },
        on: {
          [`update:${key}`]: v => (this[variable] = v)
        }
      }
    }

    // // 连字符转小驼峰
    // jsx_littleCamel(str) {
    //   return str.replace(/-(\w)/g, (all, letter) => {
    //     return letter.toUpperCase()
    //   })
    // },

    // jsx_attrsLittleCamel(obj) {
    //   Object.keys(obj).forEach(key => {
    //     if (/-/.test(key)) {
    //       obj[this.jsx_littleCamel(key)] = obj[key]
    //       delete obj[key]
    //     }
    //   })
    //   return obj
    // }
  }

  // computed: {
  //   ['$$attrs']() {
  //     return this.jsx_attrsLittleCamel(this.$attrs)
  //   }
  // }
}
