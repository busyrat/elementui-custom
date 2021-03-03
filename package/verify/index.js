import { FormItem } from 'element-ui'
const ElFormItemMethods = FormItem.methods
import ruleMessages from './rules'

const install = Vue => {
  const ElFormItemComponent = Vue.component('ElFormItem')
  ElFormItemComponent.mixin({
    props: {
      minLength: String
    },
    mounted() {
      console.log(this.minLength)
    },
    methods: {
      getRules() {
        let rules = ElFormItemMethods.getRules.apply(this, arguments)
        rules.forEach(rule => {
          if (rule.required && !rule.message && this.label) {
            rule.message = ruleMessages.required.replace(/{{label}}/g, this.label)
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
