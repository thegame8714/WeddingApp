import React from 'react'
import { View, Text } from 'react-native'
import Countdown from './CountDown/CountDown'
import WeatherWidget from './WheatherWidget'
import AccomodationWidget from './AccomodationWidget'

class MainScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Countdown date={new Date().getTime()} />
        <WeatherWidget />
        <AccomodationWidget />
      </View>
    )
  }
}

export default MainScreen
