import { connect } from 'react-redux'

import { getCodeValue, getStatus } from '@store/confirm/selectors'
import { changeCode } from '@store/confirm/actions'
import { confirmNumber } from '@store/confirm/thunks'
import { SignInConfirm } from './SignInConfirm'

const mapStateToProps = state => ({
  value: getCodeValue(state),
  status: getStatus(state),
})

export const SignInConfirmContainer = connect(
  mapStateToProps,
  { changeCode, confirmNumber },
)(SignInConfirm)
