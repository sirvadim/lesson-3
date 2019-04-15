import React from 'react'
import { storiesOf } from '@storybook/react'
import { Time } from './Time'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('ui/molecules', module).add('Time', () => (
  <Time title={text('title', '10:00')} id="1" onPress={action('onPress')} />
))
