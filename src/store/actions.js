import { ERROR_MESSAGE } from './actionTypes'
export const addMensagem = (content) => {
  return dispatch => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content)
    }

    fetch('/message', requestOptions)
      .then(response => {
        return response.json().then(data => {
          if (response.ok) {
            return
          }
          return dispatch({
            type: ERROR_MESSAGE,
            payload: data
          })
        })
      })
      .catch(error => dispatch({
        type: ERROR_MESSAGE,
        payload: error
      }))
  }
}
