const e = (str, salt = '') => {
  if (typeof window !== 'undefined') {
    return window.btoa(window.encodeURI(str + salt))
  }
}

const d = (str, salt = '') => {
  if (typeof window !== 'undefined') {
    return window.decodeURI(window.atob(str)).replace(salt, '')
  }
}

export const encode = e

export const decode = d
