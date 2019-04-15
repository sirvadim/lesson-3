import { push } from 'connected-react-router'

import { routes } from '../../routes'
import * as actions from './actions'
import { getCodeValue } from './selectors'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export const confirmNumber = () => async (dispatch, getState) => {
  // dispatch(actions.start())

  try {
    //   const code = getCodeValue(getState())
    //   const res = await fetch(
    //     `https://my-json-server.typicode.com/IgorAntonov/confirmation/code?${code}`,
    //   )
    //   const { status } = await res.json()
    //   if (status === 'OK') {
    //     dispatch(actions.done())
    //   } else {
    //     throw new Error('error')
    //   }
    //   await delay(1000)
    //   dispatch(actions.resetState())
    //   dispatch(push(routes.EXCHANGE))
  } catch (e) {
    // dispatch(actions.failure())
  }
}

export const setFromValue = value => dispatch => {
  console.log(value, actions.setFrom(value))
  dispatch(actions.setFrom(value))
}

export const setToValue = value => dispatch => {
  console.log(value, actions.setTo(value))
  dispatch(actions.setTo(value))
}

export const setRub = value => dispatch => {
  console.log(value, actions.setRub(value))
  dispatch(actions.setRub(value))
}

export const setGbp = value => dispatch => {
  console.log(value, actions.setGbp(value))
  dispatch(actions.setGbp(value))
}

export const getData = () => async dispatch => {
  try {
    const res = await fetch(`https://www.cbr-xml-daily.ru/daily_json.js`)
  } catch (e) {
    // dispatch(actions.failure())
  }
}
