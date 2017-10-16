import React from 'react'
import { Link } from "react-router-dom"

const CharacterList = (props) => {
    const c = props.character
    const id = c.id
    const ext = c.thumbnail.extension
    const path = c.thumbnail.path
    const imagePath = path + "/portrait_incredible." + ext
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
