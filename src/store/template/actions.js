import * as types from './types'

export const actionTemplate = payload => ({
  type: types.TEMPLATE_TYPE,
  payload,
})
