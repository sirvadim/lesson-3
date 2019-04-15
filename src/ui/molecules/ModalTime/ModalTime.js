import React from 'react'
import PropTypes from 'prop-types'
import { Time } from '@ui/molecules'

const TimeData = min => {
  let arr = []
  for (let i = 10; i < 21; i++) {
    let j = i + ':00'
    if (i.length === 1) j = '0' + j
    if (min < j) arr.push(j)
  }
  return arr
}

export const ModalTime = ({ to, fromCb, toCb, min }) => (
  <div>
    {TimeData(min).map((elem, index) => (
      <Time
        id={index}
        key={index}
        title={elem}
        onPress={() => {
          console.log(index, fromCb)
          to ? toCb(elem) : fromCb(elem)
        }}
      />
    ))}
  </div>
)

ModalTime.propTypes = {}
