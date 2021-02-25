export const triggerError = (ref, key, errorMsg) => {
  let formItem = ref.fields.find(i => i.prop === key)
  if (!formItem) return
  formItem.validateState = errorMsg ? 'error' : null
  formItem.validateMessage = errorMsg
}
