import { RECEIVE_MESSAGE, LIST_MESSAGE, ERROR_MESSAGE } from '../actionTypes.js'

const initialState = {
  messages: []
}

export default function reducer (state = initialState , action) {
  switch (action.type) {
    case RECEIVE_MESSAGE: {
      const doc = { id: Math.random(), value: action.payload }
      state = {...state, messages: [...state.messages, doc] }
      return state
    }
    case LIST_MESSAGE: {
      state = {...state, messages: action.payload}
      return state
    }
    case ERROR_MESSAGE: {
      alert(action.payload)
      return state
    }
    default:
      return state
  }
}
