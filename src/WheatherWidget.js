import React from 'react'
import axios from 'axios'

class WeatherWidget extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
            weatherData: undefined
        }
    }

    componentDidMount() {
        return axios
            .get('http://dataservice.accuweather.com/forecasts/v1/daily/10day/florence?apiKey=hs425rc4w8RUhtGYtC9XtGjWnUtmvkLq')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const {
            isLoading, weatherData
        } = this.state

        if(isLoading) return (<div>Loading data about the weather</div>)
        return (
            <div>Data has been loaded</div>
        )
    }
}