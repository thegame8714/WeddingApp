import React from 'react'
import {
  Alert,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Image
} from 'react-native'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)

    this._onPressButton = this._onPressButton.bind(this)
  }

  _onPressButton() {
    return this.props.navigation.navigate('Main')
  }

  render() {
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <Image source={require('../images/noi.jpg')} style={styles.bgImage} />
        <TouchableOpacity style={styles.button} onPress={this._onPressButton}>
          <Text>Come to celebrate with us</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  bgImage: {
    flex: 1,
    maxWidth: '100%',
    maxHeight: '100%',
    opacity: 0.3,
    zIndex: 0,
    position: 'absolute'
  },
  button: {
    display: 'flex',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
})

export default HomeScreen
