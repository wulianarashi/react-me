import { combineReducers } from 'redux-immutable'
import { reducer as homeReducer } from '../page/home/store'
import { reducer as movieReducer } from '../page/movie/store'
import { reducer as meReducer } from '../page/me/store'

const reducer = combineReducers({
	home: homeReducer,
	movie: movieReducer,
	me: meReducer
})

export default reducer
