export const CHANGE_VALUE = 'CHANGE_VALUE'
export const CLEAR_VALUE = 'CLEAR_VALUE'

export const changeValue = (value) => ({
  type: CHANGE_VALUE,
  payload: value
})

export const clearValue = () => ({
  type: CLEAR_VALUE,
})