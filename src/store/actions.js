import { getMessages } from '../api'
import { sendMessage } from '../socket'
import { ERROR_MESSAGE, LIST_MESSAGE, RECEIVE_MESSAGE } from './actionTypes'

export const sendMessageHandler = (chat, data) => {
  return dispatch => {
    try {
      sendMessage(chat, data)
    } catch (error) {
      return dispatch({
        type: ERROR_MESSAGE,
        payload: error
      })
    }
  }
}

export const receiveMessage = (data) => {
  return dispatch => {
    return dispatch({
      type: RECEIVE_MESSAGE,
      payload: data
    })
  }
}

export const listMessages = (chat) => {
  return dispatch => {
    getMessages(chat).then((r) => {
      return dispatch({
        type: LIST_MESSAGE,
        payload: r
      })
    })
  }
}
