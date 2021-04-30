import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { getMessages } from '../api'
import { LIST_MESSAGE } from './actionTypes'

const store = createStore(rootReducer, applyMiddleware(thunk))

getMessages().then((r) => {
  store.dispatch({
    type: LIST_MESSAGE,
    payload: r
  })
})

export default store
