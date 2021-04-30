import { ERROR_MESSAGE, SEND_MESSAGE } from './actionTypes'
export const enviarMensagem = (content) => {
  return dispatch => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: content
    }

    fetch('/message', requestOptions)
      .then(response => {
        return response.json().then(data => {
          if (response.ok) {
            return dispatch({
              type: SEND_MESSAGE,
              payload: data
            })
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
