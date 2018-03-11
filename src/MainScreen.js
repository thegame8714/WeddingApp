import React from 'react'
import { ScrollView, Text } from 'react-native'
import Countdown from './CountDown/CountDown'
import WeatherWidget from './WheatherWidget'
import AccomodationWidget from './AccomodationWidget'

class MainScreen extends React.Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        <Countdown date={new Date().getTime()} />
        <WeatherWidget />
        <AccomodationWidget />
      </ScrollView>
    )
  }
}

export default MainScreen
