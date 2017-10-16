import React from 'react'
import {Link} from 'react-router-dom'

const CharacterList = (props) => {
  let c = props.character
  let ext = c.thumbnail.extension
  let path = c.thumbnail.path
  let imagePath = path + "/portrait_incredible." + ext
  return (
    <span>
      <div>
        <button>
        <Link to={CharacterDetails}>{c.name}</Link>
        </button>
        <img src={imagePath} alt={c.name}/>
      </div>
    </span>
  )
}

export default CharacterList
