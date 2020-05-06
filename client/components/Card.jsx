import React from 'react'
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native'

import HTML from 'react-native-render-html'
import { withNavigation } from 'react-navigation'
import { boundMethod } from 'autobind-decorator'

import { colors } from '../utils/colors'
import { Title3, Subhead } from './Text'
import HorizontalLine from './HorizontalLine'
import Label from './Label'

class Card extends React.Component {
  render() {
    const { html, title, date, label, ...props } = this.props

    return (
      <TouchableOpacity {...props} disabled>
        <View style={styles.container}>
          {title && <Title3 b>{title}</Title3>}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 4
            }}
          >
            {label && (
              <Label
                color={label === 'Blog' ? colors.red : 'green'}
                style={{ marginRight: 4 }}
              >
                {label}
              </Label>
            )}
            {date && <Subhead>Posted: {date}</Subhead>}
          </View>
          <HorizontalLine />
          <HTML
            onLinkPress={this.onLinkPress}
            ignoredTags={['iframe']}
            html={html}
            baseFontStyle={{ fontFamily: 'Arial' }}
            ignoredStyles={['font-family', 'letter-spacing']}
            imagesMaxWidth={Dimensions.get('window').width - 50}
            customWrapper={content => {
              return <View style={styles.post}>{content}</View>
            }}
          />
          <View style={{ alignItems: 'center' }}>{props.children}</View>
        </View>
      </TouchableOpacity>
    )
  }

  @boundMethod
  onLinkPress(object, link) {
    this.props.navigation.navigate('WebViewModal', { link })
  }
}

export default withNavigation(Card)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'column',
    padding: 10,
    margin: 4,
    marginVertical: 16,
    borderRadius: 6,
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  post: {
    flexShrink: 1,
    alignItems: 'center'
  }
})
