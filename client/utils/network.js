import Config from 'react-native-config'

export function fetchFromAPI({ path, options, params }) {
  let paramString = ''
  if (params) {
    paramString = Object.keys(params)
      .map(key => {
        return `&${key}=${params[key]}`
      })
      .join(' ')
  }

  const requestURL = `${Config.API_URL + path}?apikey=${Config.API_KEY +
    paramString}`

  const requestOptions = options ? options : {}

  return fetch(requestURL, {
    method: 'GET',
    ...requestOptions
  })
    .then(response => {
      return response
        .json()
        .then(result => {
          return result.response.data
        })
        .catch(error => error)
    })
    .catch(error => error)
}

export function getBlogPosts(params) {
  return fetchFromAPI({ path: '/blog/get', params })
}

export function getSetLists() {
  return fetchFromAPI({
    path: '/setlists/recent'
  })
}
