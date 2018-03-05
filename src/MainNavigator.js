import React from 'react'
import { TabNavigator } from 'react-navigation'
import TestScreen from './TestScreen'
import MainScreen from './MainScreen'
import ConfirmScreen from './ConfirmScreen'
import EventScreen from './EventScreen'
import { View } from 'react-native'

const MainNavigator = TabNavigator({
  Home: {
    screen: MainScreen,
    navigationOptions: {
      tabBarLabel: 'Main'
    }
  },
  Confirm: {
    screen: ConfirmScreen,
    navigationOptions: {
      tabBarLabel: 'Confirm'
    }
  },
  Event: {
    screen: EventScreen,
    navigationOptions: {
      tabBarLabel: 'Event'
    }
  },
  OurStory: {
    screen: TestScreen,
    navigationOptions: {
      tabBarLabel: 'Our Story'
    }
  }
})

export default MainNavigator
