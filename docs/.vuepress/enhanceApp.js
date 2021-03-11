import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'elementui-custom/theme/v1.scss'
import Icon from 'elementui-custom/package/icon/index.js'
import Iconfont from './components/Iconfont'
import Verify from 'elementui-custom/package/verify'

export default ({ Vue }) => {
  Vue.use(ElementUI)
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
  Vue.component('Icon', Icon.createFromIconfontCN({
    key: 'font_8d5l8fzk5b87iudi'
  }))

  Vue.component('RIcon', Icon.createFromIconfontCN({
    key: 'font_2412575_kxagbx9rtsg'
  }))
  Vue.component('Iconfont', Iconfont)
}
