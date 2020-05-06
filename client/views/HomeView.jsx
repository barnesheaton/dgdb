import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import { orderBy } from 'lodash'

import Card from '../components/Card'
import withQuery from '../components/withQuery'
import { TextButton } from '../components/Button'

class HomeView extends React.Component {
  render() {
    const { isLoading, error, data } = this.props
    if (isLoading || error) return <View style={styles.container} />

    const orderedPosts = orderBy(
      [...data.getBlogPosts, ...data.getSetLists],
      object => {
        return new Date(object.pubdate ? object.pubdate : object.showdate)
      },
      ['desc']
    )

    return (
      <View style={styles.container}>
        <TextButton title="Hello?" />
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {orderedPosts.map((post, index) => {
            return (
              <Card
                key={index}
                title={post.title || `Phish: ${post.long_date}`}
                date={post.pubdate}
                label={post.showid ? 'Setlist' : 'Blog'}
                html={post.showid ? post.setlistdata : post.teaser}
              />
            )
          })}
        </ScrollView>
      </View>
    )
  }
}

export default withQuery(HomeView, ['getBlogPosts', 'getSetLists'])

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10
  },
  contentContainer: {}
})
