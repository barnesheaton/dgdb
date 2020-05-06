import React from 'react'
import * as resolvers from '../utils/network'

const withQuery = (WrappedComponent, queryNames) => {
  return class extends React.Component {
    state = {
      isLoading: true,
      error: null,
      data: null
    }

    componentDidMount() {
      const queries = Array.isArray(queryNames) ? queryNames : [queryNames]
      queries.forEach((query, index) => {
        resolvers[query]()
          .then(result => {
            if (!this.state.error) {
              this.setState({
                data: {
                  ...this.state.data,
                  [query]: result
                }
              })
            }
          })
          .catch(error => this.setState({ error }))
          .finally(() => {
            if (index + 1 === queries.length) {
              this.setState({ isLoading: false })
            }
          })
      })
    }

    render() {
      return (
        <WrappedComponent
          isLoading={this.state.isLoading}
          error={this.state.error}
          data={this.state.data}
          {...this.props}
        />
      )
    }
  }
}

export default withQuery
