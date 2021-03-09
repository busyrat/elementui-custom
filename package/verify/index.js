import { FormItem } from 'element-ui'
const ElFormItemMethods = FormItem.methods

let preRules = {}
const addRule = (key, ruleFunc) => (preRules[key] = ruleFunc)

const init = () => {
  addRule('requiredAlias', (requiredAlias, ctx) => {
    return {
      trigger: 'blur',
      required: true,
      message: `请输入${ctx[requiredAlias]}`
    }
  })
  addRule('min', min => ({
    min: min,
    trigger: 'blur',
    message: `请输入至少${min}个字符`
  }))

  addRule('phone', phone => ({
    pattern: /^(?=\d{11}$)^1(?:3\d|4[57]|5[^4\D]|6[67]|7[^249\D]|8\d|9[189])\d{8}$/,
    trigger: 'blur',
    message: '请输入正确的手机号'
  }))

  addRule('email', mail => ({
    type: 'email',
    trigger: 'blur',
    message: '请输入正确的邮箱'
  }))

  addRule('len', len => ({
    len,
    trigger: 'blur',
    message: `请输入${len}位字符`
  }))
  addRule('gt', gt => ({
    trigger: 'blur',
    validator: (rule, val, callback) => {
      if (val > Number(gt)) callback()
      else callback(Error(`输入内容应大于${gt}`))
    }
  }))
}

const install = (Vue, options) => {
  const ElFormItemComponent = Vue.component('ElFormItem')

  init()

  if (options.rules) {
    options.rules.forEach(([key, rule]) => addRule(key, rule))
  }

  let props = {}
  Object.keys(preRules).forEach(key => (props[key] = String))

  ElFormItemComponent.mixin({
    props,
    methods: {
      getRules() {
        let rules = ElFormItemMethods.getRules.apply(this, arguments)

        Object.keys(preRules).forEach(key => {
          if (this[key] !== undefined) {
            rules.push(preRules[key](this[key], this))
          }
        })

        return rules
      }
    }
  })
}

export default {
  install
}
