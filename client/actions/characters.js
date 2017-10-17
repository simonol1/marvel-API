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

export const changeLoadState = (newLoadState) => {
  return newLoadState ?
    {type: 'TOGGLE_LOADING_ON'} : 
    {type: 'TOGGLE_LOADING_OFF'}
}


export function getCharacters () {
  return (dispatch) => {
   dispatch(changeLoadState(true))
     request
       .get('https://gateway.marvel.com/v1/public/characters?apikey=e481756ef01f8f8ca6367e54de21f96f')
       .end((err, res) => {
        err ? dispatch(setErrorMessage("ERROR:" + err.message)) : dispatch(receiveCharacters(res.body.data.results))
        console.log(res.body)
      })
     }
   }

  //  export function getCharacterbyId (id) {
  //    return (dispatch) => {
  //      request
  //       .get(`https://gateway.marvel.com/v1/public/characters/${characterId}?apikey=e481756ef01f8f8ca6367e54de21f96f`)
  //       .end((err, res) => {
  //         err ? dispatch(setErrorMessage("ERROR:" + err.message)) : (res.body.data.results)
  //       })
  //     } 
  //   }
