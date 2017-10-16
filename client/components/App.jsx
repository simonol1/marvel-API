import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Characters from './Characters'
import CharacterDetails from './CharacterDetails'
import Footer from './Footer'

const App = (props) => (
  <BrowserRouter>
    <div className='app-container'>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqmOQXn9ai3iH3IcyHW7bHPmaBUF6AI_HLZWFXJZ3_kF94CpN-' id='header_image'/>
      <Route exact path="/" component={Characters} />
      <Route path='/details/:id' component={CharacterDetails}/>
      <Footer />
    </div>
  </BrowserRouter>
)

export default App
