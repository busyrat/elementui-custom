## Form Extend

### form-utils

#### triggerError(ref, prop, errorMessage)

Arugments:

- ref: 表单（el-form）上标记的 ref
- prop: 表单项（el-form-item）上的 prop 属性名
- errorMessage: 报错的提示文案

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

### 表单的校验

在 el-form-item 标签上添加属性

支持全局添加表单校验规则

```js
Vue.use(Verify, {
  rules: [
    [
      'lte',
      lte => ({
        type: 'number',
        max: Number(lte),
        message: `不能大于${lte}`
      })
    ]
  ]
})
```

内置一些规则：

- requiredAlias 必填文案关联其他属性，比如示例中关联 label 属性，懒人必备
- min 至少多少个字符
- phone 手机号校验
- email 邮箱校验
- len 固定字符个数，比如身份证18位等
- gt 输入的数字大于多少

:::demo

```vue
<template>
  <div>
    <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="年龄" prop="age" requiredAlias="label" gt="20" lte="30">
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
