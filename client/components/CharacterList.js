import React from 'react'

const CharacterList = (props) => {
  let c = props.character
  let ext = c.thumbnail.extension
  let path = c.thumbnail.path
  let imagePath = path + "/portrait_incredible." + ext
  return (
    <span>
      <div>
        <h2>{c.name}</h2>
        <img src={imagePath} alt={c.name}/>
      </div>
    </span>
  )
}

export default CharacterList
