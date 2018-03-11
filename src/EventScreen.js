import React from 'react'
import {
  ScrollView,
  View,
  Text,
  Image,
  FlatList,
  TouchableHighlight,
  Linking,
  Button
} from 'react-native'

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
      ],
      currentPosition: null
    }

    this.onVillaLinkPress = this.onVillaLinkPress.bind(this)
    this.onVillaDirectionLinkPress = this.onVillaDirectionLinkPress.bind(this)
  }

  onVillaLinkPress() {
    Linking.openURL('https://www.villadistriano.it/').catch(err =>
      console.error('An error occurred', err)
    )
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(res =>
      this.setState({
        currentPosition: res
      })
    )
  }

  onVillaDirectionLinkPress() {
    const { currentPosition } = this.state
    Linking.openURL(
      `https://www.google.co.uk/maps/dir/${currentPosition.coords.latitude},${
        currentPosition.coords.longitude
      }/Villa+di+Striano,+Loc.+Striano,+Borgo+S.+Lorenzo,+50032+Borgo+San+Lorenzo+FI,+Italy`
    ).catch(err => console.error('An error occurred', err))
  }

  render() {
    return (
      <ScrollView
        style={{
          paddingTop: 50,
          paddingLeft: 10,
          paddingRight: 10,
          backgroundColor: '#fff',
          display: 'flex'
        }}
      >
        <View
          style={{
            display: 'flex',
            flexBasis: '50%',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <View style={{ display: 'flex', flexDirection: 'column' }}>
            <Text style={{ fontSize: 24 }}>Venue</Text>
            <Text style={{ fontSize: 18 }}>Villa di Striano</Text>
            <TouchableHighlight onPress={this.onVillaLinkPress}>
              <Text
                style={{ textDecorationLine: 'underline', color: 'rosybrown' }}
              >
                Open website
              </Text>
            </TouchableHighlight>
          </View>
          <View
            style={{
              display: 'flex',
              flexBasis: '50%',
              backgroundColor: 'rosybrown',
              marginLeft: 30
            }}
          >
            <Button
              onPress={this.onVillaDirectionLinkPress}
              title="Get directions"
              color="#FFF"
              accessibilityLabel="Get directions to the villa"
            />
          </View>
        </View>
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
        <Text style={{ marginTop: 10, marginBottom: 10 }}>
          The Villa di Striano is one of the most valuable historical buildings
          in Mugello and it is an Historic Residence of ADSI (Italian Historic
          Houses Association).
        </Text>
        <Text style={{ marginTop: 10, marginBottom: 10 }}>
          Surrounded by Apennines, it has a unique panoramic position and it has
          a very large English style historical park with majestic old trees
          also of rare species.
        </Text>
        <Text style={{ marginTop: 10, marginBottom: 10 }}>
          From the main garden terrace you can admire one of Mugello’s most
          beautiful views. As you rediscover the calm atmosphere of a past
          lifestyle, romantic and intimate paths lead you through the park’s
          shady routes, down it’s narrow steps, to it’s little caves and
          fountains. The sunny limonaia, designed by Del Moro under the
          Buontalenti influence, offers visitors the pleasure of an unexpected
          surprise.
        </Text>
        <Text style={{ marginTop: 10, marginBottom: 10 }}>
          The vast and versatile interior halls are suitable to organize any
          kind of event. Villa di Striano is the ideal place for exclusive and
          prestigious events.
        </Text>
        <Text style={{ fontSize: 20, marginTop: 10, marginBottom: 10 }}>
          Event Schedule
        </Text>
        <FlatList
          data={this.state.eventSchedule}
          renderItem={({ item }) => (
            <Text tyle={{ marginTop: 5, marginBottom: 5 }}>{item.key}</Text>
          )}
        />
      </ScrollView>
    )
  }
}

export default EventScreen
