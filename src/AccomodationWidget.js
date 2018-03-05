import React from 'react'
import {
  View,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
  Linking
} from 'react-native'
import moment from 'moment'
import T from 'tcomb-form-native'

const Form = T.form.Form

const Accomodation = T.struct({
  numberOfGuests: T.Number,
  checkinDate: T.Date,
  checkoutDate: T.Date
})

const options = {
  fields: {
    checkinDate: {
      label: 'Check-in Date',
      mode: 'date',
      config: {
        format: date => moment(date).format('YYYY-MM-DD')
      }
    },
    checkoutDate: {
      label: 'Check-out Date',
      mode: 'date',
      config: {
        format: date => moment(date).format('YYYY-MM-DD')
      }
    }
  }
}

class AccomodationWidget extends React.Component {
  constructor(props) {
    super(props)

    this.onPress = this.onPress.bind(this)
  }

  onPress() {
    const value = this.refs.form.getValue()
    const dates = {
      checkIn: moment(value.checkinDate).format('YYYY-MM-DD'),
      checkOut: moment(value.checkoutDate).format('YYYY-MM-DD')
    }

    Linking.openURL(
      `https://www.airbnb.co.uk/s/Florence--Italy/all?guests=${
        value.numberOfGuests
      }&children=0&checkin=${dates.checkIn}&pets=false&infants=0&checkout=${
        dates.checkOut
      }&refinement_paths%5B%5D=%2Ffor_you`
    )
  }

  render() {
    return (
      <View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View>
            <Form type={Accomodation} ref="form" options={options} />
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight onPress={this.onPress}>
          <Text>Check availability</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default AccomodationWidget
