import React from 'react'
import { addDays } from 'date-fns'
import Countdown, { getSecondsToDeadline, getCountDown } from './CountDown'
import { mount } from 'enzyme'

describe('CoountDown', () => {
  it('should return the number of seconds to June, 23', () => {
    const date = new Date('2018-01-23').getTime()

    expect(getSecondsToDeadline(date)).toBe(15634800000)
  })

  it('should return the number of days, hours and seconds to June, 23', () => {
    const date = new Date('2018-01-23').getTime()

    expect(getCountDown(date)).toEqual({
      d: 180,
      h: 23,
      m: 0,
      s: 0
    })
  })

  it('should show the intial countdown', () => {
    const date = new Date('2018-01-23').getTime()
    const countDownWrapper = mount(<Countdown date={date} />)

    expect(countDownWrapper.find('div').text()).toMatch(
      /180 days 23 hours 0 minutes 0 seconds/
    )
  })

  it('should show the countdown after 1 second', done => {
    const date = new Date('2018-01-23').getTime()
    const countDownWrapper = mount(<Countdown date={date} />)

    setTimeout(() => {
      expect(countDownWrapper.find('div').text()).toMatch(
        /180 days 22 hours 59 minutes 59 seconds/
      )
      done()
      return
    }, 1000)
  })
})
