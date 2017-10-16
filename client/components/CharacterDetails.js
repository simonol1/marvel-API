import React from 'react'
import {connect} from 'react-redux'

import {getCharacters} from '../actions/characters'

  const renderCharacterDetails = (props) => (
      <div>
        <h1>{props.name}</h1>
        <p>Description: {characterDescription(props)} </p>
        // <p>Comics:{props.comics.items.name}</p>
     </div>
    )

  const characterDescription = (props) => {
      for(const i = 0;i < 100; i++) {
        (props.description == "") ? "I'm the most exciting hero in the world...where is my description!!" : props.description
      }
  }

  const Characters = ({character}) => {
      return (
        <div>
            {renderCharacterDetails(character)}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const characters = state.characters.filter((character) => character.id.toString() === id)

  return { character: characters[0] }
}

export default connect(mapStateToProps)(Characters)
