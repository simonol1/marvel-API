import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'

import App from '../../client/components/App'
import Header from '../../client/components/App'
Import Footer from '../../client/components/App'
import './setup-dom'

App.prototype.componentDidMount = () => {}

test('The title image renders on the page', t => {
  const wrapper = mount(<Header />)
  console.log(wrapper.html())
  t.is(wrapper.find('#header_image img[src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqmOQXn9ai3iH3IcyHW7bHPmaBUF6AI_HLZWFXJZ3_kF94CpN-"]').exists(), true)
})

test('The footer renders on the page', t=> {
  const wrapper = mount(<Footer />)
  t.is(wrapper.find('p').text(), 'Data provided by Marvel')
})
