import React from 'react'
import {connect} from 'react-redux'

import {getCharacters} from '../actions/characters'

  const renderCharacterDetails = (props) => {
      const info = props.description
      const actualDescription = (info == "" )? "I'm the most exciting hero in the world...where is my description!!" : props.description
      const comics = props.comics.items
      return (
      <div>
        <h1>{props.name}</h1>
        <p>{actualDescription}</p>
        <h5>Comics:</h5>
        <ul>
            {comics.map((comic) => <span><li>{comic.name}</li></span> )}
        </ul>
     </div>
    )
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
