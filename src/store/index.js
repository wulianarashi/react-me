import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose //redux devtool插件
const store = createStore(reducer, composeEnhancers(
	applyMiddleware(thunk)
))

export default store