import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/index'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f

const enhancer = compose(
  applyMiddleware(thunk),
  devTools
)

const store = createStore(reducer, enhancer)

export default store