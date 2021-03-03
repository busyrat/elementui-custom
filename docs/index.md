# elementui-custom

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

报错

:::demo

```vue
<template>
  <div>
    <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="年龄" prop="age" required minLength="2">
        <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
        <el-button @click="resetForm('numberValidateForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberValidateForm: {
        age: ''
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
```

:::
