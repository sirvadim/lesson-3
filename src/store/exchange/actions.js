import * as types from './types'

export const changeCode = value => ({
  type: types.CHANGE_CODE,
  payload: {
    value,
  },
})

export const resetState = () => ({
  type: types.RESET,
})

export const start = () => ({
  type: types.START,
})
export const done = () => ({
  type: types.DONE,
})
export const failure = () => ({
  type: types.FAILURE,
})

export const setFrom = value => ({
  type: types.SETFROM,
  payload: {
    value,
  },
})
export const setTo = value => ({
  type: types.SETTO,
  payload: {
    value,
  },
})

export const setRub = value => ({
  type: types.SETRUB,
  payload: {
    value,
  },
})

export const setGbp = value => ({
  type: types.SETGBP,
  payload: {
    value,
  },
})
