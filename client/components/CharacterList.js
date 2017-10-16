import React from 'react'
import { Link } from "react-router-dom"

const CharacterList = (props) => {
  let c = props.character
  const id = c.id
  // use the id to build a to variable - c.id 
  // on your name or picture wrap it in a Link and proivde the id as a parameter
  let ext = c.thumbnail.extension
  let path = c.thumbnail.path
  let imagePath = path + "/portrait_incredible." + ext
  return (
    <span>
      <div>
        <h2><Link to={`/details/${id}`}>{c.name}</Link></h2>
        <img src={imagePath} alt={c.name}/>

       </div>
    </span>
  )
}

export default CharacterList
