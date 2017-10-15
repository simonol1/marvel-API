import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Characters from './Characters'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1>Marvel Comics</h1>
      <Characters />
    </div>
  </Router>
)

export default App
