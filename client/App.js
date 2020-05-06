import React from 'react'
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation'

import CustomDrawer from './components/CustomDrawer'
import HomeView from './views/HomeView'
import SongView from './views/SongView'
import WebViewModal from './views/WebViewModal'

const stackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeView
    },
    Song: {
      screen: SongView
    }
  },
  {
    mode: 'card'
  }
)

const modalNavigator = createStackNavigator(
  {
    Stack: stackNavigator,
    WebViewModal: {
      screen: WebViewModal
    }
  },
  {
    initialRouteName: 'Stack',
    mode: 'modal',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTitle: 'Phish!',
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
)

const rootNavigator = createDrawerNavigator(
  {
    Root: modalNavigator
  },
  {
    initialRouteName: 'Root',
    contentComponent: CustomDrawer
  }
)

const AppContainer = createAppContainer(rootNavigator)

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
