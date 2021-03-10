<template>
  <i v-if="color" :class="[fontFamily, name]" :style="styles"></i>
  <svg v-else aria-hidden="true" :style="styles">
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>
<script>
// 基于 iconfont 封装的字体图标，支持彩色
export default {
  name: 'icon',
  props: {
    // 图标颜色，没有颜色即为使用SVG模式
    color: String,
    // 图标大小
    size: {
      type: [String, Number],
      default: '20px'
    },
    // 图标的名字，从 iconfont 仓库复制名字
    name: {
      type: String,
      required: true
    },
    // iconfont 官网上可以配置
    fontFamily: {
      type: String,
      default: 'iconfont'
    }
  },

  computed: {
    styles() {
      let style = {}
      if (this.color) {
        if (this.size) {
          style['font-size'] = this.size
        }
        style['color'] = this.color
      } else {
        style['width'] = this.size
        style['height'] = this.size
      }
      return style
    }
  }
}
</script>
<style lang="scss" scoped>
svg {
  fill: currentColor;
  overflow: hidden;
}
</style>
