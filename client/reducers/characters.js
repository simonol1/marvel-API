// state needs to change to handle more than one key
// state needs to be an empty

// state.characters.loading
// we dont want: state.characters.characters
const initialState = {
  loading: true,
  results: []
}

function characters (state = initialState, action) {
  switch (action.type) {
    case 'LOADING': 
      return {
        ...state,
        loading: true
      }
    case 'RECEIVE_CHARACTERS': 
      // return a new object. the easiest way to do that is with the spread operator i.e. ...something
      // we also wanna ensure that we keep the existing keys that we ARENT changing
      return {
        ...state,
        loading: false,
        results: action.characters
      }

    default:
      return state
  }
}

export default characters
