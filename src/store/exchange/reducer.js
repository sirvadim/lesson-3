import * as types from './types'

const initialState = {
  modalIsOpen: false,
  fromValue: '10:00',
  toValue: '20:00',
  rub: '',
  gbp: '',
}

export const reducer = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case types.SETFROM:
      return {
        ...state,
        fromValue: action.payload.value,
      }
    case types.SETTO:
      return {
        ...state,
        toValue: action.payload.value,
      }
    case types.SETRUB:
      return {
        ...state,
        rub: action.payload.value,
      }
    case types.SETGBP:
      return {
        ...state,
        gbp: action.payload.value,
      }
    default:
      console.log(state, action.type)
      return state
  }
}
