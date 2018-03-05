import React from 'react'
import { ScrollView, Text, Image, FlatList } from 'react-native'

class EventScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      eventSchedule: [
        { key: '- 17:00 Guests arrive' },
        { key: '- 17:30 Wedding starts' },
        { key: '- 18:00 Aperitif and snacks' },
        { key: '- 19:00 Dinner' },
        { key: '- 21:00 Music and dance until night' }
      ]
    }
  }
  render() {
    return (
      <ScrollView style={{ marginTop: 50, marginLeft: 10, marginRight: 10 }}>
        <Text style={{ fontSize: 24 }}>Venue</Text>
        <Text style={{ fontSize: 18 }}>Villa di Striano</Text>
        <Image
          source={{
            uri:
              'https://www.villadistriano.it/wp-content/uploads/2016/03/villadistriano_01-1500x1000.jpg'
          }}
          style={{
            marginTop: 10,
            height: 250,
            resizeMode: 'contain'
          }}
        />
        <Text>
          The venue is situated on the top of a hill, surrounded by a forest.
          The venue has a fixed number of parking spaces and bare in mind that
          there will be stairs to be done, but if you have some special requests
          on this matter, please let us know.
        </Text>
        <Text>
          From here you can see the whole Mugello valley and part of Florence.
        </Text>
        <Text style={{ fontSize: 20 }}>Event Schedule</Text>
        <FlatList
          data={this.state.eventSchedule}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />
      </ScrollView>
    )
  }
}

export default EventScreen
