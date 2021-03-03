import { FormItem } from 'element-ui'
const ElFormItemMethods = FormItem.methods
import ruleMessages from './rules'

const install = Vue => {
  const ElFormItemComponent = Vue.component('ElFormItem')

  let props = {}
  Object.keys(ruleMessages).forEach(key => (props[key] = String))

  ElFormItemComponent.mixin({
    props,
    methods: {
      getRules() {
        let rules = ElFormItemMethods.getRules.apply(this, arguments)
        rules.forEach(rule => {
          if (rule.required && !rule.message && this.label) {
            rule.message = ruleMessages.required.replace(/{label}/g, this.label)
          }
        })
        if (this.min) {
          rules.push({
            min: this.min,
            message: ruleMessages.min.replace(/{min}/g, this.min),
            trigger: 'blur'
          })
        }
        if (this.phone !== undefined) {
          rules.push({
            pattern: /^(?=\d{11}$)^1(?:3\d|4[57]|5[^4\D]|6[67]|7[^249\D]|8\d|9[189])\d{8}$/,
            message: ruleMessages.phone
          })
        }
        if (this.mail !== undefined) {
          rules.push({
            type: 'email',
            message: ruleMessages.email
          })
        }
        if (this.len !== undefined) {
          rules.push({
            len: this.len,
            message: ruleMessages.len.replace(/{len}/g, this.len)
          })
        }
        if (this.gt !== undefined) {
          rules.push({
            validator: (rule, val, callback) => {
              console.log(val, this.gt)
              if (val > Number(this.gt)) callback()
              else callback(Error(ruleMessages.gt.replace(/{gt}/g, this.gt)))
            }
          })
        }
        return rules
      }
    }
  })
}

export default {
  install
}
