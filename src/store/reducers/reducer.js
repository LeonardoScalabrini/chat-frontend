import { LIST_MESSAGE, ERROR_MESSAGE } from '../actionTypes.js'

const initialState = {
  messages: []
}

export default function reducer (state = initialState , action) {
  switch (action.type) {
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
