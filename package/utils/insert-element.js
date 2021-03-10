const _cache = {}

export function insertJS(src) {
  if (_cache[src]) {
    document.head.removeChild(_cache[src])
    _cache[src] = null
  }
  return new Promise((resolve, reject) => {
    const el = document.createElement('script')
    el.setAttribute('src', src)

    document.head.append(el)
    _cache[src] = el
    el.onload = () => resolve(el, ...arguments)
    el.onerror = reject
  })
}

export function insertCSS(href) {
  if (_cache[href]) {
    document.head.removeChild(_cache[href])
    _cache[href] = null
  }
  return new Promise((resolve, reject) => {
    const el = document.createElement('link')
    el.setAttribute('rel', 'styleSheet')
    el.setAttribute('href', href)
    el.setAttribute('type', 'text/css')
    el.setAttribute('crossorigin', 'anonymous')
    document.head.append(el)
    _cache[href] = el
    el.onload = () => resolve(el, ...arguments)
    el.onerror = reject
  })
}

export function copyToClipboard(value) {
  const input = document.createElement('input')
  // 禁止键盘弹起
  input.setAttribute('readonly', 'readonly')
  input.setAttribute('value', value)
  input.style.position = 'fixed'
  document.body.appendChild(input)
  // input.select()
  input.focus()
  input.setSelectionRange(0, 9999)
  if (document.execCommand) {
    document.execCommand('copy')
  }
  document.body.removeChild(input)
}
