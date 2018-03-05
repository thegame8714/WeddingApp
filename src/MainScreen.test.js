import React from 'react'
import { mount } from 'enzyme'
import MainScreen from './MainScreen'
import CountDown from './CountDown/CountDown'
import WeatherWidget from './WheatherWidget'
describe.skip('MainScreen', () => {
  it('should render the Countdown component', () => {
    const mainScreenWrapper = mount(<MainScreen />)
    expect(mainScreenWrapper.find(CountDown).length).toBe(1)
  })

  it('should render the WeatherWidget component', () => {
    const mainScreenWrapper = mount(<MainScreen />)
    expect(mainScreenWrapper.find(WeatherWidget).length).toBe(1)
  })

  it('should render the AccomodationWidget', () => {})
})
