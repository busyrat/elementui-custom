import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'elementui-custom/theme/v1.scss'
import Icon from 'elementui-custom/package/icon'
import Iconfont from './components/Iconfont'
import Verify from 'elementui-custom/package/verify'

export default ({ Vue }) => {
  Vue.use(ElementUI)
  Vue.use(Verify)
  Vue.component('ZIcon', Icon)
  Vue.component('Iconfont', Iconfont)
}
