import Icon from './Icon.vue'
// import jsx from '../utils/jsx'
import { insertJS, insertCSS } from '../utils/insert-element'

// export default function create(options) {
//   const { key, extraCommonProps = {} } = options

//   insertJS(`//at.alicdn.com/t/${key}.js`)
//   insertCSS(`//at.alicdn.com/t/${key}.css`)

//   return {
//     mixins: [jsx],
//     render(h, context) {
//       const iconProps = { ...this.jsx_inherit(), ...extraCommonProps }
//       return <Icon {...iconProps} />
//     }
//   }
// }

export default function create(options) {
  const { key, extraCommonProps = {} } = options

  if (typeof window !== 'undefined') {
    insertJS(`//at.alicdn.com/t/${key}.js`)
    insertCSS(`//at.alicdn.com/t/${key}.css`)
  }

  const Iconfont = context => {
    const { props, slots, data } = context
    const { ...restProps } = { ...props, ...data.attrs }
    let content = null
    const children = slots.default && slots.default()
    if (children && children.length) {
      content = children
    }
    const iconProps = {
      ...extraCommonProps,
      ...restProps
    }
    return <Icon attrs={iconProps}>{content}</Icon>
  }

  return Iconfont
}
