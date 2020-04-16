import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
	flag: false, //菜单开关
	swiper: [], 
	about: {},
	tv: [],
	vs: {},
	happy: []
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.MENU_TOGGLE:
			return state.set('flag', action.payload)
		case constants.HOME_DATA:
			return state.merge({
				'swiper': action.swiper,
				'about': action.about,
				'tv': action.tv,
				'vs': action.vs,
				'happy': action.happy
			})	
		default:
			return state;
	}
}