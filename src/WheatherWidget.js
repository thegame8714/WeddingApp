import React from 'react'
import axios from 'axios'
import { View, Text, Image } from 'react-native'
import moment from 'moment'

class WeatherWidget extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      weatherData: undefined
    }
  }

  componentDidMount() {
    return axios({
      method: 'GET',
      url:
        'https://dataservice.accuweather.com/forecasts/v1/daily/5day/216189?apikey=hs425rc4w8RUhtGYtC9XtGjWnUtmvkLq'
    })
      .then(res => {
        this.setState({
          isLoading: false,
          weatherData: res.data.DailyForecasts
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { isLoading, weatherData } = this.state

    if (isLoading)
      return (
        <View>
          <Text>Loading data about the weather</Text>
        </View>
      )
    return (
      <View
        style={{
          display: 'flex',
          backgroundColor: '#c0e5eb',
          padding: 10
        }}
      >
        <Text style={{ fontSize: 30 }}>Florence weather</Text>
        {weatherData.map((dayliyData, index) => {
          const IconCode =
            dayliyData.Day.Icon < 10
              ? '0' + dayliyData.Day.Icon
              : dayliyData.Day.Icon
          return (
            <View
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignContent: 'center',
                height: 80,
                paddingTop: 10,
                paddingBottom: 10
              }}
            >
              <Text style={{ flexBasis: '20%', fontSize: 18 }}>
                {moment(dayliyData.Date).format('DD/MM')}
              </Text>
              <Image
                source={{
                  uri: `https://developer.accuweather.com/sites/default/files/${IconCode}-s.png`
                }}
                style={{
                  width: 30,
                  height: 70,
                  flexBasis: '30%',
                  alignContent: 'flex-start'
                }}
              />
              <Text style={{ flexBasis: '30%', paddingLeft: 10 }}>
                {dayliyData.Day.IconPhrase}
              </Text>
            </View>
          )
        })}
      </View>
    )
  }
}

export default WeatherWidget
