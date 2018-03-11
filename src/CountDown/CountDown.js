import React from 'react'
import moment from 'moment'
import { View, Text } from 'react-native'

export const getSecondsToDeadline = date => {
  const weddingTime = moment(['2018', '06', '23'])
  const currentMilliseconds = moment(date)

  return weddingTime.diff(currentMilliseconds)
}

export const getCountDown = date => {
  const diff = getSecondsToDeadline(date)

  var d, h, m, s
  s = Math.floor(diff / 1000)
  m = Math.floor(s / 60)
  s = s % 60
  h = Math.floor(m / 60)
  m = m % 60
  d = Math.floor(h / 24)
  h = h % 24
  return { d: d, h: h, m: m, s: s }
}

export default class Countdown extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      countdownValue: this.props.date
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        countdownValue: this.state.countdownValue + 1000
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval()
  }

  render() {
    const dateObj = getCountDown(this.state.countdownValue)

    return (
      <View
        style={{
          paddingTop: 50,
          alignItems: 'center',
          height: '23%',
          backgroundColor: '#f0f0f0'
        }}
      >
        <Text style={{ display: 'flex', fontSize: 30 }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: 80,
              height: 70,
              alignItems: 'center'
            }}
          >
            <Text style={{ fontSize: 46 }}>{`${dateObj.d}`}</Text>
            <Text>days</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: 60,
              height: 70
            }}
          >
            <Text style={{ fontSize: 46 }}>{`${dateObj.h}`}</Text>
            <Text>hours</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: 60,
              height: 70
            }}
          >
            <Text style={{ fontSize: 46 }}>{`${dateObj.m}`}</Text>
            <Text>minutes</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: 60,
              height: 70
            }}
          >
            <Text style={{ fontSize: 46 }}>{`${dateObj.s}`}</Text>
            <Text>seconds</Text>
          </View>
        </Text>
        <Text>to</Text>
        <Text style={{ fontSize: 40 }}>Saturday, June 23rd</Text>
      </View>
    )
  }
}
