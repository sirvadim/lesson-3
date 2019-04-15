import React from 'react'
import PropTypes from 'prop-types'

import { styled } from '@ui/theme'
import { IconExpand, VBox } from '@ui/atoms'
import { FormAdornment } from '@ui/molecules'

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.pallete.neroGray : theme.pallete.darkWhite};
  height: 40px;
  min-height: 40px;
  border: 1px
    ${({ error, theme }) =>
      error ? theme.pallete.errorColor : theme.pallete.darkWhite}
    solid;
`
const ValueContainer = styled.div`
  display: flex;
  flex: 1;
  height: 40px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`

export const SelectInput = ({
  startAdornment,
  error,
  onPress,
  value,
  disabled,
}) => (
  <Container
    error={error}
    disabled={disabled}
    onClick={disabled ? null : onPress}
  >
    {startAdornment ? (
      <FormAdornment>{startAdornment}</FormAdornment>
    ) : (
      <VBox />
    )}
    <ValueContainer>{value}</ValueContainer>
    <FormAdornment>
      <IconExpand />
    </FormAdornment>
  </Container>
)

SelectInput.propTypes = {
  disabled: PropTypes.bool,
  startAdornment: PropTypes.node,
  error: PropTypes.string,
  value: PropTypes.string,
  onPress: PropTypes.func.isRequired,
}
