import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
	flag: false, //导航和滑到顶部
	fantasy: [],
	other: [],
	ranking: []
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.TOGGLE_SHOW:
			return state.set('flag', action.payload)
		case constants.MOVIE_DATA:
			return state.merge({
				'fantasy': action.fantasy,
				'other': action.other,
				'ranking': action.ranking
			})	
		default:
			return state;
	}
}