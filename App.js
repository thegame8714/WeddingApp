import React from 'react'
import { StyleSheet } from 'react-native'
import Navigator from './src/Navigator'

export default class App extends React.Component {
  render() {
    return <Navigator />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  }
})
