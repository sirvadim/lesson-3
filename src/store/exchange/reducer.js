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
        fromValue: action.payload,
      }
    case types.SETTO:
      return {
        ...state,
        toValue: action.payload,
      }
    case types.SETRUB:
      return {
        ...state,
        rub: action.payload,
      }
    case types.SETGBP:
      return {
        ...state,
        gbp: action.payload,
      }
    default:
      return state
  }
}
