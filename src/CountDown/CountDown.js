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
      <View style={{ marginTop: 50 }}>
        <Text>{`${dateObj.d} days ${dateObj.h} hours ${dateObj.m} minutes ${
          dateObj.s
        } seconds`}</Text>
      </View>
    )
  }
}
