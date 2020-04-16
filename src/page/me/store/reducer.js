import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
	basic: [], 
	work: [],
	project: [],
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.ME_DATA:
			return state.merge({
				'basic': action.basic,
				'work': action.work,
				'project': action.project,
			})	
		default:
			return state;
	}
}