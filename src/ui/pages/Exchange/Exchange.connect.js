import { connect } from 'react-redux'

// import { getFromValue, getToValue } from '@store/exchange/selectors'
import {
  getFromValue,
  getToValue,
  getRub,
  getGbp,
} from '@store/exchange/selectors'
import { changeCode } from '@store/exchange/actions'
import {
  confirmNumber,
  setFromValue,
  setToValue,
  getData,
  setRub,
  setGbp,
} from '@store/exchange/thunks'
import { Exchange } from './Exchange'

// import { getCodeValue, getStatus } from '@store/confirm/selectors'
// import { changeCode } from '@store/confirm/actions'
// import { confirmNumber } from '@store/confirm/thunks'
// import { SignInConfirm } from './SignInConfirm'

// const mapStateToProps = state => ({
//   fromValue: getCodeValue(state),
//   toValue: getStatus(state),
// })
const mapStateToProps = state => ({
  fromValue: getFromValue(state),
  toValue: getToValue(state),
  rub: getRub(state),
  gbp: getGbp(state),
})

export const ExchangeContainer = connect(
  mapStateToProps,
  {
    changeCode,
    confirmNumber,
    setFromValue,
    setToValue,
    getData,
    setRub,
    setGbp,
  },
)(Exchange)
