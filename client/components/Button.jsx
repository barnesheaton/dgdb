import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Title3 } from './Text'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

export default function Button(props) {
  const { iconProps, textStyle, title, style, ...spreadProps } = props

  console.log(props)

  return (
    <TouchableOpacity {...spreadProps} style={[styles.button, style]}>
      {/* <View style={[styles.button, style]}> */}
      <Title3 style={textStyle}>{title}</Title3>
      {iconProps && <Icon size={13} color="white" {...iconProps} />}
      {/* </View> */}
    </TouchableOpacity>
  )
}

const TextButton = props => {
  const { style, ...spreadProps } = props
  return <Button style={[style, styles.textButton]} {...spreadProps} />
}

const CollapseButton = props => {
  const { collapsed, ...spreadProps } = props
  return (
    <TextButton
      iconProps={{ name: collapsed ? 'arrow-down' : 'arrow-right' }}
      {...spreadProps}
    />
  )
}

export { CollapseButton, TextButton }

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 8,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 48,
    padding: 16
    // width: '100%'
  },
  textButton: {
    height: 32,
    borderWidth: 0,
    backgroundColor: 'green'
  }
})
