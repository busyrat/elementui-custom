import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'elementui-custom/theme/v1.scss'
import Icon from 'elementui-custom/package/icon'
import Iconfont from './components/Iconfont'
import Verify from 'elementui-custom/package/verify'

export default ({ Vue }) => {
  Vue.use(ElementUI)
  Vue.use(Verify, {
    rules: [
      [
        'lte',
        lte => ({
          type: "number",
          max: Number(lte),
          message: `不能大于${lte}`
        })
      ]
    ]
  })
  Vue.component('ZIcon', Icon)
  Vue.component('Iconfont', Iconfont)
}
