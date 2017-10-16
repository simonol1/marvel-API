import React from 'react'
import {connect} from 'react-redux'

import {getCharacters} from '../actions/characters'
import CharacterList from './CharacterList'

class Characters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: []
    }
  }
  componentWillMount() {
    this.props.dispatch(getCharacters())
  }

  componentWillReceiveProps({characters}) {
    this.setState({
      characters: characters
    })
  }


  render() {
    return (
        <div>
          {this.state.characters.map((character) => <CharacterList character={character} />)}
        </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {characters: state.characters}

}

export default connect(mapStateToProps)(Characters)
