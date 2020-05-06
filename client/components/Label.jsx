import React from 'react'
import { View } from 'react-native'

import { Callout } from './Text'

export default function(props) {
  return (
    <View
      style={[
        {
          backgroundColor: props.color ? props.color : 'grey',
          borderRadius: 4,
          padding: 2
        },
        props.style
      ]}
    >
      <Callout w>{props.children}</Callout>
    </View>
  )
}
