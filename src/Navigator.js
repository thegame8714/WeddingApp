import { StackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import MainScreen from './MainScreen'
import TestScreen from './TestScreen'
import MainNavigator from './MainNavigator'

const Navigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: { header: null }
  },
  Main: {
    screen: MainNavigator,
    navigationOptions: { header: null }
  }
})

export default Navigator
