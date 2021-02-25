# elementui-custom 文档

> 菜单栏更精彩

## form-utils

::: demo

```vue
<template>
  <div>
    <el-form :model="form" ref="form">
      <el-form-item prop="name">
        <el-input v-model.trim="form.name" placeholder="请填写名称"></el-input>
      </el-form-item>
    </el-form>
    <el-button @click="toggle">{{ showError ? '清除' : '触发' }}错误</el-button>
  </div>
</template>
<script>
import { triggerError } from 'elementui-custom/package/utils/form-utils'

export default {
  data() {
    return {
      form: {
        name: ''
      },
      showError: false
    }
  },
  methods: {
    toggle() {
      this.showError = !this.showError
      triggerError(this.$refs.form, 'name', this.showError ? '主动报错啦' : null)
    }
  }
}
</script>
```

:::
