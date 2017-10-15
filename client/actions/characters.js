import request from 'superagent'

export const receiveCharacters = (characters) => {
  return {
    type: 'RECEIVE_CHARACTERS',
    characters
  }
}

export const setErrorMessage = (message) => {
  return {
    type: 'SET_ERROR_MESSAGE',
    errorMessage: message
  }
}

export function getCharacters () {
  return (dispatch) => {
     request
       .get(`${process.env.URL}/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)
       .end((err, res) => {
        err ? dispatch(setErrorMessage("ERROR:" + err.message)) : dispatch(receiveCharacters(res.body))
      })
     }
   }
