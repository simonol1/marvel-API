import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Header from './Header'
import Characters from './Characters'
import CharacterDetails from './CharacterDetails'
import Footer from './Footer'

const App = (props) => (
  <BrowserRouter>
    <div className='app-container'>
      <Header />
      <Route exact path="/" component={Characters} />
      <Route path='/details/:id' component={CharacterDetails}/>
      <Footer />
    </div>
  </BrowserRouter>
)

export default App
