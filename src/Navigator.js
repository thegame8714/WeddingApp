import { StackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import MainScreen from './MainScreen'

const Navigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: { header: null }
  },
  Main: {
    screen: MainScreen,
    navigationOptions: { header: null }
  }
})

export default Navigator
