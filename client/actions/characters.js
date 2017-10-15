import request from 'superagent'

export const receiveCharacters = (characters) => {
  return {
    type: 'RECEIVE_CHARACTERS',
    greetings
  }
}

export function getCharacters () {
  return (dispatch) => {
    request
      .get(`/api/v1/characters`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveCharacters(res.body))
      })
  }
}
