import React from 'react'
import { Text as ReactText, StyleSheet } from 'react-native'

export default function Text(props) {
  const { style, bold, b, white, w, ...passProps } = props
  return (
    <ReactText
      style={[style, (bold || b) && styles.bold, (white || w) && styles.white]}
      {...passProps}
    >
      {props.children}
    </ReactText>
  )
}

const Title1 = props => {
  return <Text style={styles.title1} {...props} />
}
const Title2 = props => {
  return <Text style={styles.title2} {...props} />
}
const Title3 = props => {
  return <Text style={styles.title3} {...props} />
}
const Body = props => {
  return <Text style={styles.body} {...props} />
}
const Callout = props => {
  return <Text style={styles.callout} {...props} />
}
const Subhead = props => {
  return <Text style={styles.subhead} {...props} />
}
const Footnote = props => {
  return <Text style={styles.footnote} {...props} />
}

export { Body, Title1, Title2, Title3, Callout, Subhead, Footnote }

const styles = StyleSheet.create({
  bold: {
    fontWeight: '800'
  },
  white: {
    color: 'white'
  },
  title1: {
    fontSize: 28
  },
  title2: {
    fontSize: 22
  },
  title3: {
    fontSize: 20
  },
  body: {
    fontSize: 17
  },
  callout: {
    fontSize: 16
  },
  subhead: {
    fontSize: 15
  },
  footnote: {
    fontSize: 13
  }
})
