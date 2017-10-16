import React from 'react'

const CharacterList = (props) => {
    let c = props.character
  return (
    <div>
        <h2>{c.name}</h2>
        <p>{c.description}</p>
        <img src={c.thumbnail.path} alt={c.name}/>
    </div>
  )
}

export default CharacterList
