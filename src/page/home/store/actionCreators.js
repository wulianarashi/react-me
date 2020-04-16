import * as constants from './constants'
import { fromJS } from 'immutable'
import { getData } from '../../../api/home'

//菜单切换
export const toggleMenuShow = (flag) => ({
	type: constants.MENU_TOGGLE,
	payload:flag
})


//home的数据
const homeData = ({ swiper, about, tv, vs, happy }) => ({
	type: constants.HOME_DATA,
	swiper: fromJS(swiper),
	about,
	tv: fromJS(tv),
	vs,
	happy: fromJS(happy)
})

export const getHomeInfo = () => {
	return (dispatch) => {
		getData().then( res => {
			const data = res.data
			if(res.state === 200) {
				dispatch(homeData(data))
			}
		})
	}
}