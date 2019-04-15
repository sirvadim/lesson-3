import * as types from './types'
import { createAction } from 'redux-actions'

export const changeCode = createAction(types.CHANGE_CODE)
export const resetState = createAction(types.RESET)
export const start = createAction(types.START)
export const done = createAction(types.DONE)
export const failure = createAction(types.FAILURE)
export const setFrom = createAction(types.SETFROM)
export const setTo = createAction(types.SETTO)
export const setRub = createAction(types.SETRUB)
export const setGbp = createAction(types.SETGBP)
