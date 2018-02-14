import React from 'react'
import {mount} from 'enzyme'
import MainScreen from './MainScreen'
import CountDown from './CountDown/CountDown'
describe('MainScreen', () => {
    it('should render the Countdown component', () => {
        const mainScreenWrapper = mount(<MainScreen />)
        expect(mainScreenWrapper.find(CountDown).length).toBe(1)
    })
})