import * as constants from './constants'
import { fromJS } from 'immutable'
import { getData } from '../../../api/movie'

//MOVIE的数据
const movieData = ({ fantasy, other, ranking }) => ({
	type: constants.MOVIE_DATA,
	fantasy: fromJS(fantasy),
	other: fromJS(other),
	ranking: fromJS(ranking)
})

//导航和滑到顶部的显示
export const toggleFlag = (flag) => ({
	type: constants.TOGGLE_SHOW,
	payload: flag
})

export const getMovieInfo = () => {
	return (dispatch) => {
		getData().then( res => {
			const data = res.data
			if(res.state === 200) {
				dispatch(movieData(data))
			}
		})
	}
}