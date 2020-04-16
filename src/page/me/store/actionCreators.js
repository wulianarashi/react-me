import * as constants from './constants'
import { fromJS } from 'immutable'
import { getData } from '../../../api/me'

const meData = ({ basic, work, project }) => ({
	type: constants.ME_DATA,
	basic: fromJS(basic), 
	work: fromJS(work),
	project: fromJS(project),
})

export const getMeInfo = () => {
	return (dispatch) => {
		getData().then( res => {
			const data = res.data
			if(res.state === 200) {
				dispatch(meData(data))
			}
		})
	}
}