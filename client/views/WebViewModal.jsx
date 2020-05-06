import React from 'react'

import { WebView } from 'react-native-webview'

export default class extends React.Component {
  render() {
    return <WebView source={{ uri: this.props.navigation.state.params.link }} />
  }
}
