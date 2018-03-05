import React from 'react'
import axios from 'axios'
import { View, Text } from 'react-native'

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
        'http://dataservice.accuweather.com/forecasts/v1/daily/5day/216189?apikey=hs425rc4w8RUhtGYtC9XtGjWnUtmvkLq'
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
      <View>
        {weatherData.map((dayliyData, index) => (
          <Text key={index}>
            {dayliyData.Date} {dayliyData.Day.IconPhrase}
          </Text>
        ))}
      </View>
    )
  }
}

export default WeatherWidget
