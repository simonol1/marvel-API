import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'

import App from '../../client/components/App'
import Header from '../../client/components/App'
import Footer from '../../client/components/App'

import './setup-dom'

App.prototype.componentDidMount = () => {}


// test('The footer renders on the page', t=> {
//   const wrapper = shallow(<Footer />)
//   t.is(wrapper.find('p').text(), 'Data provided by Marvel')
// })
