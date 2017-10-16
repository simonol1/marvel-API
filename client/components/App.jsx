import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Characters from './Characters'

const App = () => (
  <Router>
    <div className='app-container'>
      <img src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqmOQXn9ai3iH3IcyHW7bHPmaBUF6AI_HLZWFXJZ3_kF94CpN- '/>
      <Characters />
    </div>
  </Router>
)

export default App
