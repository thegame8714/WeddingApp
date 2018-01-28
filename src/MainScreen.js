import React from 'react'
import { TabNavigator } from 'react-navigation'
import { View, Text } from 'react-native'
import TestScreen from './TestScreen'
import Countdown from './CountDown/CountDown'

const MainNavigator = TabNavigator({
  Home: {
    screen: TestScreen
  },
  Confirm: {
    screen: TestScreen
  },
  Event: {
    screen: TestScreen
  },
  OurStory: {
    screen: TestScreen
  }
})

class MainScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Countdown date={new Date().getTime()} />
        <MainNavigator navigation={this.props.navigation} />
      </View>
    )
  }
}

MainScreen.router = MainNavigator.router

export default MainScreen
