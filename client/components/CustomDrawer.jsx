import React from 'react'
import { ScrollView, View } from 'react-native'

import { CollapseButton, TextButton } from './Button'

const routes = [
  { title: 'Home', route: 'Home' },
  { title: 'Shows', children: [{ title: 'Setlists', route: 'Setlists' }] }
]

export default class extends React.Component {
  state = {
    extendedParents: {}
  }

  render() {
    return (
      <ScrollView
        alwaysBounceVertical={false}
        contentContainerStyle={{ flex: 1, paddingTop: 40 }}
        style={{ backgroundColor: '#36699D' }}
      >
        {routes.map(parent => {
          if (parent.route) {
            return (
              <TextButton
                style={{ justifyContent: 'flex-start' }}
                key={parent.title}
                title={parent.title}
                onPress={() => {}}
              />
            )
          } else {
            const isCollapsed = this.state.extendedParents[parent.title]

            return (
              <View key={parent.title} style={{ flex: 1 }}>
                <CollapseButton
                  collapsed={isCollapsed}
                  style={{ justifyContent: 'flex-start' }}
                  textStyle={{ color: 'white' }}
                  key={parent.title}
                  title={parent.title}
                  onPress={() => {
                    this.setState({
                      extendedParents: {
                        ...this.state.extendedParents,
                        [parent.title]: isCollapsed ? false : true
                      }
                    })
                  }}
                />
                {isCollapsed &&
                  parent.children.map(child => {
                    return (
                      <TextButton
                        style={{ justifyContent: 'flex-start', marginLeft: 20 }}
                        key={child.title}
                        title={child.title}
                        onPress={() => {}}
                      />
                    )
                  })}
              </View>
            )
          }
        })}
      </ScrollView>
    )
  }
}
