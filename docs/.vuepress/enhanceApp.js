import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'elementui-custom/theme/v1.scss'
import Icon from 'elementui-custom/package/icon'
import Iconfont from './components/Iconfont'

export default ({ Vue }) => {
  Vue.use(ElementUI)
  Vue.component('ZIcon', Icon)
  Vue.component('Iconfont', Iconfont)
}
